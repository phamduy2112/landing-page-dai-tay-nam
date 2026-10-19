import React from 'react';
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const comparisons = [
  {
    criterion: "1. Khả năng liên kết trường",
    ordinary: "Chỉ liên kết qua nhiều tầng trung gian, ít lựa chọn trường tốt",
    academy: "Ký kết trực tiếp với các trường Đại học Top đầu Hàn Quốc & Đài Loan",
  },
  {
    criterion: "2. Chi phí & Hợp đồng",
    ordinary: "Báo giá mập mờ, phát sinh nhiều khoản phụ phí khi làm hồ sơ",
    academy: "Hợp đồng pháp lý trọn gói, cam kết chi phí rõ ràng, không phát sinh",
  },
  {
    criterion: "3. Đào tạo ngoại ngữ",
    ordinary: "Dạy qua loa để đối phó, học sinh sang nước bạn bị sốc ngôn ngữ",
    academy: "Đào tạo thực chiến bài bản, giảng viên giàu kinh nghiệm, cam kết chuẩn TOPIK / TOCFL",
  },
  {
    criterion: "4. Luyện phỏng vấn Visa",
    ordinary: "Học vẹt đáp án mẫu, rủi ro trượt visa cao khi bị phỏng vấn sâu",
    academy: "Luyện 1-1 phản xạ thực chiến bám sát hồ sơ và bộ đề phỏng vấn thực tế",
  },
  {
    criterion: "5. Hỗ trợ sau khi xuất cảnh",
    ordinary: "Hết trách nhiệm ngay khi học sinh lên máy bay",
    academy: "Hỗ trợ toàn diện từ đón sân bay, ổn định ký túc xá đến định hướng việc làm tại Hàn & Đài",
  },
];

export default function MinhBachTuyetDoi() {
  const tableWrapRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const wrapper = tableWrapRef.current;
    if (!wrapper) return;

    const updateScrollHint = () => {
      setCanScroll(wrapper.scrollWidth > wrapper.clientWidth + 1);
    };

    updateScrollHint();
    window.addEventListener("resize", updateScrollHint, { passive: true });
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateScrollHint)
        : null;
    observer?.observe(wrapper);
    if (wrapper.firstElementChild) observer?.observe(wrapper.firstElementChild);

    return () => {
      window.removeEventListener("resize", updateScrollHint);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="landing-section relative w-full border-y border-[#e2e8f0] px-4 text-[#0f172a] md:px-5"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionHeading
          badge="Minh Bạch Tuyệt Đối"
          title="Điểm Khác Biệt"
          highlight="Đại Tây Nam?"
          description="Bảng so sánh chi tiết giúp bạn thấy rõ sự khác biệt về chất lượng đào tạo, chi phí và trách nhiệm pháp lý cam kết."
        />

        <div
          ref={tableWrapRef}
          role="region"
          aria-label="Bảng so sánh Đại Tây Nam và trung gian thông thường"
          tabIndex={0}
          className="overflow-x-auto rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_10px_25px_-3px_rgba(15,23,42,0.08),0_4px_6px_-4px_rgba(15,23,42,0.04)] motion-safe:scroll-smooth"
        >
          <table className="w-full min-w-[650px] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="w-[35%] border-b-2 border-[#e2e8f0] px-3.5 py-3 text-[13px] font-extrabold md:px-6 md:py-5 md:text-[15px]">
                  Tiêu Chí Đánh Giá
                </th>
                <th scope="col" className="w-[30%] border-b-2 border-[#e2e8f0] bg-[#fff5f5] px-3.5 py-3 text-[13px] font-extrabold md:px-6 md:py-5 md:text-[15px]">
                  Trung Gian / Môi Giới Thông Thường
                </th>
                <th scope="col" className="w-[35%] border-b-2 border-t-[3px] border-b-[#e2e8f0] border-t-primary bg-[linear-gradient(135deg,#f0fdf4,#eaffea)] px-3.5 py-3 text-[13px] font-extrabold text-primary md:px-6 md:py-5 md:text-[15px]">
                  HỌC VIỆN ĐẠI TÂY NAM
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr key={item.criterion} className="[&:last-child_td]:border-b-0">
                  <td className="border-b border-[#e2e8f0] px-3.5 py-3 align-middle text-[13px] leading-[1.65] md:px-6 md:py-[18px] md:text-sm">
                    <strong>{item.criterion}</strong>
                  </td>
                  <td className="border-b border-[#e2e8f0] px-3.5 py-3 align-middle text-[13px] leading-[1.65] md:px-6 md:py-[18px] md:text-sm">
                    <span aria-hidden="true" className="mr-1 inline-flex w-5 align-middle text-lg font-extrabold text-red-600">✕</span>
                    {item.ordinary}
                  </td>
                  <td className="border-b border-[#e2e8f0] bg-[#fbfdfb] px-3.5 py-3 align-middle text-[13px] font-semibold leading-[1.65] md:px-6 md:py-[18px] md:text-sm">
                    <span aria-hidden="true" className="mr-1 inline-flex w-5 align-middle text-lg font-extrabold text-[#19880c]">✓</span>
                    {item.academy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {canScroll && (
          <p className="mt-3 text-center text-xs text-[#64748b] md:hidden">
            ← Vuốt ngang để xem đầy đủ bảng so sánh →
          </p>
        )}
      </div>
    </section>
  );
}