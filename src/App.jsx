import React from 'react';
import Header from './components/Header.jsx';
import SectionTyBinMi from './components/SectionTyBinMi.jsx';
import CacKhoaHoc from './components/CacKhoaHoc.jsx';
import SectionTyBinMi_2 from './components/SectionTyBinMi_2.jsx';
import SectionTyBinMi_3 from './components/SectionTyBinMi_3.jsx';
import MinhBachTuyetDoi from './components/MinhBachTuyetDoi.jsx';
import Feedback from './components/Feedback.jsx';
import VideoSection from './components/VideoSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import FormTuyenSinh from './components/FormTuyenSinh.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-primary selection:text-white">
      <main className="flex-1">
        {/* Section: Header */}
        <Header />
        <Banner />
        {/* Section: Section Tùy Biến Mới */}
        <SectionTyBinMi />
        {/* Section: CacKhoaHoc */}
        <CacKhoaHoc />
        {/* Section: Section Tùy Biến Mới */}
        <SectionTyBinMi_2 />
        {/* Section: Section Tùy Biến Mới */}
        <SectionTyBinMi_3 />
        {/* Section: MinhBachTuyetDoi */}
        <MinhBachTuyetDoi />
        {/* Section: Feedback */}
        <Feedback />
        {/* Section: VideoSection */}
        <VideoSection />
        {/* Section: FAQSection */}
        <FAQSection />
        {/* Section: FormTuyenSinh */}
        <FormTuyenSinh />
        {/* Section: Footer */}
        <Footer />
      </main>
    </div>
  );
}
