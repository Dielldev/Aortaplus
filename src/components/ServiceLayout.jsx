import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ALL = [
  { to: "/biochem", label: "Laboratori Biokimik" },
  { to: "/medi", label: "Mjekësia Familjare" },
  { to: "/orl", label: "ORL" },
  { to: "/surgery", label: "Kirurgji" },
  { to: "/Pedri", label: "Pediatri" },
  { to: "/cardio", label: "Kardiologji" },
];

function ServiceLayout({ eyebrow, title, intro, image, points, note }) {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-5 py-2.5 text-[13px] font-bold hover:shadow-pill transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              Kthehu
            </Link>
            <span className="hidden sm:inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-400">
              Aorta Plus · {eyebrow}
            </span>
          </div>

          <span className="inline-block bg-white border border-line rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 mb-5">
            {eyebrow}
          </span>
          <h1 className="display-tight font-extrabold uppercase text-[11vw] sm:text-6xl lg:text-7xl max-w-4xl">
            {title}
          </h1>
          <p className="text-neutral-500 text-[16px] leading-relaxed max-w-2xl mt-5">{intro}</p>

          <div className="grid lg:grid-cols-2 gap-4 mt-10">
            <div className="bg-white rounded-[28px] border border-line p-8 sm:p-10 flex flex-col justify-between">
              <ul className="space-y-4">
                {points.slice(0, 6).map((p) => (
                  <li key={p.title} className="flex gap-4 items-start bg-cream border border-line rounded-2xl p-5">
                    <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center shrink-0 font-extrabold text-[14px]">
                      {p.title[0]}
                    </span>
                    <span>
                      <span className="block font-extrabold text-[15px]">{p.title}</span>
                      <span className="block text-[14px] text-neutral-500 font-medium mt-0.5 leading-relaxed">{p.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              {note && <p className="text-[14px] text-neutral-500 font-medium leading-relaxed mt-6 bg-mint-soft rounded-2xl p-5">{note}</p>}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/#rezervo" className="inline-flex items-center gap-2 bg-ink text-white rounded-full px-7 py-3.5 font-bold text-[14px] hover:bg-mint-dark transition">
                  Rezervo termin
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:044172429" className="inline-flex items-center gap-2 bg-cream border border-line rounded-full px-7 py-3.5 font-bold text-[14px] hover:shadow-pill transition">
                  044-172-429
                </a>
              </div>
            </div>
            <div className="relative rounded-[28px] overflow-hidden min-h-[380px] lg:min-h-[540px]">
              <img src={image} alt={eyebrow} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 bg-white/95 rounded-full px-5 py-2.5 text-[13px] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" /> E Hënë – E Shtunë · 08:00–21:00
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-5 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-mint-soft flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                <p className="text-[14px] font-semibold leading-snug">Ekip i specializuar & pajisje moderne për diagnostikim të saktë.</p>
              </div>
            </div>
          </div>

          {/* other services */}
          <div className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">Shërbime të tjera</p>
            <div className="flex flex-wrap gap-2">
              {ALL.map((s) => (
                <Link key={s.to} to={s.to} className="bg-white border border-line rounded-full px-5 py-2.5 text-[13px] font-bold hover:bg-ink hover:text-white transition">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceLayout;
