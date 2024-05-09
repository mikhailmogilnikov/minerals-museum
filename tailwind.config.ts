import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        preloaderPulse: 'preloadPulse 2s linear infinite',
        fadeIn: 'fadeInKey 0.3s linear',
      },
      keyframes: {
        preloadPulse: {
          '0%': { opacity: '0.09' },
          '50%': { opacity: '0.14' },
          '100%': { opacity: '0.09' },
        },
        fadeInKey: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#000000',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: 'black',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: 'white',
            },
            focus: '#ddd',
          },
        },
        dark: {
          colors: {
            default: {
              DEFAULT: 'rgb(31, 31, 31)',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            secondary: {
              DEFAULT: 'white',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: 'white',
            },
            focus: '#333',
          },
        },
      },
    }),
  ],
};
export default config;
