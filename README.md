# Học Viện Ngôn Ngữ Nhật Bản - Edu Landing Page

Landing Page được khởi tạo tự động bởi **EduLanding Studio**.

## Cấu trúc thư mục:
- `src/components/`: Chứa toàn bộ các section/component đã được chia tách riêng biệt:
  - `HeaderTanSanhNgu.jsx`
  - `HeroStandard.jsx`
  - `NeedsCategorized.jsx`
  - `WhyUsComparison.jsx`
  - `CoursesGrid.jsx`
  - `RoadmapTimeline.jsx`
  - `OpeningScheduleTable.jsx`
  - `TeachersSlider.jsx`
  - `FeedbackSlider.jsx`
  - `ConsultationForm.jsx`
  - `FooterSection.jsx`
- `src/App.jsx`: Lắp ghép và sắp xếp các section theo đúng thứ tự.
- `tailwind.config.js`: Cấu hình màu sắc, phông chữ và độ bo góc đã chọn trong Builder.
- `chay-du-an.bat`: File chạy tự động 1-click cho Windows (tự động `npm install` và `npm run dev`).

## Hướng dẫn chạy dự án:

### Cách 1 (Nhanh nhất trên Windows):
Double-click vào file **`chay-du-an.bat`**.

### Cách 2 (Dùng lệnh Terminal):
```bash
# 1. Cài đặt thư viện:
npm install

# 2. Khởi chạy dev server:
npm run dev
```
