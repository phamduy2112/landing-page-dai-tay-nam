@echo off
chcp 65001 > nul
title Khởi Động Dự Án dai-tay-nam-edu-landing
color 0B
echo ======================================================================
echo   TỰ ĐỘNG KHỞI CHẠY DỰ ÁN LANDING PAGE: dai-tay-nam-edu-landing
echo ======================================================================
echo.
echo [1/2] Đang kiểm tra và cài đặt thư viện (npm install)...
call npm install
echo.
echo [2/2] Đang khởi động dev server (npm run dev)...
echo Dự án sẽ tự động bật trình duyệt tại http://localhost:3000...
echo.
call npm run dev
pause
