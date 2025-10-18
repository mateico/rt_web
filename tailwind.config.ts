import type { Config } from 'tailwindcss';
import { theme as designTokens } from './theme';

const config: Config = {
    darkMode: 'class', // Enables class-based dark mode
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
                neutral: {
                    50:  'hsl(210, 20%, 98%)',
                    100: 'hsl(210, 16%, 96%)',
                    200: 'hsl(214, 15%, 91%)',
                    300: 'hsl(216, 12%, 84%)',
                    400: 'hsl(218, 11%, 65%)',
                    500: 'hsl(220, 9%, 48%)',
                    600: 'hsl(222, 10%, 34%)',
                    700: 'hsl(222, 14%, 27%)',
                    800: 'hsl(222, 22%, 19%)',
                    900: 'hsl(222, 29%, 10%)',
                },
                primary: designTokens.colors.brand,
                secondary: {
                    30:  'hsl(37, 60%, 99.95%)',
                    50:  'hsl(37, 60%, 98%)',
                    100: 'hsl(37, 60%, 89%)',
                    200: 'hsl(37, 60%, 80%)',
                    300: 'hsl(37, 60%, 72%)',
                    400: 'hsl(37, 60%, 68%)',
                    500: 'hsl(37, 60%, 64%)', // rufina default
                    600: 'hsl(37, 60%, 52%)',
                    700: 'hsl(37, 60%, 38%)',
                    800: 'hsl(37, 60%, 28%)',
                    900: 'hsl(37, 60%, 18%)',
                },
                success: designTokens.colors.success,
                warning: designTokens.colors.warning,
                error: designTokens.colors.error,
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

export default config;
