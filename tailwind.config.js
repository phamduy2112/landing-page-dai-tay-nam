/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D8626',
          dark: '#0A6B1E',
          light: '#12A130',
          50: '#F0FDF4',
          100: '#DCFCE7',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          dark: '#B45309',
        },
        accent: {
          DEFAULT: '#F59E0B',
        },
      },
      fontFamily: {
        heading: ['Be Vietnam Pro', 'sans-serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': 'var(--radius-sm, 4px)',
        'DEFAULT': 'var(--radius-md, 8px)',
        'md': 'var(--radius-md, 8px)',
        'lg': 'var(--radius-lg, 12px)',
        'xl': 'var(--radius-xl, 16px)',
        '2xl': 'var(--radius-2xl, 24px)',
        '3xl': 'var(--radius-3xl, 32px)',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
