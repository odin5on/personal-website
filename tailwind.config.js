// import colors from 'tailwindcss/colors';

export const content = ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'];
export const theme = {
  fontFamily: {
    'mono': ['ocr-b-std', 'monospace'],
    // 'dots': ['ab-polcadot', 'sans-serif'],
    'dots': ['DotGothic16', 'sans-serif']
  },
  colors: {
    'dark': '#000000',
    'light': '#D9E3DC',
    // 'light': '#30dbac',
    // 'primary': '#FCF3E0',
    // 'secondary': '#ECBB38',
    // 'accent': '#67D6AB',
  },
  extend: {
    // colors: {      
    //   'primary': '#000000',
    //   'secondary': 'D9E3DC',
    //   // 'primary': '#FCF3E0',
    //   // 'secondary': '#ECBB38',
    //   // 'accent': '#67D6AB',

    // },
    dropShadow: {
      'green': '20px 20px 2px rgba(103, 214, 171, .7)',
    },
  },
};
export const darkMode = 'class';
export const plugins = [];
