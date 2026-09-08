import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-cream pt-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top card */}
        <div className="bg-white rounded-[28px] border border-line p-8 md:p-12">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-9 h-9 rounded-full bg-mint flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <span className="font-extrabold text-lg tracking-tight">Aorta Plus</span>
              </div>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
                Poliklinika Aorta Plus ofron kujdes shëndetësor premium në Ferizaj që nga viti 1996 —
                me ekip të specializuar, teknologji moderne dhe vëmendje personale për çdo pacient.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-right md:justify-items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">Telefoni</p>
                <a href="tel:044172429" className="font-extrabold text-lg hover:text-mint transition">044-172-429</a>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">Email</p>
                <a href="mailto:aortaplus@yahoo.com" className="font-extrabold text-lg hover:text-mint transition break-all">aortaplus@yahoo.com</a>
              </div>
            </div>
          </div>

          <div className="h-px bg-line my-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[14px]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-4">Orari i Klinikës</p>
              <ul className="space-y-2 text-neutral-600 font-medium">
                <li>E Hënë – E Premte · 08:00 – 21:00</li>
                <li>E Shtunë · 08:00 – 21:00</li>
                <li>E Diel · Mbyllur</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-4">Navigimi</p>
              <ul className="space-y-2.5 font-semibold">
                <li><a href="#sherbimet" onClick={(e) => scrollTo(e, "#sherbimet")} className="hover:text-mint transition">Shërbimet</a></li>
                <li><a href="#rreth" onClick={(e) => scrollTo(e, "#rreth")} className="hover:text-mint transition">Rreth Nesh</a></li>
                <li><a href="#mjeket" onClick={(e) => scrollTo(e, "#mjeket")} className="hover:text-mint transition">Mjekët</a></li>
                <li><Link to="/" className="hover:text-mint transition">Ballina</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-4">Shërbimet</p>
              <ul className="space-y-2.5 font-semibold">
                <li><Link to="/biochem" className="hover:text-mint transition">Laboratori Biokimik</Link></li>
                <li><Link to="/medi" className="hover:text-mint transition">Mjekësia Familjare</Link></li>
                <li><Link to="/orl" className="hover:text-mint transition">ORL</Link></li>
                <li><Link to="/cardio" className="hover:text-mint transition">Kardiologji</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-4">Na Ndiqni</p>
              <ul className="space-y-2.5 font-semibold">
                <li><a href="https://www.facebook.com/profile.php?id=61557633473126" target="_blank" rel="noreferrer" className="hover:text-mint transition">Facebook</a></li>
                <li><a href="https://www.instagram.com/aorta.pluss/" target="_blank" rel="noreferrer" className="hover:text-mint transition">Instagram</a></li>
                <li><a href="tel:044172429" className="hover:text-mint transition">044-172-429</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="py-8 md:py-10 text-center select-none">
          <h2 className="display-tight font-extrabold uppercase text-[15.5vw] lg:text-[11rem] leading-[0.85] tracking-tightest">
            Aorta<span className="text-mint">+</span>Plus
          </h2>
          <div className="mt-4 flex items-center justify-between text-[12px] font-semibold text-neutral-400 px-2">
            <span>© 2026 Poliklinika Aorta Plus. Të gjitha të drejtat e rezervuara.</span>
            <span className="hidden sm:block">Ferizaj · Kosovë · Që nga 1996</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
