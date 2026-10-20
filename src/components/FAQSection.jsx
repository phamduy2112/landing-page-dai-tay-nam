import React, { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { FiChevronDown } from "react-icons/fi";
const faqs = [
  {
    question: "1. Chưa biết tiếng Hàn hoặc tiếng Trung thì có đi du học được không?",
    answer: <>Hoàn toàn được! Đại Tây Nam có các khóa đào tạo ngoại ngữ cấp tốc từ sơ cấp đến nâng cao thiết kế riêng cho người chuẩn bị du học. Đặc biệt, với Đài Loan bạn có thể chọn <strong>Chương trình Hệ 1+4</strong> (học 1 năm tiếng tại Đài rồi lên chuyên ngành), còn với Hàn Quốc bạn có thể đi <strong>Hệ tiếng Visa D4-1</strong> với yêu cầu ngoại ngữ đầu vào rất linh hoạt.</>,
  },
  {
    question: "2. Tổng chi phí trọn gói du học Hàn Quốc & Đài Loan khoảng bao nhiêu?",
    answer: <>Chi phí du học Đài Loan dao động khoảng từ <strong>45 - 75 triệu VNĐ</strong> (tùy theo hệ và chính sách miễn giảm học phí của từng trường). Với Hàn Quốc, tổng chi phí trọn gói (gồm học phí 1 năm tại Hàn, ký túc xá 6 tháng, bảo hiểm, vé máy bay và hồ sơ) dao động từ <strong>140 - 200 triệu VNĐ</strong>. Mọi khoản phí đều được liệt kê chi tiết trong hợp đồng ngay từ đầu.</>,
  },
  {
    question: "3. Đi du học có được phép đi làm thêm để trang trải chi phí không?",
    answer: <>Có! Cả Hàn Quốc và Đài Loan đều có chính sách cho phép du học sinh làm thêm hợp pháp:<div className="mt-2 space-y-2"><p>• <strong>Tại Đài Loan:</strong> Học sinh được cấp Giấy phép đi làm (Work Permit) làm tối đa 20 giờ/tuần trong kỳ học và 40 giờ/tuần vào các kỳ nghỉ với mức lương cơ bản quy định rõ ràng.</p><p>• <strong>Tại Hàn Quốc:</strong> Du học sinh hệ tiếng sau 6 tháng và hệ đại học được phép làm thêm từ 20 - 25 giờ/tuần tùy theo trình độ TOPIK.</p></div></>,
  },
  {
    question: "4. Tỷ lệ đỗ visa tại trung tâm là bao nhiêu và có cam kết hoàn phí nếu trượt không?",
    answer: <>
      Đại Tây Nam đạt tỷ lệ đỗ visa trên <strong>98%</strong> nhờ khâu thẩm định kỹ lưỡng. Chúng tôi cam kết hoàn 100% phí dịch vụ nếu bị từ chối visa vì lý do khách quan (trừ trường hợp gian dối hồ sơ)
    </>,
  },
  {
    question: "5. Điều kiện học bạ cấp 3 (GPA) tối thiểu để apply du học là gì?",
    answer: <>Thông thường điểm trung bình học bạ 3 năm THPT từ <strong>6.0 trở lên</strong> là đủ điều kiện nộp hồ sơ. Với các bạn có GPA từ <strong>7.0 - 8.0 trở lên</strong> và có chứng chỉ ngoại ngữ (TOPIK 3+ hoặc TOCFL B1+), trung tâm sẽ hỗ trợ săn các suất học bổng từ 50% đến 100% học phí.</>,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="landing-section relative w-full border-y border-[#E2E8F0] bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#334155]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <SectionHeading
          badge="Giải Đáp Thắc Mắc"
          title="Câu Hỏi Thường Gặp Về Ngoại Ngữ & Du Học"
          description="Tổng hợp những thắc mắc phổ biến nhất của phụ huynh và học sinh khi chuẩn bị hành trình du học Hàn Quốc - Đài Loan."
        />

        <div className="mx-auto flex max-w-[820px] flex-col gap-[14px]">
          {faqs.map((faq, index) => {
            const active = openIndex === index;
            return (
              <div key={faq.question} className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${active ? "border-primary shadow-[0_4px_14px_rgba(13,134,38,0.12)]" : "border-[#E2E8F0]"}`}>
                <h3>
                  <button type="button" aria-expanded={active} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(active ? null : index)} className="flex w-full items-center justify-between gap-[15px] bg-transparent px-5 py-5 text-left text-[16px] font-bold text-[#0F172A] transition-colors hover:text-primary md:px-6 md:text-[17px]">
                    <span>{faq.question}</span>

                    <span
                      aria-hidden="true"
                      className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${active
                        ? "rotate-180 bg-primary text-white"
                        : "bg-[#F0F9F2] text-primary group-hover:bg-[#DCFCE7]"
                        }`}
                    >
                      <FiChevronDown size={20} strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                {active && <div id={`faq-answer-${index}`} className="px-5 pb-[22px] text-[15px] leading-[1.6] text-[#334155] md:px-6">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}