import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo111.png";

const LINKS = [
  { label: "Ballina", id: "#top" },
  { label: "Shërbimet", id: "#sherbimet" },
  { label: "Rreth Nesh", id: "#rreth" },
  { label: "Mjekët", id: "#mjeket" },
  { label: "Lokacioni", id: "#rezervo" },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-3">
        {/* Logo pill */}
        <Link
          to="/"
          className="flex items-center gap-2 bg-white rounded-full pl-2 pr-5 py-1.5 shadow-pill border border-line"
        >
          <span className="w-9 h-9 rounded-full bg-ink flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Aorta Plus" className="w-7 h-7 object-contain brightness-0 invert" />
          </span>
          <span className="leading-none">
            <span className="block font-extrabold tracking-tight text-[17px]">Aorta Plus</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-semibold">
              Poliklinika · 1996
            </span>
          </span>
        </Link>

        {/* Center pill nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white rounded-full p-1.5 shadow-pill border border-line">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.id}
              onClick={(e) => go(e, l.id)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                i === 0
                  ? "bg-white border border-ink text-ink"
                  : "text-neutral-600 hover:text-ink hover:bg-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-line text-[12px] font-semibold text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Hapur · 08:00 – 21:00
          </div>
          <a
            href="#rezervo"
            onClick={(e) => go(e, "#rezervo")}
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-white rounded-full px-6 py-3 text-[14px] font-bold hover:bg-mint-dark transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Rezervo Online
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden max-w-[1280px] mx-auto mt-2 bg-white rounded-[24px] border border-line shadow-soft p-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.id}
              onClick={(e) => go(e, l.id)}
              className="block px-5 py-3.5 rounded-2xl font-bold text-[16px] hover:bg-cream transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rezervo"
            onClick={(e) => go(e, "#rezervo")}
            className="mt-2 flex items-center justify-center gap-2 bg-ink text-white rounded-2xl px-5 py-4 font-bold"
          >
            Rezervo Online
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
