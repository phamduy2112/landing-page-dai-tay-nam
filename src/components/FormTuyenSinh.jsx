import React, { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

const programs = [
  ["du-hoc-han-quoc", "Du Học Hàn Quốc (Hệ tiếng D4-1 / Hệ Đại học D2)"],
  ["du-hoc-dai-loan", "Du Học Đài Loan (Hệ Vừa học vừa làm / Hệ 1+4 / Chính quy)"],
  ["khoa-tieng-han", "Khóa học Tiếng Hàn (Cấp tốc / Ôn thi TOPIK)"],
  ["khoa-tieng-trung", "Khóa học Tiếng Trung (TOCFL Đài Loan / Giao tiếp)"],
  ["tron-goi-combo", "Combo Trọn Gói: Học Ngoại Ngữ + Hồ Sơ Du Học"],
];

const perks = [
  "Thẩm định hồ sơ & phân tích tỷ lệ đỗ Visa 1-1 miễn phí",
  "Tặng bộ tài liệu luyện thi TOPIK / TOCFL độc quyền",
  "Ưu đãi học phí hấp dẫn khi đăng ký combo Đào Tạo & Hồ Sơ",
];

const inputClass = "w-full min-w-0 rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] px-[14px] py-3 text-base text-[#0F172A] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#FE0000] focus:bg-white focus:ring-[3px] focus:ring-red-500/15 sm:text-[15px]";
const labelClass = "mb-1.5 block text-[13px] font-bold text-[#0F172A]";

/**
 * Form tuyển sinh Đại Tây Nam Edu.
 * onSubmitLead(data) là callback tùy chọn để kết nối API/CRM.
 * Không có callback: chỉ hiển thị thông báo demo, KHÔNG gửi dữ liệu.
 */
export default function FormTuyenSinh({ onSubmitLead }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", program: "tron-goi-combo",
    year: "2026-som", city: "", question: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const update = (key) => (event) => {
    setForm((previous) => ({ ...previous, [key]: event.target.value }));
    if (status.text) setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || loading) return;
    if (!onSubmitLead) {
      setStatus({
        type: "demo",
        text: "Thông tin đã được kiểm tra hợp lệ. Đây là bản demo giao diện; để nhận đăng ký thực tế, bạn cần kết nối form với email, CRM hoặc API.",
      });
      return;
    }
    setLoading(true);
    setStatus({ type: "", text: "" });
    try {
      await onSubmitLead(form);
      setStatus({ type: "success", text: "Đăng ký đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm." });
    } catch (error) {
      setStatus({ type: "error", text: "Không thể gửi đăng ký. Vui lòng thử lại sau." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="consult-form"
      className="landing-section relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-[50px] -top-[50px] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(254,0,0,0.22)_0%,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[50px] -left-[50px] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(43,196,18,0.18)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-4 md:gap-10 md:px-5 lg:grid-cols-2 lg:gap-[60px]">
        <div className="mx-auto w-full max-w-[680px] text-center lg:mx-0 lg:text-left">
          <SectionHeading
            theme="dark"
            align="left"
            className="!mb-6 !max-w-none max-lg:!text-center"
            // badge="Giải Đáp Thắc Mắc"
            title="Sẵn Sàng Bắt Đầu Hành Trình Cùng Đại Tây Nam!"
            titleSize="xl"
            description="Hãy để lại thông tin, đội ngũ chuyên viên Đại Tây Nam sẽ đánh giá học bạ, tư vấn chi phí minh bạch và định hướng lộ trình học ngoại ngữ Hàn - Đài tối ưu hoàn toàn miễn phí."
          />
          <div className="mx-auto flex max-w-[520px] flex-col gap-4 text-left lg:mx-0">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-[14px]">
                <span aria-hidden="true" className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#2BC412] text-[13px] font-black text-white">✓</span>
                <span className="text-sm font-semibold text-white sm:text-[15px]">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full min-w-0">
          <div className="mx-auto w-full max-w-[620px] rounded-[18px] bg-white px-[14px] py-5 text-[#0F172A] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:px-[34px] sm:py-[38px]">
            <h3 className="mb-1.5 text-center font-['Montserrat',sans-serif] text-xl font-extrabold leading-[1.3] sm:text-[22px]">
              Đăng Ký Nhận Lộ Trình Chi Tiết
            </h3>
            <p className="mb-[22px] text-center text-sm leading-normal text-[#64748B]">
              Điền thông tin bên dưới để nhận bảng dự toán chi phí rõ ràng & thông tin học bổng
            </p>
            <form onSubmit={handleSubmit} className="space-y-[15px]">
              <div>
                <label htmlFor="lead-name" className={labelClass}>Họ và tên của bạn *</label>
                <input id="lead-name" className={inputClass} type="text" placeholder="Nguyễn Văn A" autoComplete="name" required value={form.name} onChange={update("name")} />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="lead-phone" className={labelClass}>Số điện thoại / Zalo *</label>
                  <input id="lead-phone" className={inputClass} type="tel" inputMode="numeric" autoComplete="tel" placeholder="09xx xxx xxx" pattern="[0-9]{10}" title="Vui lòng nhập đúng 10 chữ số" required value={form.phone} onChange={update("phone")} />
                </div>
                <div>
                  <label htmlFor="lead-email" className={labelClass}>Email liên hệ</label>
                  <input id="lead-email" className={inputClass} type="email" autoComplete="email" placeholder="email@example.com" value={form.email} onChange={update("email")} />
                </div>
              </div>
              <div>
                <label htmlFor="lead-program" className={labelClass}>Chương trình bạn mong muốn tư vấn *</label>
                <select id="lead-program" className={inputClass} required value={form.program} onChange={update("program")}>
                  <option value="">-- Vui lòng chọn chương trình --</option>
                  {programs.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="lead-year" className={labelClass}>Năm dự kiến bay / nhập học</label>
                  <select id="lead-year" className={inputClass} value={form.year} onChange={update("year")}>
                    <option value="2026-som">Kỳ sớm nhất 2026</option>
                    <option value="2026-cuoi">Cuối năm 2026</option>
                    <option value="2027">Năm 2027</option>
                    <option value="dang-tim-hieu">Đang tìm hiểu</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="lead-city" className={labelClass}>Khu vực sinh sống</label>
                  <input id="lead-city" className={inputClass} type="text" placeholder="Cần Thơ, Hậu Giang, Vĩnh Long..." value={form.city} onChange={update("city")} />
                </div>
              </div>
              <div>
                <label htmlFor="lead-question" className={labelClass}>Ghi chú thêm về học bạ / thắc mắc</label>
                <textarea id="lead-question" className={`${inputClass} resize-y`} rows={2} placeholder="Ví dụ: GPA cấp 3 7.2, tư vấn lộ trình học tiếng Hàn từ đầu..." value={form.question} onChange={update("question")} />
              </div>
              <button type="submit" disabled={loading} className="inline-flex w-[100%] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border border-transparent bg-primary px-[26px] py-[13px] text-[15px] font-bold text-white shadow-[0_8px_20px_-4px_rgba(13,134,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_10px_22px_-2px_rgba(13,134,38,0.45)]"
              >
                {loading ? "ĐANG GỬI..." : "ĐĂNG KÝ TƯ VẤN NGAY HÔM NAY"}
              </button>

            </form>
            {status.text && (
              <div role="status" aria-live="polite" className={`mt-[14px] rounded-[10px] p-[14px] text-sm font-semibold leading-[1.6] ${status.type === "error" ? "bg-red-50 text-red-700" : "bg-[#EAF8ED] text-[#175E2C]"}`}>
                {status.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}