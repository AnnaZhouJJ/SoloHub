/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral colors
        neutral: {
          900: '#0b0b0b',
          white: '#ffffff',
          black: '#000000',
        },
        // Grey colors
        grey: {
          100: '#f6f6f6',
          200: '#f4f4f4',
          300: '#e2e2e2',
          400: '#8f8f8f',
          500: '#696969',
          700: '#454545',
          800: '#0B0B0B',
        },
        // Green colors
        green: {
          200: '#e8fde9',
          500: '#2adb59',
          '500-brand': '#2ADB59',
          700: '#009d0a',
        },
      },
      fontFamily: {
        primary: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sp-8': '8px',
        'sp-15': '15px',
        'sp-16': '16px',
        'sp-20': '20px',
        'sp-25': '25px',
        'sp-30': '30px',
        'sp-40': '40px',
        'sp-46': '46px',
        'sp-50': '50px',
        'sp-60': '60px',
        'sp-80': '80px',
        'sp-120': '120px',
      },
      borderRadius: {
        'corner-m': '20px',
        'corner-full': '100px',
      },
      fontSize: {
        'xxxs': ['10px', { lineHeight: '100%' }],
        'xxs': ['12px', { lineHeight: '100%' }],
        'xs': ['14px', { lineHeight: '100%' }],
        's': ['16px', { lineHeight: '100%' }],
        'body-16': ['16px', { lineHeight: '25px' }],
        'body-18': ['18px', { lineHeight: '28px' }],
        'body-20': ['20px', { lineHeight: '30px' }],
        'body-32': ['32px', { lineHeight: '45px' }],
        'title-40': ['40px', { lineHeight: '60px' }],
        'title-64': ['64px', { lineHeight: '100%' }],
      },
    },
  },
  plugins: [],
}

