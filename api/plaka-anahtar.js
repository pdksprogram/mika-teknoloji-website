// PlateVision YEDEK ANAHTAR UCU (2026-09-21, Faz 4) — mikateknoloji.com
// Amac: ASIL sunucu (Sunucu 1/2) cokerse, istemci motor anahtari ZARFINI buradan alsin.
// GUVENLIK MODELI: burada saklanan sey firma+makine ozel SARILI ZARFTIR (device-lock). Zarfi
// acmak icin o cihazin DeviceKey'i + makine parmak izi gerekir; ikisi de yalniz o makinede vardir.
// Yani zarf herkese acik olsa bile ise yaramaz -> DeviceKey / MMK BURADA TUTULMAZ, sizmaz.
//   - MBS her basarili Dogrula'da bu cihazin GUNCEL zarfini buraya 'kaydet' eder (HMAC imzali).
//   - Istemci asil sunucuya ulasamazsa 'al' ile zarfi ceker, kendi DeviceKey'iyle cozer, kullanir.
//
// TABLO (Neon/Postgres, bir kez olusturulur):
//   CREATE TABLE IF NOT EXISTS plaka_anahtar (
//     device_id  text PRIMARY KEY,
//     sirket_kodu text,
//     zarf       text NOT NULL,
//     guncelleme timestamptz NOT NULL DEFAULT now()
//   );
// ENV (Vercel):
//   DATABASE_URL        (zaten var)
//   YEDEK_PUSH_SECRET   (MBS ile ORTAK sir; 'kaydet' istegini imzalar — rastgele 32+ bayt hex)

import { neon } from '@neondatabase/serverless';
import crypto from 'crypto';

function hmacHex(key, msg) {
  return crypto.createHmac('sha256', key).update(msg, 'utf8').digest('hex');
}
function sabitEsit(a, b) {
  const ba = Buffer.from(a || '', 'utf8'), bb = Buffer.from(b || '', 'utf8');
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Only POST' });

  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return res.status(500).json({ ok: false, message: 'DB yok' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const mod = (body && body.mod) || '';
  const deviceId = (body && body.deviceId ? String(body.deviceId) : '').trim();
  if (!deviceId) return res.status(400).json({ ok: false, message: 'deviceId bos' });

  const sql = neon(dbUrl);
  try {
    if (mod === 'kaydet') {
      // MBS -> zarfi tazele. Auth: HMAC(YEDEK_PUSH_SECRET, deviceId|zarf).
      const secret = process.env.YEDEK_PUSH_SECRET;
      if (!secret) return res.status(500).json({ ok: false, message: 'push sir yok' });
      const zarf = (body.zarf ? String(body.zarf) : '').trim();
      const sirketKodu = (body.sirketKodu ? String(body.sirketKodu) : '').trim();
      if (!zarf) return res.status(400).json({ ok: false, message: 'zarf bos' });
      const beklenen = hmacHex(secret, deviceId + '|' + zarf);
      if (!sabitEsit(beklenen, (body.sig || '').toLowerCase()))
        return res.status(403).json({ ok: false, message: 'imza gecersiz' });
      await sql`INSERT INTO plaka_anahtar (device_id, sirket_kodu, zarf, guncelleme)
                VALUES (${deviceId}, ${sirketKodu}, ${zarf}, now())
                ON CONFLICT (device_id) DO UPDATE SET zarf = EXCLUDED.zarf,
                     sirket_kodu = EXCLUDED.sirket_kodu, guncelleme = now()`;
      return res.status(200).json({ ok: true });
    }

    if (mod === 'al') {
      // Istemci -> zarfi getir (device-lock oldugundan imza gerekmez; cozemeyen kullanamaz).
      const rows = await sql`SELECT zarf FROM plaka_anahtar WHERE device_id = ${deviceId} LIMIT 1`;
      if (!rows || rows.length === 0) return res.status(200).json({ ok: false, message: 'kayit yok' });
      return res.status(200).json({ ok: true, zarf: rows[0].zarf });
    }

    return res.status(400).json({ ok: false, message: 'mod gecersiz (kaydet/al)' });
  } catch (e) {
    return res.status(500).json({ ok: false, message: 'hata: ' + (e && e.message ? e.message : 'bilinmeyen') });
  }
}
