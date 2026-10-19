import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const features = [
  { icon: "target", title: "Lộ trình cá nhân hóa – Tiếng Hàn & Tiếng Trung cấp tốc", description: "Định vị chính xác trình độ đầu vào, bám sát cấu trúc thi TOPIK / TOCFL và đối đáp giao tiếp du học, rút ngắn tối đa thời gian học tập." },
  { icon: "graduation", title: "Đội ngũ giảng viên giàu kinh nghiệm & Chuẩn bản xứ", description: "Chỉnh khẩu hình phát âm chuẩn, sửa bài 1-1, chia sẻ kinh nghiệm thực tế về cuộc sống và văn hóa du học tại Hàn Quốc & Đài Loan." },
  { icon: "chat", title: "Luyện phỏng vấn Visa & Trường 1 kèm 1", description: "Rèn luyện bộ câu hỏi đối đáp thực chiến, chuẩn bị tâm lý tự tin và phản xạ nhạy bén trước khi bước vào kỳ phỏng vấn chính thức." },
  { icon: "document", title: "Hồ sơ minh bạch – Chi phí rõ ràng", description: "Tư vấn đúng lộ trình tài chính, công khai mọi khoản phí minh bạch và đồng hành chặt chẽ cùng học viên đến khi cất cánh." },
];

function FeatureIcon({ type }) {
  const common = { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", "aria-hidden": true };
  if (type === "target") return <svg {...common}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
  if (type === "graduation") return <svg {...common}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>;
  if (type === "chat") return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
}

export default function GiaiPhapDotPha({ imageSrc = "/assets/e6ed7ed8-f799-4da3-8720-9793d25cbc77.png", phoneHref = "tel:0787878122" }) {
  return (
    <section id="solution-method" className="landing-section relative overflow-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A]">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <SectionHeading
              align="left"
              className="!mb-6 !max-w-none"
              badge="Giải Pháp Đột Phá Tại Đại Tây Nam"
              title={
                <>
                  Phương Pháp Thực Chiến Mở Lối <div className="hidden sm:block"></div> Du Học Hàn - Đài
                </>
              }
              description={
                <>
                  Không dạy lý thuyết suông, Đại Tây Nam tập trung giải quyết triệt để rào cản ngôn ngữ bằng mô hình <strong>"Học Ngoại Ngữ Tích Hợp Kỹ Năng Du Học"</strong>. Học viên được trực tiếp rèn phản xạ giao tiếp, chuẩn hóa phát âm và làm chủ chiến thuật phỏng vấn Visa.
                </>
              }
            />
            <div className="space-y-4 pt-2">
              {features.map((item) => {
                return (
                  <div key={item.title} className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-colors hover:border-primary/30">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary"><FeatureIcon type={item.icon} /></div>
                    <div><h4 className="mb-1 text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs leading-relaxed text-slate-600">{item.description}</p></div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#consult-form" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark">
                <span>Tư Vấn &amp; Đăng Ký Học Thử</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href={phoneHref} className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-100">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary"><svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
                <span>Hotline: <strong className="text-slate-900">078 78 78 122</strong></span>
              </a>
            </div>
          </div>
          <div className="relative mt-6 lg:col-span-5 lg:mt-0">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-red-100 via-orange-50 to-green-100 opacity-80 blur-2xl" />
            <div className="group relative overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-2xl md:rounded-3xl">
              <img src={imageSrc} alt="Lớp học thực chiến tiếng Hàn và tiếng Trung tại Đại Tây Nam Edu" className="h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[450px] lg:h-[600px]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}