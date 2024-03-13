import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'spray': {
        '50': '#edfefe',
        '100': '#d1fafc',
        '200': '#a9f4f8',
        '300': '#7becf4',
        '400': '#2bd6e5',
        'DEFAULT': '#0fb9cb',
        '600': '#0f95ab',
        '700': '#13778b',
        '800': '#196071',
        '900': '#195160',
        '950': '#0b3541',
    },    
      'neutral': {
        '50': '#f5f7f9',
        '100': '#e9ecf0',
        '200': '#d8dee5',
        '300': '#c2ccd6',
        '400': '#9dacbd',
        'DEFAULT': '#8595ac',
        '600': '#74819c',
        '700': '#67728e',
        '800': '#586075',
        '900': '#49505f',
        '950': '#2f323c',
    },
    'supernova': {
      '50': '#fefce8',
      '100': '#fff9c2',
      '200': '#fff087',
      '300': '#ffe043',
      '400': '#ffcc14',
      'DEFAULT': '#efb203',
      '600': '#ce8900',
      '700': '#a46004',
      '800': '#884b0b',
      '900': '#733d10',
      '950': '#431f05',
  },
  
    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'deeper': '0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5);',
      }
    },
  },
  plugins: [],
};
export default config;
