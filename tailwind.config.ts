import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'java': {
        '50': '#f2fbfa',
        '100': '#d3f4f1',
        '200': '#a7e8e2',
        '300': '#73d5d1',
        'DEFAULT': '#49bcba',
        '500': '#2d9f9f',
        '600': '#217f80',
        '700': '#1e6567',
        '800': '#1d4f52',
        '900': '#1c4445',
        '950': '#0a2729',
    },  
    'steel-blue': {
      '50': '#f4f7fb',
      '100': '#e7eef7',
      '200': '#cadbed',
      '300': '#9bbcde',
      '400': '#6699ca',
      'DEFAULT': '#4984bc',
      '600': '#316398',
      '700': '#29507b',
      '800': '#254467',
      '900': '#233b57',
      '950': '#182639',
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
  },},
    extend: {
      colors:{
        // primary:colors.indigo,
        // secondary:colors.amber
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'deeper': '0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5);',
      },
      spacing:{
        '13':'52px'
      }
    },
  },
  plugins: [],
});

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     colors:{
//       'java': {
//         '50': '#f2fbfa',
//         '100': '#d3f4f1',
//         '200': '#a7e8e2',
//         '300': '#73d5d1',
//         'DEFAULT': '#49bcba',
//         '500': '#2d9f9f',
//         '600': '#217f80',
//         '700': '#1e6567',
//         '800': '#1d4f52',
//         '900': '#1c4445',
//         '950': '#0a2729',
//     },  
//     'steel-blue': {
//       '50': '#f4f7fb',
//       '100': '#e7eef7',
//       '200': '#cadbed',
//       '300': '#9bbcde',
//       '400': '#6699ca',
//       'DEFAULT': '#4984bc',
//       '600': '#316398',
//       '700': '#29507b',
//       '800': '#254467',
//       '900': '#233b57',
//       '950': '#182639',
//   },
//       'neutral': {
//         '50': '#f5f7f9',
//         '100': '#e9ecf0',
//         '200': '#d8dee5',
//         '300': '#c2ccd6',
//         '400': '#9dacbd',
//         'DEFAULT': '#8595ac',
//         '600': '#74819c',
//         '700': '#67728e',
//         '800': '#586075',
//         '900': '#49505f',
//         '950': '#2f323c',
//     },
//     'supernova': {
//       '50': '#fefce8',
//       '100': '#fff9c2',
//       '200': '#fff087',
//       '300': '#ffe043',
//       '400': '#ffcc14',
//       'DEFAULT': '#efb203',
//       '600': '#ce8900',
//       '700': '#a46004',
//       '800': '#884b0b',
//       '900': '#733d10',
//       '950': '#431f05',
//   },},
//     extend: {
//       colors:{
//         // primary:colors.indigo,
//         // secondary:colors.amber
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       boxShadow: {
//         'deeper': '0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5);',
//       },
//       spacing:{
//         '13':'52px'
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;
