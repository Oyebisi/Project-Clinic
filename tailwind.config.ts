import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#F4B400',
        surface: '#F8F9FA',
        body: '#333333'
      },
      boxShadow: {
        soft: '0 25px 60px rgba(10, 37, 64, 0.08)'
      },
      borderRadius: {
        xl: '1.75rem'
      }
    }
  },
  plugins: []
};

export default config;
