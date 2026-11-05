import { useCallback, useEffect, useRef, useState, type KeyboardEvent as TusOlayi } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Kanonik, PaylasimEtiketleri } from "@/seo/SEO";
import { DEMO_TELEFON, DEMO_TELEFON_GORUNEN, whatsappMesajAdresi } from "@/lib/iletisim";
import { trackEvent } from "@/lib/analytics";
import { OLCU, SOZLUK, type Dil } from "./sozluk";
import "./anasayfa.css";

const SITE = "https://mikateknoloji.com";
const FOTO = "https://images.unsplash.com/photo-1590650281460-fd225954c811?auto=format&fit=crop&w=2400&q=80";
const BOS = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const GIRIS_ADRESI = "https://pdkspersoneltakip.com/";
const TEL = `tel:${DEMO_TELEFON}`;

interface ResimOz {
  d: Dil;
  ad: string;
  alt: string;
  onc?: boolean;
  mob?: string | null;
  mobildeYok?: boolean;
}

function Resim({ d, ad, alt, onc, mob, mobildeYok }: ResimOz) {
  const [g, h] = OLCU[`${d}/${ad}`];
  const yukleme = onc ? { fetchpriority: "high" } : { loading: "lazy" as const };
  const im = <img src={`/anasayfa/${d}/${ad}.webp`} width={g} height={h} alt={alt} {...yukleme} />;
  if (mob) {
    const [g2, h2] = OLCU[`${d}/${mob}`];
    const dar = `m2_${mob.slice(2)}`;
    const o3 = OLCU[`${d}/${dar}`];
    return (
      <picture>
        {o3 && <source media="(max-width:389px)" srcSet={`/anasayfa/${d}/${dar}.webp`} width={o3[0]} height={o3[1]} />}
        <source media="(max-width:860px)" srcSet={`/anasayfa/${d}/${mob}.webp`} width={g2} height={h2} />
        {im}
      </picture>
    );
  }
  if (mobildeYok) {
    return (
      <picture>
        <source media="(max-width:820px)" srcSet={BOS} />
        {im}
      </picture>
    );
  }
  return im;
}

function Tel({ d, ad, alt, onc }: { d: Dil; ad: string; alt: string; onc?: boolean }) {
  return (
    <div className="tel">
      <Resim d={d} ad={ad} alt={alt} onc={onc} />
    </div>
  );
}

const odak = (d: Dil, ad: string) => (OLCU[`${d}/m_${ad}`] ? `m_${ad}` : null);

const Tik = () => <svg className="tik" aria-hidden="true"><use href="#ms-tik" /></svg>;

function Marka({ ana }: { ana: string }) {
  return (
    <Link href={ana} className="marka" aria-label="Mika Teknoloji" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
      <svg width="34" height="37" aria-hidden="true"><use href="#ms-mk" /></svg>
      <span><b>M<i>İKA</i></b><small>TEKNOLOJİ</small></span>
    </Link>
  );
}

function Seo({ d }: { d: Dil }) {
  const s = SOZLUK[d].seo;
  const yol = d === "tr" ? "/tr" : "/";
  const adres = d === "tr" ? `${SITE}/tr` : `${SITE}/`;
  return (
    <>
      <Kanonik yol={yol} />
      <PaylasimEtiketleri />
      <Helmet>
        <html lang={d} />
        <title>{s.baslik}</title>
        <meta name="description" content={s.aciklama} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="alternate" hrefLang="en" href={`${SITE}/`} />
        <link rel="alternate" hrefLang="tr" href={`${SITE}/tr`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cuprum:wght@700&family=Inter:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap" />
        <meta property="og:locale" content={s.yerel} />
        <meta property="og:locale:alternate" content={s.diger} />
        <meta property="og:title" content={s.baslik} />
        <meta property="og:description" content={s.aciklama} />
        <meta name="twitter:title" content={s.baslik} />
        <meta name="twitter:description" content={s.aciklama} />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE}/#organization`,
              name: "Mika Teknoloji Kontrol Sistemleri",
              alternateName: "Mika Teknoloji",
              url: SITE,
              logo: `${SITE}/mika-logo.jpg`,
              image: `${SITE}/mika-logo.jpg`,
              description: s.kurum,
              email: "info@mikateknoloji.com",
              telephone: "+90-546-712-22-96",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Perpa Ticaret Merkezi A Blok 4-5.Kat No:0158",
                addressLocality: "Şişli",
                addressRegion: "İstanbul",
                postalCode: "34384",
                addressCountry: "TR",
              },
              geo: { "@type": "GeoCoordinates", latitude: "41.0602", longitude: "28.9847" },
              openingHours: ["Mo-Fr 09:00-18:00"],
              sameAs: ["https://www.linkedin.com/company/mika-teknoloji", "https://www.facebook.com/mikateknoloji"],
            },
            { "@context": "https://schema.org", "@type": "WebSite", url: adres, name: "Mika Teknoloji", inLanguage: d, description: s.site },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Mika PDKS",
              description: s.yazilim,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
            },
          ])}
        </script>
      </Helmet>
    </>
  );
}

function Sekmeler({ grup, adlar, secili, sec, sinif }: { grup: string; adlar: string[]; secili: number; sec: (i: number) => void; sinif?: string }) {
  // Klavye: ok tuşları ve Home/End sekme değiştirir, Tab sekme grubundan çıkar.
  const tus = (e: TusOlayi<HTMLDivElement>) => {
    const n = adlar.length;
    const hedef: Record<string, number> = { ArrowRight: (secili + 1) % n, ArrowLeft: (secili - 1 + n) % n, Home: 0, End: n - 1 };
    const yeni = hedef[e.key];
    if (yeni === undefined) return;
    e.preventDefault();
    sec(yeni);
    e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[yeni]?.focus();
  };
  return (
    <div className={`sekmeler${sinif ? ` ${sinif}` : ""}`} role="tablist" data-grup={grup} onKeyDown={tus}>
      {adlar.map((a, i) => (
        <button key={a} id={`${grup}-s${i}`} className="sekme" type="button" role="tab" aria-selected={i === secili} aria-controls={`${grup}-p${i}`} tabIndex={i === secili ? 0 : -1} onClick={() => sec(i)}>
          {a}
        </button>
      ))}
    </div>
  );
}

function AnaSayfa({ d }: { d: Dil }) {
  const T = SOZLUK[d];
  const ana = d === "tr" ? "/tr" : "/";
  const kok = useRef<HTMLDivElement>(null);
  const ust = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLButtonElement>(null);
  const [acik, setAcik] = useState(false);
  const [panelUst, setPanelUst] = useState(66);
  const [sos, setSos] = useState(0);
  const [sek, setSek] = useState(0);

  // Belirme hareketi: yalnız uygulama çalışıyorsa gizler, JavaScript yoksa içerik görünür kalır.
  useEffect(() => {
    const k = kok.current;
    if (!k) return;
    k.classList.add("hz");
    const el = k.querySelectorAll(".rv-b,.rv-u");
    if (!("IntersectionObserver" in window)) {
      el.forEach((e) => e.classList.add("on"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.2 },
    );
    el.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [d]);

  const menu = useCallback((ac: boolean) => {
    if (ac && ust.current) setPanelUst(Math.max(0, ust.current.getBoundingClientRect().bottom));
    setAcik(ac);
  }, []);

  // Açık menü: arka sayfa kaymaz, tıklanmaz, odak almaz.
  useEffect(() => {
    const k = kok.current;
    if (!k) return;
    document.documentElement.classList.toggle("menu-kilit", acik);
    Array.from(k.children).forEach((e) => {
      if (e !== ust.current && e.tagName !== "svg") (e as HTMLElement).inert = acik;
    });
    return () => document.documentElement.classList.remove("menu-kilit");
  }, [acik]);

  // Esc kapatır, odak hamburgere döner; Tab açık menünün içinde dolaşır.
  useEffect(() => {
    if (!acik) return;
    const tus = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        menu(false);
        hamburger.current?.focus();
        return;
      }
      if (ev.key !== "Tab" || !panel.current || !hamburger.current) return;
      const baglar = panel.current.querySelectorAll<HTMLElement>("a");
      const son = baglar[baglar.length - 1];
      const simdi = document.activeElement;
      if (ev.shiftKey && simdi === hamburger.current) {
        ev.preventDefault();
        son.focus();
      } else if (!ev.shiftKey && simdi === son) {
        ev.preventDefault();
        hamburger.current.focus();
      } else if (!panel.current.contains(simdi) && simdi !== hamburger.current) {
        ev.preventDefault();
        hamburger.current.focus();
      }
    };
    const genis = window.matchMedia("(min-width:1101px)");
    const degis = (e: MediaQueryListEvent) => { if (e.matches) menu(false); };
    document.addEventListener("keydown", tus);
    genis.addEventListener("change", degis);
    return () => {
      document.removeEventListener("keydown", tus);
      genis.removeEventListener("change", degis);
    };
  }, [acik, menu]);

  // Gizli sekmedeki öğe görünmediği için belirme tetiklenmez; sekme değişince hepsi görünür sayılır.
  const sekmeSec = (grup: "sos" | "sek", i: number) => {
    (grup === "sos" ? setSos : setSek)(i);
    kok.current?.querySelectorAll("[data-y]").forEach((y) => y.classList.add("on"));
  };

  const iz = (eylem: string, etiket: string) => () => trackEvent("Contact Request", eylem, etiket);
  const altNot = T.not_;

  const menuBaglari = T.menu.map(([a, u]) => <a key={u} href={u}>{a}</a>);

  return (
    <div className="mh" ref={kok}>
      <Seo d={d} />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <symbol id="ms-mk" viewBox="0 0 40 44">
            <path d="M20 2.5 36.5 12v20L20 41.5 3.5 32V12Z" fill="none" stroke="#F5A800" strokeWidth="3" strokeLinejoin="round" />
            <path d="M11.5 30.5V13.5l8.5 10 8.5-10v17" fill="none" stroke="currentColor" strokeWidth="3.6" />
          </symbol>
          <symbol id="ms-tik" viewBox="0 0 20 20"><path d="M4 10.5 8.2 15 16 5.5" fill="none" stroke="currentColor" strokeWidth="2.4" /></symbol>
          <symbol id="ms-x" viewBox="0 0 20 20"><path d="M5 5l10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="2.4" /></symbol>
        </defs>
      </svg>

      <header className={`ust${acik ? " menu-acik" : ""}`} ref={ust}>
        <div className="gen">
          <Marka ana={ana} />
          <nav className="menu" aria-label="Menu">{menuBaglari}</nav>
          <div className="sag">
            <Link href={T.dil_yol} className="dil" hrefLang={T.dil_kod} lang={T.dil_kod} aria-label={T.dil_ad}>{T.dil_kisa}</Link>
            <a className="giris" href={GIRIS_ADRESI} target="_blank" rel="noopener noreferrer">{T.giris}</a>
            <a className="btn birincil" href="#demo">{T.cta_kisa}</a>
            <button
              ref={hamburger}
              className={`hamburger${acik ? " acik" : ""}`}
              type="button"
              aria-label="Menu"
              aria-expanded={acik}
              aria-controls="ustPanel"
              onClick={() => menu(!acik)}
            >
              <svg className="ac" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" /></svg>
              <svg className="kapa" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
          </div>
        </div>
        <div
          className="ust-panel"
          id="ustPanel"
          ref={panel}
          hidden={!acik}
          style={{ top: panelUst }}
          onClick={(ev) => { if ((ev.target as Element).closest("a")) menu(false); }}
        >
          <div className="gen">
            <nav aria-label="Menu">
              {menuBaglari}
              <a href={GIRIS_ADRESI} target="_blank" rel="noopener noreferrer">{T.giris}</a>
              <Link href={T.dil_yol} hrefLang={T.dil_kod} lang={T.dil_kod}>{T.dil_ad}</Link>
            </nav>
            <a className="btn birincil" href="#demo">{T.cta_kisa}</a>
          </div>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="arka" aria-hidden="true"><img src={FOTO} alt="" {...{ fetchpriority: "high" }} /></div>
        <div className="gen hero-izgara">
          <div className="hero-sol">
            <h1>{T.h1a}<br /><span>{T.h1b}</span></h1>
            <div className="hero-alt">
              <div>
                <p className="oz">{T.oz}</p>
                <div className="hero-cta">
                  <a className="btn birincil" href="#demo">{T.cta}</a>
                  <a className="btn hayalet" href={TEL} onClick={iz("phone_home", "Hero")}>{DEMO_TELEFON_GORUNEN}</a>
                </div>
              </div>
              <div className="hero-liste">
                <Resim d={d} ad="liste" alt={T.alt_liste} onc mobildeYok />
                <p className="not">{altNot}</p>
              </div>
            </div>
          </div>
          <div className="hero-tel">
            <Tel d={d} ad="patron" alt={T.alt_tel} onc />
            <p className="not">{altNot}</p>
          </div>
        </div>
      </section>

      <section className="bolum" id="urun">
        <div className="gen">
          <div className="iki">
            <div className="metin rv-b">
              <h2>{T.neden}</h2>
              <ul className="nedenler" style={{ marginTop: 24 }}>
                {T.nedenler.map(([a, b]) => <li key={a}><h3>{a}</h3><p>{b}</p></li>)}
              </ul>
            </div>
            <div className="kare sadece-d">
              <div className="panel rv-u"><Resim d={d} ad="adminim" alt={T.alt_adminim} /></div>
              <p className="not">{altNot}</p>
            </div>
            <div className="kare sadece-m odak">
              <div className="panel dar rv-u">
                <div className="tel tel-yarim"><Resim d={d} ad="patron2_ust" alt={T.alt_tel} /></div>
              </div>
              <p className="not">{altNot}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bolum gri">
        <div className="gen">
          <div className="baslik rv-b"><h2>{T.dag}</h2></div>
          <div className="karsi">
            <div className="rv-b">
              <h3>{T.dag_sol}</h3>
              <ul className="liste koyu">
                {T.dag_x.map((a) => <li key={a}><svg className="x" aria-hidden="true"><use href="#ms-x" /></svg>{a}</li>)}
              </ul>
            </div>
            <div className="sag-k rv-u">
              <h3>{T.dag_sag}</h3>
              <ul className="liste koyu">{T.dag_t.map((a) => <li key={a}><Tik />{a}</li>)}</ul>
              <div className="panel odakli"><Resim d={d} ad="liste" alt={T.alt_liste} mob={odak(d, "liste")} /></div>
              <p className="not">{altNot}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bolum" id="akis">
        <div className="gen">
          {T.bloklar.map((b, i) => {
            const telli = b.tip === "tel" || b.tip === "kucuk";
            const sinif = `iki${telli ? " telli" : ""}${i % 2 ? " ters" : ""}`;
            return (
              <div className={sinif} key={b.et}>
                <div className="metin rv-b">
                  <span className="etiket">{b.et}</span>
                  <h2>{b.h}</h2>
                  <p>{b.p}</p>
                  <ul className="liste koyu">{b.li.map((a) => <li key={a}><Tik />{a}</li>)}</ul>
                </div>
                <div className={`kare${b.tip === "tel" ? "" : " odak"}`}>
                  {b.tip === "tel" ? (
                    <div className="panel dar rv-u"><Tel d={d} ad={b.img} alt={b.alt} /></div>
                  ) : (
                    <div className={`panel${b.tip === "kucuk" ? " kucuk" : ""} odakli rv-u`}>
                      <Resim d={d} ad={b.img} alt={b.alt} mob={odak(d, b.img)} />
                    </div>
                  )}
                  <p className="not">{altNot}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bolum gri" id="mobil">
        <div className="gen">
          <div className="baslik rv-b"><h2>{T.mobil}</h2><p>{T.mobil_p}</p></div>
          <div className="teller">
            {T.teller.map(([a, b]) => (
              <figure className="rv-u" key={a}>
                <Tel d={d} ad={a} alt={b} />
                <figcaption>{b}</figcaption>
                <p className="not">{altNot}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bolum" id="sosyal">
        <div className="gen">
          <div className="sosyal">
            <div className="metin rv-b">
              <h2>{T.sos_h}</h2>
              <p>{T.sos_p}</p>
              <Sekmeler grup="sos" adlar={T.sos.map((s) => s[2])} secili={sos} sec={(i) => sekmeSec("sos", i)} />
            </div>
            <div className="teller">
              {T.sos.map(([a, b], i) => (
                <figure className="rv-u" id={`sos-p${i}`} role="tabpanel" aria-labelledby={`sos-s${i}`} data-y={i} data-acik={i === sos} key={a}>
                  <Tel d={d} ad={a} alt={b} />
                  <figcaption>{b}</figcaption>
                  <p className="not">{T.not_sos}</p>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bolum gri" id="sektor">
        <div className="gen">
          <div className="baslik rv-b"><h2>{T.sektor}</h2></div>
          <Sekmeler grup="sek" sinif="sektor-sekme" adlar={T.sektorler.map((s) => s[0])} secili={sek} sec={(i) => sekmeSec("sek", i)} />
          <div>
            {T.sektorler.map((s, i) => {
              const kucuk = d === "en" && s[3] === "bordro";
              const mob = odak(d, s[3]);
              return (
                <div className={`sektor-yuz iki${kucuk ? " telli" : ""}`} id={`sek-p${i}`} role="tabpanel" aria-labelledby={`sek-s${i}`} data-y={i} data-acik={i === sek} key={s[0]}>
                  <div className="metin"><h3>{s[1]}</h3><p>{s[2]}</p></div>
                  {mob ? (
                    <div className="kare odak">
                      <div className={`panel${kucuk ? " kucuk" : ""} odakli`}><Resim d={d} ad={s[3]} alt={s[4]} mob={mob} /></div>
                      <p className="not">{altNot}</p>
                    </div>
                  ) : (
                    <>
                      <div className="kare sadece-d">
                        <div className="panel"><Resim d={d} ad={s[3]} alt={s[4]} /></div>
                        <p className="not">{altNot}</p>
                      </div>
                      {/* Odak kırpması olmayan web ekranı mobilde küçültülmez: yönetici telefonu gösterilir */}
                      <div className="kare sadece-m odak">
                        <div className="panel dar"><Tel d={d} ad="patron" alt={T.alt_tel} /></div>
                        <p className="not">{altNot}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="son" id="demo">
        <div className="gen rv-b">
          <h2>{T.son_h}</h2>
          <p>{T.son_p}</p>
          <Link href="/iletisim" className="btn birincil">{T.cta}</Link>
          <a className="tel-no" href={TEL} onClick={iz("phone_home", "Son")}>{DEMO_TELEFON_GORUNEN}</a>
          <a
            className="tel-no"
            href={whatsappMesajAdresi(d === "tr" ? "Merhaba, web sitenizden yazıyorum." : "Hello, I am writing from your website.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={iz("whatsapp_home", "Son")}
          >
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="alt">
        <div className="gen">
          <div className="alt-izgara">
            <div><Marka ana={ana} /></div>
            {T.alt.map(([a, l]) => (
              <div key={a}>
                <strong>{a}</strong>
                {l.map(([x, u]) => <Link key={u} href={u}>{x}</Link>)}
              </div>
            ))}
          </div>
          {/* Yasal ad ve adres: Meta işletme doğrulaması ve PayTR için her sayfada birebir kalır */}
          <div className="alt-yasal">
            Mika Teknoloji — Ercan Toksoy · Perpa Ticaret Merkezi A Blok 4-5. Kat No:0158, Şişli / İstanbul ·{" "}
            <a href={TEL}>{DEMO_TELEFON_GORUNEN}</a> · <a href="mailto:info@mikateknoloji.com">info@mikateknoloji.com</a>
          </div>
          <div className="alt-cizgi">© Mika Teknoloji</div>
        </div>
      </footer>
    </div>
  );
}

export function AnaSayfaEn() {
  return <AnaSayfa d="en" />;
}

export function AnaSayfaTr() {
  return <AnaSayfa d="tr" />;
}
