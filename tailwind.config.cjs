/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg': '#1F2430',
        'fg': '#242936',
        'fg-shade': '#2F3440',
        'text-fg': '#E9EAEB',
        'text-bg': '#E9E9EA',
        'gray': '#CCCAC2',
        'blue1': '#409FFF',
        'blue2': '#73D0FF',
        'blue3': '#5CCFE6',
        'blue4': '#80BFFF',
        'green1': '#D5FF80',
        'green2': '#87D96C',
        'green3': '#95E6CB',
        'red1': '#F27983',
        'red2': '#F28779',
        'red3': '#F29E74',
        'yellow': '#FFD173',
        'orange': '#FFAD66',
        'beige': '#FFDFB3',
        'purple': '#DFBFFF',
      },
    },
  },
  plugins: [backfaceVisibility],
}
