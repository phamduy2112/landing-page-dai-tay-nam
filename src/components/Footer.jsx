import React from "react";
import logo from "../../public/assets/cropped-Logo-dai-tay-nam-225x62.png.webp";

const languageLinks = [
  "Tiếng Hàn Sơ Cấp & TOPIK I",
  "Tiếng Hàn Trung Cấp TOPIK 3-4",
  "Luyện Phỏng Vấn Visa Hàn Quốc",
  "Tiếng Trung Chữ Phồn Thể",
  "Luyện Thi Chứng Chỉ TOCFL",
  "Các Khóa Học Ngoại Ngữ Cấp Tốc",
];

const studyAbroadLinks = [
  "Du Học Hàn Quốc Hệ Tiếng (D4-1)",
  "Du Học Đại Học & Thạc Sĩ (D2)",
  "Học Bổng Du Học Hàn Quốc",
  "Du Học Đài Loan Vừa Học Vừa Làm",
  "Chương Trình Đài Loan Hệ 1+4",
  "Luyện Phỏng Vấn Visa TECO / ĐSQ",
];

function FooterLinkGroup({ title, links, href }) {
  return (
    <div className="min-w-0">
      <h4 className="mb-5 text-base font-extrabold tracking-[-0.01em] text-white">{title}</h4>
      <ul className="space-y-[11px]">
        {links.map((label) => (
          <li key={label}>
            <a href={href} className="inline-block text-[#94A3B8] transition-all duration-200 hover:translate-x-1 hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactIcon({ type }) {
  const paths = {
    pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    web: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  };
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0">{paths[type]}</svg>;
}

/**
 * Footer Đại Tây Nam Edu - React JSX + Tailwind CSS.
 * Đặt logo tại public/assets/LOGO (2).png hoặc truyền prop logoSrc.
 */
export default function Footer({ logoSrc = logo, className = "" }) {
  return (
    <footer className={`w-full border-t border-white/[0.08] bg-[#090E17] pb-[30px] pt-[70px] font-['Plus_Jakarta_Sans',sans-serif] text-sm leading-[1.6] text-[#94A3B8] ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <div className="mb-[50px] grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <img src={logoSrc} alt="Du Học & Đào Tạo Đại Tây Nam" className="h-12 w-auto max-w-[400px] shrink-0 object-contain" />

            </div>
            <p className="mb-5 leading-[1.6]">
              Tổ chức giáo dục uy tín chuyên sâu đào tạo ngôn ngữ Tiếng Hàn, Tiếng Trung và tư vấn du học trọn gói, minh bạch chi phí tại Cần Thơ & Miền Tây.
            </p>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.05em] text-white">
              Chi Phí Rõ Ràng • Minh Bạch
            </span>
          </div>

          <FooterLinkGroup title="Đào Tạo Ngoại Ngữ" links={languageLinks} href="#language-courses" />
          <FooterLinkGroup title="Du Học Hàn Quốc - Đài Loan" links={studyAbroadLinks} href="#study-abroad" />

          <div className="min-w-0">
            <h4 className="mb-5 text-base font-extrabold tracking-[-0.01em] text-white">Thông Tin Liên Hệ</h4>
            <ul className="space-y-[14px]">
              <li className="flex items-start gap-3"><ContactIcon type="pin" /><span>Địa chỉ: 193K-193L Trần Hưng Đạo, Phường Vị Tân, TP. Cần Thơ</span></li>
              <li className="flex items-start gap-3"><ContactIcon type="phone" /><span>Hotline tư vấn: <a href="tel:0787878122" className="font-bold text-inherit hover:text-white">078 78 78 122</a></span></li>
              <li className="flex items-start gap-3"><ContactIcon type="web" /><span>Website: <a href="https://daitaynam.edu.vn" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">daitaynam.edu.vn</a></span></li>
              <li className="flex items-start gap-3"><ContactIcon type="clock" /><span>Giờ làm việc: 08:00 - 17:30 (Thứ 2 đến Thứ 7)</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-[25px] text-center text-[13px] md:flex-row md:text-left">
          <p>© 2026 ĐẠI TÂY NAM EDU. Bản quyền thuộc về Du Học & Đào Tạo Đại Tây Nam.</p>
          <p>Thiết kế tuân thủ tiêu chuẩn nhận diện thương hiệu & bảo mật thông tin người dùng.</p>
        </div>
      </div>
    </footer>
  );
}