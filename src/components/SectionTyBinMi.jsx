import React, { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  { icon: "route", title: "Mất gốc hoặc bắt đầu từ số 0?", text: "Chưa biết lộ trình học bài bản để kịp thi đỗ Topik (Hàn) hoặc TOCFL (Đài Loan) theo kỳ tuyển sinh mong muốn." },
  { icon: "learning", title: "Thiếu phản xạ phỏng vấn Visa?", text: "Học ngữ pháp nhiều nhưng ấp úng khi giao tiếp, lo lắng không vượt qua vòng phỏng vấn trường và Đại sứ quán." },
  { icon: "time", title: "Cần khóa học cấp tốc, tinh gọn?", text: "Thời gian chuẩn bị gấp rút, cần phương pháp thực chiến bám sát đề thi và văn hóa thay vì lý thuyết dàn trải." },
  { icon: "class", title: "Chưa chọn được trường & ngành phù hợp?", text: "Băn khoăn giữa học tiếng hay chuyên ngành, chưa biết trường nào cấp học bổng cao và phù hợp tài chính gia đình." },
  { icon: "quality", title: "Hồ sơ, tài chính phức tạp?", text: "Thủ tục sổ tiết kiệm, chứng minh thu nhập và xác thực học bạ rườm rà, tiềm ẩn nguy cơ bị từ chối cấp visa." },
  { icon: "tests", title: "Cần người đồng hành trọn gói?", text: "Cần đơn vị hỗ trợ toàn diện từ học tiếng, xử lý thủ tục, xin visa đến khi đón sân bay và ổn định tại nước bạn." },
];

function FeatureIcon({ type }) {
  const common = { fill: "none", stroke: "#000000", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg viewBox="0 0 96 80" aria-hidden="true" className="h-full w-full">
      {type === "route" && <><circle cx="33" cy="27" r="22" className="fill-primary" /><g {...common}><path d="M24 19h31v48H14V19h10" /><path d="M27 14h15a5 5 0 0 1 5 5v3H22v-3a5 5 0 0 1 5-5Z" /><path d="m20 40 3 3 5-6m-8 15 3 3 5-6m5-8h15m-15 12h15" /><path d="M62 25h6l2 7v32l-5 6-5-6V32l2-7Zm-2 10h10M65 35v29" /></g></>}
      {type === "class" && <><circle cx="33" cy="54" r="20" className="fill-primary" /><g {...common}><path d="M23 47a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-12 19v-8c0-6 5-11 12-11s12 5 12 11v8H11Zm40-21a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-11 21v-8c0-6 5-10 11-10s11 4 11 10v8H40Zm31-21a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-9 21v-8c0-6 4-10 9-10 6 0 10 4 10 10v8H62Z" /><path d="M18 12h31v18H30l-8 6v-6h-4V12Zm7 7h17m-17 5h12M52 17h24v16h-4v6l-7-6H52" /></g></>}
      {type === "time" && <><circle cx="67" cy="54" r="20" className="fill-primary" /><g {...common}><circle cx="50" cy="25" r="17" /><path d="M50 14v12l7 4m-7-27v5m18 17h5m-46 0h5M27 67h-9V46l5-13c1-4 7-3 7 2v12l6 7v13m32 0h9V46l-5-13c-1-4-7-3-7 2v12l-6 7v13" /></g></>}
      {(type === "learning" || type === "tests") && <><circle cx="31" cy="58" r="20" className="fill-primary" /><g {...common}><rect x="13" y="25" width="67" height="43" rx="4" /><path d="M10 68h73l-4 7H15l-5-7ZM24 15c10-4 17 0 21 5v34c-5-5-12-8-21-4V15Zm42 0c-10-4-17 0-21 5v34c5-5 12-8 21-4V15ZM29 23c5-2 9-1 12 2m-12 7c5-2 9-1 12 2m20-11c-5-2-9-1-12 2m12 7c-5-2-9-1-12 2" /></g></>}
      {type === "quality" && <><circle cx="29" cy="21" r="20" className="fill-primary" /><g {...common}><path d="M22 12h38l10 10v46H22V12ZM60 12v11h10M31 31h28M31 40h20M31 49h17" /><circle cx="65" cy="53" r="13" /><path d="m59 53 4 4 8-9M60 65l-2 10 7-4 7 4-2-10" /></g></>}
    </svg>
  );
}

export default function LanguageChallenges() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const touchStart = useRef(null);
  const timer = useRef(null);
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const goTo = useCallback((index) => {
    setCurrentSlide((index + features.length) % features.length);
    setResetCount((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!isMobile || !isVisible) return;
    timer.current = window.setInterval(() => setCurrentSlide((n) => (n + 1) % features.length), 3500);
    return () => window.clearInterval(timer.current);
  }, [isMobile, isVisible, resetCount]);

  return (
    <section id="language-challenges" className="landing-section overflow-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#334155]">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-5">
        <SectionHeading
          badge="Rào Cản Thực Tế"
          title="Những Khó Khăn Phổ Biến Nhất"
          description="Học ngôn ngữ tượng hình và ngữ pháp đảo ngược không hề đơn giản nếu thiếu phương pháp chuẩn. Đây là 4 rào cản khiến hơn 85% người mới bắt đầu dễ nản lòng hoặc bỏ cuộc."
        />
        <div className="mt-3 overflow-hidden md:mt-7">
          <div className="overflow-hidden rounded-[20px] p-[3px] md:overflow-visible md:rounded-none md:p-0">
            <div className="flex touch-pan-y transition-transform duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)] md:grid md:grid-cols-3 md:transform-none" style={{ transform: isMobile ? `translateX(-${currentSlide * 100}%)` : undefined }} onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }} onTouchEnd={(e) => { if (touchStart.current == null) return; const distance = touchStart.current - e.changedTouches[0].clientX; if (Math.abs(distance) >= 40) goTo(currentSlide + (distance > 0 ? 1 : -1)); touchStart.current = null; }}>
              {features.map((item, index) => (
                <article key={item.title} className={`group relative flex min-h-[220px] min-w-full flex-col items-start rounded-[20px] border border-primary/20  px-[22px] py-6 text-left shadow-lg shadow-primary/5 md:min-h-[260px] md:min-w-0 md:items-center md:rounded-none md:border-0 md:bg-white md:px-4 md:py-6 md:text-center md:shadow-none lg:px-6 ${index >= 3 ? "md:border-t md:border-[#E2E8F0]/40" : ""} ${index % 3 !== 0 ? "md:border-l md:border-[#E2E8F0]/40" : ""}`}>
                  <div className="flex h-14 w-16 shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 md:h-20 md:w-24"><FeatureIcon type={item.icon} /></div>
                  <h3 className="mt-[15px] text-[18px] font-bold leading-[1.35] text-[#0F172A] md:mt-4 md:text-[16px] md:leading-6">{item.title}</h3>
                  <p className="mt-2 max-w-full text-[14px] leading-[1.6] text-[#475569] md:max-w-[340px] md:leading-relaxed md:text-gray-600">{item.text}</p>
                  <a href="#consult-form" className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[14px] font-semibold text-primary transition-all duration-300 hover:gap-2.5">Tìm hiểu lộ trình <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-[18px] flex items-center justify-center gap-[13px] md:hidden">
            <button type="button" aria-label="Slide trước" onClick={() => goTo(currentSlide - 1)} className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-md shadow-primary/10 active:scale-90 active:bg-primary active:text-white"><svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg></button>
            <div className="flex items-center justify-center gap-[7px]">{features.map((item, index) => <button key={item.title} type="button" aria-label={`Đi tới slide ${index + 1}`} aria-current={index === currentSlide ? "true" : undefined} onClick={() => goTo(index)} className={`h-[7px] rounded-full transition-all duration-300 ${index === currentSlide ? "w-[27px] bg-primary" : "w-[7px] bg-[#CBD5E1]"}`} />)}</div>
            <button type="button" aria-label="Slide tiếp theo" onClick={() => goTo(currentSlide + 1)} className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-md shadow-primary/10 active:scale-90 active:bg-primary active:text-white"><svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
}