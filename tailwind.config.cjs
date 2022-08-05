/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg1': '#1F2430',
        'bg2': '#2A2F3A',
        'bg3': '#353A45',
        'bg4': '#41454F',
        'bg5': '#4C5059',
        'text1': '#EAE8FF',
        'text2': '#FDFDFF',
        'red': '#B10F2E',
        'green': '#26c485',
        'blue': '#0094C6',
        'orange': '#FFAD66',
        'orange-dim': '#B37947',
      },
    },
  },
  plugins: [],
}
