import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  { title: "Đánh Giá & Định Hướng", description: "Phân tích năng lực học bạ, tài chính và tư vấn lộ trình chọn trường tối ưu tại Hàn - Đài.", note: "Định hướng ngành học & săn học bổng phù hợp nhất.", symbol: "✓", image: "/assets/co1.png" },
  { title: "Đào Tạo Ngoại Ngữ Thực Chiến", description: "Luyện thi cấp tốc TOPIK & TOCFL, chú trọng phản xạ giao tiếp và phỏng vấn trực tiếp.", note: "Vững nền tảng ngoại ngữ, tự tin vượt qua mọi kỳ thi.", symbol: "↗", image: "/assets/cf8172ae-68dd-4026-bb18-835a0653b6db.png" },
  { title: "Xử Lý Hồ Sơ Minh Bạch", description: "Hoàn thiện hồ sơ chuyên nghiệp, công khai chi phí rõ ràng, luyện phỏng vấn sát thực tế.", note: "Cam kết chi phí rõ ràng, tối ưu tỉ lệ đỗ Visa.", symbol: "▣", image: "/assets/a116b143-5edd-490f-b1cf-a128e983beba.png" },
  { title: "Đồng Hành Trọn Gói Tại Hàn & Đài", description: "Hỗ trợ săn vé máy bay, đón sân bay, ổn định ký túc xá và đồng hành lâu dài tại nước ngoài.", note: "Hỗ trợ toàn diện từ lúc bay đến khi học tập ổn định.", symbol: "★", image: "/assets/9630322a-74ba-49ab-b5b9-aab681a7ea1c.png" },
];

export default function Roadmap4Steps() {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setVisible(steps.map(() => true));
      return;
    }
    const cards = rootRef.current?.querySelectorAll("[data-roadmap-card]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisible((old) => old.map((value, i) => i === index ? true : value));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" ref={rootRef} className={`mt=[20px] sm:mt-[0px] w-full border-y border-slate-200 bg-white landing-section font-['Plus_Jakarta_Sans'] text-slate-700`}>
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-5">
        <SectionHeading
          badge="Quy Trình Chuẩn Hóa"
          title="Lộ Trình 4 Bước Chinh Phục Du Học"
          description="Đào tạo ngoại ngữ thực chiến • Xử lý hồ sơ minh bạch • Đồng hành trọn gói Hàn Quốc & Đài Loan"
        />

        <div className="relative flex min-w-0 flex-col gap-[18px] min-[769px]:grid min-[769px]:grid-cols-4 min-[769px]:items-stretch">
          {steps.map((step, index) => {
            return (
              <article
                key={step.title}
                data-roadmap-card
                data-index={index}
                className={`relative z-[1] min-w-0 max-w-full pl-[42px] transition-[opacity,transform] duration-[550ms] ease-out min-[577px]:pl-[55px] min-[769px]:h-full min-[769px]:pl-0 min-[769px]:pt-6 ${visible[index] ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {index < steps.length - 1 && (
                  <>
                    <span aria-hidden="true" className="pointer-events-none absolute bottom-[-18px] left-[14px] top-5 z-0 border-l-2 border-dashed border-primary/30 min-[577px]:left-5 min-[769px]:hidden" />
                    <span aria-hidden="true" className="pointer-events-none absolute right-[-14px] top-1/2 z-20 hidden -translate-y-1/2 text-[28px] font-extrabold leading-none text-primary min-[769px]:block">›</span>
                  </>
                )}
                <div className="absolute left-0 top-5 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary font-['Montserrat',sans-serif] text-[11px] font-extrabold text-white shadow-[0_0_0_4px_#F8FAFC,0_4px_10px_rgba(13,134,38,0.25)] min-[577px]:top-[25px] min-[577px]:h-10 min-[577px]:w-10 min-[577px]:text-sm min-[769px]:left-1/2 min-[769px]:top-[3px] min-[769px]:h-[42px] min-[769px]:w-[42px] min-[769px]:-translate-x-1/2 min-[769px]:shadow-[0_0_0_5px_#F8FAFC,0_4px_10px_rgba(13,134,38,0.25)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="grid min-h-0 min-w-0 max-w-full grid-cols-[90px_minmax(0,1fr)] items-center gap-[13px] rounded-[15px] border border-primary/20 bg-white p-[14px] shadow-[0_8px_25px_rgba(13,134,38,0.06)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(13,134,38,0.14)] max-[400px]:grid-cols-[75px_minmax(0,1fr)] min-[577px]:grid-cols-[130px_minmax(0,1fr)] min-[577px]:gap-5 min-[577px]:p-[18px] min-[769px]:flex min-[769px]:h-full min-[769px]:flex-col min-[769px]:items-center min-[769px]:gap-0 min-[769px]:rounded-2xl min-[769px]:px-4 min-[769px]:pb-[25px] min-[769px]:pt-[25px] min-[769px]:text-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_center,#ffffff_0%,#dcfce7_65%,#bbf7d0_100%)] max-[400px]:h-[70px] max-[400px]:w-[70px] min-[577px]:h-[110px] min-[577px]:w-[110px] min-[769px]:mb-[14px] min-[769px]:h-[100px] min-[769px]:w-[100px]">
                    <img src={step.image} alt={step.title} className="relative z-[2] h-auto max-h-[50px] w-auto max-w-[50px] object-contain max-[400px]:max-h-10 max-[400px]:max-w-10 min-[577px]:max-h-[90px] min-[577px]:max-w-[90px] min-[769px]:max-h-[60px] min-[769px]:max-w-[60px]" />
                  </div>
                  <div className="flex h-full min-w-0 max-w-full flex-col min-[769px]:w-full">
                    <h3 className="mb-[6px] font-['Montserrat',sans-serif] text-[13px] font-extrabold uppercase leading-[1.4] text-primary max-[400px]:text-xs min-[769px]:mb-2 min-[769px]:flex min-[769px]:min-h-12 min-[769px]:items-center min-[769px]:justify-center min-[769px]:leading-[1.35]">
                      {step.title}
                    </h3>
                    <p className="mb-2 block text-[10px] leading-[1.55] text-[#475569] max-[400px]:text-[9px] min-[577px]:text-[13px] min-[577px]:leading-[1.65] min-[769px]:mb-3 min-[769px]:text-center min-[769px]:leading-[1.55]">
                      {step.description}
                    </p>
                    <div className="flex w-full items-center gap-[6px] rounded-lg bg-[#f0fdf4] px-2 py-[7px] text-[8.5px] font-medium leading-[1.4] text-primary-dark min-[577px]:gap-[10px] min-[577px]:rounded-[10px] min-[577px]:px-[14px] min-[577px]:py-[10px] min-[577px]:text-[11px] min-[769px]:mt-auto min-[769px]:gap-[6px] min-[769px]:px-[9px] min-[769px]:py-2 min-[769px]:text-left min-[769px]:text-[8px]">
                      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-primary text-xs font-bold text-white min-[577px]:h-[27px] min-[577px]:w-[27px] min-[577px]:text-[15px] min-[769px]:h-6 min-[769px]:w-6 min-[769px]:text-[11px]">{step.symbol}</span>
                      <span className="min-w-0 sm:text-[10px]">{step.note}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </ section>
  );
}