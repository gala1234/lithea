import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2EFE9',
        text: '#333333',
        primary: '#8C7A5B',
        'primary-hover': '#5e513c',
        'primary-light': '#D4C5A9',
        accent: '#BFA473',
        'light-bg': '#F8F7F2',
        'subtle-text': '#5a5a5a',
        'medium-text': '#666',
        'light-text': '#7a7a7a',
        'placeholder-text': '#888',
        'disabled-text': '#999',
        'divider': '#ccc',
      },
      fontFamily: {
        serif: ['var(--font-cormorant-garamond)'],
        sans: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
