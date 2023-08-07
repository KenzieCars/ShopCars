/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['sans-serif']
    },
    fontSize: {
      'font- size': '16px',
      'font- family': "Opens sans",
      'font- weight': '500',
      'font - style': 'normal',
      'text - decoration': 'none',
      'text - transform': 'none',
    },
    extend: {
      colors: {
        '--primary-color': '#7000ff',
        '--secondary-color': '#30007d',
        '--alert-negative': '#cd2b31',
        '--alert-success': '#18794e',
        '--gray-100': '#868e96',
        '--gray-200': '#495057',
        '--gray-300': '#212529',
        '--black': '#0b0d0d',
        '--white': '#f8f9fa',
      },
      textColor: ['--gray-100'],
      backgroundColor: ['--white'],
      titleColor: ['--black'],
    },
  },
  plugins: [],
}

