
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";

export default function VideoSection({ youtubeId, videoSrc }) {
  return (
    <section
      id="video-section"
      className="landing-section relative w-full border-y border-[#E2E8F0] bg-white font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <SectionHeading
          badge="Hành Trình Thực Tế"
          title="Học Viên Chia Sẻ Về Hành Trình Tại"
          highlight="Đại Tây Nam"
          description="Lắng nghe những chia sẻ chân thực từ học viên đã thi đỗ chứng chỉ và xuất cảnh thành công sang Hàn Quốc & Đài Loan."
        />

        <div className="mx-auto h-[500px] w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-slate-900 shadow-xl max-sm:aspect-video max-sm:h-auto">
          {youtubeId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}`}
              title="Học viên chia sẻ về hành trình du học"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : videoSrc ? (
            <video
              className="h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          ) : null}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#consult-form"
            className="group inline-flex max-w-full items-center justify-center gap-2.5 rounded-xl border border-primary bg-primary px-[26px] py-[13px] text-center text-[15px] font-bold text-white shadow-md transition-all duration-300 hover:bg-primary-dark hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >

            <span>Đăng Ký Nhận Lộ Trình Phỏng Vấn Visa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
