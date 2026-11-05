import { Link } from "wouter";

// Ana sayfadaki markanın aynısı: altıgen + M, MİKA / TEKNOLOJİ. Ortak başlık ve alt bölümde kullanılır.
export default function MikaMarka({ href = "/tr" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="flex min-h-[44px] flex-none items-center gap-2.5 text-white"
      aria-label="Mika Teknoloji"
      data-testid="logo-link"
      onClick={() => window.scrollTo({ top: 0, left: 0 })}
    >
      <svg viewBox="0 0 40 44" className="h-[31px] w-7 lg:h-[37px] lg:w-[34px]" aria-hidden="true">
        <path d="M20 2.5 36.5 12v20L20 41.5 3.5 32V12Z" fill="none" stroke="#F5A800" strokeWidth="3" strokeLinejoin="round" />
        <path d="M11.5 30.5V13.5l8.5 10 8.5-10v17" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        <b className="block font-['Manrope',sans-serif] text-lg font-extrabold leading-[18px] tracking-[.06em] lg:text-[22px] lg:leading-[22px]">
          M<i className="not-italic text-[#F5A800]">İKA</i>
        </b>
        <small className="block text-[8px] font-semibold leading-[13px] tracking-[.22em] opacity-85 lg:text-[9px]">TEKNOLOJİ</small>
      </span>
    </Link>
  );
}
