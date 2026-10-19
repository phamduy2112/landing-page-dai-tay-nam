import React from 'react';
import { useState } from "react";
import logo from "../../public/assets/cropped-Logo-dai-tay-nam-225x62.png.webp";

const navItems = [
  { label: "Khó Khăn", href: "#language-challenges" },
  { label: "Khóa Học", href: "#programs-hub" },
  { label: "Lộ Trình", href: "#roadmap" },
  { label: "Hỏi Đáp", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#E2E8F0] bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-xl font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-5">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Trang chủ Đại Tây Nam Edu" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Đại Tây Nam Logo" className="h-[52px] w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-[22px] md:flex" aria-label="Menu chính">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-1.5 text-[15px] font-semibold text-[#334155] transition-colors duration-300 hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-sm bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3.5 md:flex">
            <a
              href="#consult-form"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border border-transparent bg-primary px-[26px] py-[13px] text-[15px] font-bold text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_10px_22px_-2px_rgba(13,134,38,0.45)]"
            >
              Tư Vấn Miễn Phí
            </a>
          </div>

          <button
            type="button"
            className="block cursor-pointer p-2 text-[#0F172A] md:hidden"
            aria-label={menuOpen ? "Đóng menu di động" : "Mở menu di động"}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-drawer"
          aria-label="Menu di động"
          className="absolute left-0 right-0 top-full z-[99] flex flex-col gap-3.5 border-b-2 border-[#E2E8F0] bg-white p-5 shadow-[0_20px_35px_-5px_rgba(15,23,42,0.1),0_8px_10px_-6px_rgba(15,23,42,0.04)] md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#E2E8F0] py-2 text-[17px] font-semibold text-[#334155] transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#consult-form"
            onClick={() => setMenuOpen(false)}
            className="mt-2.5 inline-flex items-center justify-center rounded-xl bg-primary px-[26px] py-[13px] text-[15px] font-bold text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)] transition-colors hover:bg-primary-dark"
          >
            Đăng Ký Tư Vấn
          </a>
        </nav>
      )}
    </header>
  );
}