
import React from "react";
import SectionHeading from "./SectionHeading.jsx";

import bg1 from "../../public/assets/0ec029c4-5709-4d50-930e-3aa56c810ae4.png"
import minhtanImg from "../../public/assets/8fe824fd-6ebf-4fa1-a340-2bad8d956e7e.png";
import kookminImg from "../../public/assets/89c41e18-cc08-4f1e-9c5b-c321187c480a.png";

const testimonials = [
  {
    image: minhtanImg,
    imageAlt: "Học viên nhận Visa D2 Đại học Sejong",
    badge: "VISA ĐỖ KỲ MỚI 2026",
    badgeColor: "bg-primary",
    initials: "NH",
    name: "Nguyễn Hoàng Nam (19 tuổi)",
    detail: "Học bổng 50% Đại học Sejong (Seoul, Hàn Quốc)",
    quote:
      '"Từ một người chưa biết gì về tiếng Hàn, sau 4 tháng học cấp tốc tại trung tâm em đã thi đỗ TOPIK 3 và xuất sắc vượt qua vòng phỏng vấn của trường. Cảm ơn các thầy cô Đại Tây Nam đã hỗ trợ hồ sơ em rất chu đáo!"',
  },
  {
    image: bg1,
    imageAlt: "Học viên nhận Visa du học Đại học Minh Tân",
    badge: "HỆ VHVL ĐÀI LOAN",
    badgeColor: "bg-primary",
    initials: "TL",
    initialsColor: "text-primary-dark",
    name: "Trần Thùy Linh (20 tuổi)",
    detail: "Hệ Vừa học Vừa làm - ĐH Minh Tân (Đài Loan)",
    quote:
      '"Gia đình em ban đầu rất lo lắng về chi phí, nhưng nhờ trung tâm tư vấn hệ VHVL nên em được miễn 100% học phí kỳ 1 và được trường bố trí việc làm ngay khi sang. Thu nhập thực tập giúp em tự trang trải hoàn toàn."',
  },
  {
    image: kookminImg,
    imageAlt: "Học viên nhận Visa D4-1 Đại học Kookmin",
    badge: "VISA THẲNG KHÔNG PHỎNG VẤN",
    badgeColor: "bg-primary",
    initials: "ĐM",
    name: "Đỗ Minh Quân (18 tuổi)",
    detail: "Hệ tiếng D4-1 - Đại học Kookmin (Hàn Quốc)",
    quote:
      '"Hồ sơ của em có khoảng trống 1 năm sau tốt nghiệp nên rất khó xin trường. Nhưng nhờ các anh chị Đại Tây Nam thụ lý hồ sơ giải trình mạch lạc, em đã nhận được mã code visa thẳng chỉ sau 3 tuần!"',
  },
];

export default function Feedback() {
  return (
    <section
      id="testimonials"
      className="landing-section relative w-full bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#334155]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-5">
        <SectionHeading
          badge="Người Thật - Kết Quả Thật"
          title="Học Viên Nhận Visa & Chinh Phục Ước Mơ"
          description="Niềm hạnh phúc của hàng ngàn gia đình khi nhận được tấm visa du học trên tay là minh chứng rõ nhất cho chất lượng dịch vụ của Đại Tây Nam."
        />

        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(15,23,42,0.08),0_4px_6px_-4px_rgba(15,23,42,0.04)]"
            >
              {/* HÌNH ẢNH RIÊNG CHO TỪNG CARD */}
              <div className="relative h-[200px] w-full overflow-hidden bg-[#F1F5F9]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* BADGE */}
                <span
                  className={`absolute right-3.5 top-3.5 max-w-[90%] rounded-full px-3 py-1.5 text-center text-[10px] font-extrabold text-white shadow-sm ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* NỘI DUNG CARD */}
              <div className="flex flex-1 flex-col p-[22px]">
                <div className="mb-3 flex items-center gap-3">
                  {/* <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#F1F5F9] font-extrabold shadow-sm ${item.initialsColor || "text-[#FE0000]"
                      }`}
                  >
                    <img src={minhtanImg} alt="" />
                  </div> */}

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-extrabold text-[#0F172A]">
                      {item.name}
                    </h3>

                    <p className="text-xs leading-[1.5] text-[#64748B]">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <p className="text-sm italic leading-[1.6] text-[#334155]">
                  {item.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
