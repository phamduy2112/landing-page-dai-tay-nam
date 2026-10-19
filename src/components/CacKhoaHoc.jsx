import React, { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const courses = [
  // Mỗi khóa học sử dụng một ảnh riêng
  {
    image: "/assets/857b85fa-50c3-4141-8caa-624488e6d9a8.png",
    category: "Tiếng Hàn • Cấp Tốc", title: "Tiếng Hàn Sơ Cấp & Ôn Luyện TOPIK 1 - 2", description: "Dành cho người mới bắt đầu từ số 0 hoặc học sinh chuẩn bị đi du học Hàn Quốc hệ tiếng Visa D4-1.",
    features: ["Nắm vững bảng chữ cái Hangeul và quy tắc phát âm chuẩn giọng Seoul", "Tích lũy 1.200+ từ vựng & cấu trúc ngữ pháp sơ cấp thông dụng", "Luyện giải đề thi TOPIK I bám sát cấu trúc đề thật mới nhất", "Rèn phản xạ nghe nói và giao tiếp các tình huống đời sống thực tế"],
    duration: "2.5 - 3 tháng", outcome: "Đạt TOPIK 1 - 2", footLabel: "Hình thức học", footValue: "Trực tiếp / Online", action: "Nhận Giáo Trình", green: false, outline: true,
  },
  {
    image: "/assets/1.png",
    category: "Tiếng Hàn • Du Học Chuyên Ngành", title: "Tiếng Hàn Trung Cấp & Luyện Phỏng Vấn Visa", description: "Dành cho học sinh apply học bổng chuyên ngành D2, nâng cao trình độ và luyện phỏng vấn Visa Đại sứ quán.",
    features: ["Chinh phục chứng chỉ TOPIK 3 - 4 để săn học bổng học phí giá trị", "Luyện đối đáp bộ câu hỏi phỏng vấn thực chiến của Lãnh sự / Trường ĐH", "Nắn chỉnh phát âm, phản xạ câu hỏi bất ngờ 1 kèm 1 cùng giảng viên", "Mô phỏng phỏng vấn thử giúp học viên giải tỏa áp lực tâm lý"],
    duration: "3 - 4.5 tháng", outcome: "TOPIK 3-4 & Pass Visa", footLabel: "Sĩ số lớp", footValue: "Tối đa 8 - 12 bạn", action: "Đăng Ký Xếp Lớp", green: false, outline: false,
  },
  {
    image: "/assets/b9a195ae-e090-4811-b1e3-c717625a29bf.png",
    category: "Tiếng Trung • Du Học Đài Loan", title: "Tiếng Trung TOCFL A1 - B2 (Chữ Phồn Thể)", description: "Chuẩn bị ngoại ngữ cấp tốc cho học sinh đi du học hệ Vừa học Vừa làm, Hệ 1+4 và Chính quy Đài Loan.",
    features: ["Học chữ Phồn thể và hệ từ vựng giao tiếp thực tế chuẩn Đài Loan", "Rèn luyện bộ đề thi TOCFL độc quyền, nắm vững mẹo làm bài đạt điểm cao", "Trang bị kỹ năng giao tiếp trong môi trường lớp học và sinh hoạt thực tế", "Luyện phỏng vấn 1-1 sát cấu trúc phỏng vấn Visa TECO"],
    duration: "2 - 4 tháng", outcome: "TOCFL A2 - B1/B2", footLabel: "Đội ngũ giảng viên", footValue: "Thạc Sĩ & Giàu Kinh Nghiệm", action: "Tư Vấn TOCFL", green: true, outline: true,
  },
];

const destinations = [
  {
    image: "/assets/du-hoc-han-quoc.png",
    title: "Du Học Hàn Quốc", badge: "Trường Top Đầu • Chi Phí Rõ Ràng", green: false,
    lead: "Môi trường học tập hiện đại, đa dạng ngành nghề lựa chọn, cơ hội làm thêm hợp pháp và định hướng việc làm rõ ràng sau khi tốt nghiệp.",
    programs: [
      ["Du Học Hệ Tiếng (Visa D4-1)", "Học 1 - 2 năm tiếng tại trường ĐH Hàn Quốc trước khi lên chuyên ngành", "Hỗ trợ chọn trường"],
      ["Du Học Đại Học & Thạc Sĩ (Visa D2)", "Nhập học thẳng chuyên ngành Kinh tế, Kỹ thuật, Truyền thông, Du lịch", "Học bổng 30-100%"],
      ["Chuyển Đổi Visa & Định Hướng Nghề Nghiệp", "Hỗ trợ định hướng hồ sơ minh bạch, nâng cao cơ hội đỗ Visa", "Tỷ lệ Visa cao"],
    ],
    market: "Liên kết đa dạng các trường Đại học uy tín tại Seoul, Busan và các khu vực trung tâm Hàn Quốc.", action: "Tư Vấn Hồ Sơ Du Học Hàn Quốc",
  },
  {
    image: "/assets/du-hoc-dai-loan.png",
    title: "Du Học Đài Loan", badge: "Vừa Học Vừa Làm • Chi Phí Tối Ưu", green: true,
    lead: "Môi trường sống an toàn, chi phí học tập hợp lý, chính sách làm thêm linh hoạt giúp tối ưu chi phí gia đình.",
    programs: [
      ["Hệ Vừa Học Vừa Làm (VHVL)", "Thực tập hưởng lương tại các doanh nghiệp đối tác uy tín của trường", "Thu nhập ổn định"],
      ["Hệ 1+4 (1 Năm Tiếng + 4 Năm Đại Học)", "Dành cho học sinh chưa có chứng chỉ TOCFL, không áp lực phỏng vấn Visa", "Visa thuận lợi"],
      ["Hệ Tự Túc / Thạc Sĩ", "Chuyên ngành đa dạng, học bổng hấp dẫn dành cho sinh viên xuất sắc", "Học bổng cao"],
    ],
    market: "Đối tác liên kết các trường Đại học Khoa học Kỹ thuật hàng đầu tại Đài Bắc, Đài Trung, Cao Hùng.", action: "Tư Vấn Hồ Sơ Du Học Đài Loan",
  },
];


function CourseCard({ course, index }) {
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl ${index > 0 ? "border-t-[3px] border-t-primary" : ""}`}>
      <div className="border-b border-slate-200 px-5 pb-[18px] pt-6 sm:px-[26px]">
        <img src={course.image} alt={course.title} className="mb-[15px] h-[220px] w-full object-cover sm:h-[250px] rounded-2xl" />
        <span className="mb-[10px] inline-block rounded-md bg-primary-50 px-[10px] py-1 text-xs font-bold uppercase tracking-[0.05em] text-primary">{course.category}</span>
        <h3 className="mb-2 font-['Montserrat'] text-xl font-extrabold leading-[1.35] text-slate-900">{course.title}</h3>
        <p className="text-sm leading-6 text-slate-500">{course.description}</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-5 py-6 sm:px-[26px]">
        <ul className="space-y-[10px]">
          {course.features.map((feature) => <li key={feature} className="relative pl-6 text-sm leading-[1.45] text-slate-700 before:absolute before:left-0 before:top-0 before:font-extrabold before:text-primary before:content-['✓']">{feature}</li>)}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-[10px] rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-[14px] text-[13px]">
          <div><span className="block text-slate-500">Thời lượng</span><strong className="block text-sm text-slate-900">{course.duration}</strong></div>
          <div><span className="block text-slate-500">Cam kết đầu ra</span><strong className="block text-sm text-slate-900">{course.outcome}</strong></div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-[#FAFBFD] px-5 py-[18px] sm:px-[26px] sm:pb-6">
        <div><span className="block text-xs text-slate-500">{course.footLabel}</span><strong className="block text-[15px] font-extrabold text-primary-dark">{course.footValue}</strong></div>
        <a href="#consult-form" className={`inline-flex items-center justify-center rounded-xl border px-[18px] py-[9px] text-[13px] font-bold transition-all hover:-translate-y-0.5 ${course.outline ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-primary bg-primary text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)] hover:bg-primary-dark"}`}>{course.action}</a>
      </div>
    </article>
  );
}

function DestinationCard({ destination }) {
  return (
    <article className="rounded-3xl border-2 border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:p-8">
      <img src={destination.image} alt={`${destination.title} Đại Tây Nam`} className="mb-[15px] h-[220px] w-full object-cover sm:h-[300px] rounded-2xl" />
      <div className="mb-[18px]">
        <h3 className="font-['Montserrat'] text-[26px] font-extrabold text-slate-900">{destination.title}</h3>
        <span className="mt-2 inline-flex rounded-full border border-primary/20 bg-primary-50 px-[14px] py-[6px] text-[13px] font-bold uppercase tracking-wide text-primary">{destination.badge}</span>
      </div>
      <p className="mb-6 text-[15px] leading-relaxed text-slate-500">{destination.lead}</p>
      <div className="mb-[26px] flex flex-col gap-3">
        {destination.programs.map(([name, desc, tag]) => (
          <div key={name} className="flex flex-col gap-3 rounded-xl border-l-4 border-primary bg-slate-50 px-[18px] py-[14px] sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0"><h4 className="mb-0.5 text-[15px] font-bold text-slate-900">{name}</h4><p className="text-[13px] leading-5 text-slate-500">{desc}</p></div>
            <span className="w-fit shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-white px-[10px] py-1 text-xs font-bold text-primary">{tag}</span>
          </div>
        ))}
      </div>
      <div className="mb-6 rounded-xl bg-primary-50 px-[18px] py-[14px] text-[13px] text-primary-dark"><strong>Thị trường trọng điểm:</strong> {destination.market}</div>
      <a href="#consult-form" className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-[13px] text-center text-[15px] font-bold text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark">{destination.action}</a>
    </article>
  );
}

export default function CacKhoaHoc({ className = "", marginTop = "mt-[20px] md:mt-[0px]" }) {
  const [activeTrack, setActiveTrack] = useState("lang");
  return (
    <section id="programs-hub" className={`${marginTop} ${className} landing-section w-full border-y border-slate-200 bg-white font-['Plus_Jakarta_Sans'] text-slate-700`}>
      <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-5">
        <SectionHeading
          badge="Định Hướng Toàn Diện"
          title="Ngoại Ngữ & Du Học Tại"
          highlight={"Đại Tây Nam"}
          description="Lựa chọn chương trình bạn đang tìm kiếm để xem chi tiết lộ trình học tập ngoại ngữ và các gói dịch vụ tư vấn du học tối ưu nhất."
        />
        <div role="tablist" aria-label="Lựa chọn mảng dịch vụ" className="mx-auto inline-flex w-full max-w-full flex-col gap-2 rounded-3xl border border-slate-200 bg-slate-100 p-[6px] sm:w-auto sm:flex-row sm:rounded-full">
          <button type="button" role="tab" aria-selected={activeTrack === "lang"} aria-controls="language-courses" onClick={() => setActiveTrack("lang")} className={`rounded-full px-4 py-[13px] text-[13px] font-bold transition-all sm:px-[30px] sm:text-[15px] ${activeTrack === "lang" ? "bg-primary text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)]" : "text-slate-500 hover:text-slate-900"}`}>1. Đào Tạo Ngoại Ngữ Thực Chiến (Hàn - Trung)</button>
          <button type="button" role="tab" aria-selected={activeTrack === "abroad"} aria-controls="study-abroad" onClick={() => setActiveTrack("abroad")} className={`rounded-full px-4 py-[13px] text-[13px] font-bold transition-all sm:px-[30px] sm:text-[15px] ${activeTrack === "abroad" ? "bg-primary text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)]" : "text-slate-500 hover:text-slate-900"}`}>2. Tư Vấn &amp; Xử Lý Hồ Sơ Du Học (Hàn - Đài)</button>
        </div>
      </div>
      <div id="language-courses" role="tabpanel" hidden={activeTrack !== "lang"} className="mx-auto mt-8 w-full max-w-[1200px] px-4 sm:px-5">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">{courses.map((course, index) => <CourseCard key={course.title} course={course} index={index} />)}</div>
      </div>
      <div id="study-abroad" role="tabpanel" hidden={activeTrack !== "abroad"} className="mx-auto mt-8 w-full max-w-[1200px] px-4 sm:px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">{destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} />)}</div>
      </div>
    </section>
  );
}