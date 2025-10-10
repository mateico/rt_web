import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
          '13': 'repeat(13, minmax(0, 1fr))',
      },
        colors: {
            primary: {
                DEFAULT: '#0c2732',
                light: '#97cce4',
                dark: '#07171e',
            },
            secondary: {
                DEFAULT: '#dab170',
                light: '#ffe8c6',
                dark: '#775b2f',
            },
        },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
