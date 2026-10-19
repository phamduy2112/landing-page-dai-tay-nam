import React from 'react';

/**
 * SectionHeading - Component Tiêu Đề Section dùng chung cho toàn bộ landing page.
 * Đồng bộ cấu trúc: Badge Tag -> H2 Tiêu đề -> Paragraph Mô tả.
 */
export default function SectionHeading({
  badge,
  badgeIcon = true,
  title,
  highlight,
  highlightColor = 'text-primary',
  description,
  align = 'center',
  className = '',
  theme = 'light', // 'light' | 'dark'
  titleSize = 'default', // 'default' | 'lg' | 'xl'
  id,
  children,
}) {
  const isCenter = align === 'center';
  const isLeft = align === 'left';
  const alignClass = isCenter ? 'text-center' : isLeft ? 'text-left' : 'text-right';
  const isDark = theme === 'dark';

  const titleSizeClass =
    titleSize === 'xl'
      ? "text-2xl sm:text-3xl lg:text-[38px] leading-[1.25]"
      : "text-[27px] sm:text-[30px] md:text-[30px] leading-[1.25]";

  return (
    <header className={`mx-auto mb-5 max-w-[820px] md:mb-5 ${alignClass} ${className}`}>
      {badge && (
        <span
          className={`mb-3.5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.05em] border border-primary/20 bg-primary-50 text-primary`}
        >
          {badgeIcon && (
            <span
              className={`h-2 w-2 rounded-full ${isDark ? 'bg-[#FF6B6B]' : 'bg-primary'}`}
              aria-hidden="true"
            />
          )}
          {badge}
        </span>
      )}

      {title && (
        <h2
          id={id}
          className={`mb-3.5 sm:!leading-[1.2] font-['Montserrat',sans-serif] font-extrabold tracking-[-0.02em] ${titleSizeClass} ${isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
        >
          {title}{' '}
          <span className='block sm:inline'>{highlight && <span className={highlightColor}>{highlight}</span>}</span>
        </h2>
      )}

      {description && (
        <p
          className={`text-[15px] leading-[1.65] sm:text-[16px] md:text-[17px] ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}
        >
          {description}
        </p>
      )}

      {children}
    </header>
  );
}
