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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        marqueeLeft: {
          from: { transform: 'translateX(100%)'},
          to: { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          from : {transform: 'translateX(-100%)'},
          to: {transform: 'translateX(100%)'}
        }
      },
      animation: {
        marqueeLeft: 'marqueeLeft 20s linear infinite',
        marqueeRight: 'marqueeRight 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
