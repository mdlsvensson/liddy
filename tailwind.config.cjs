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
        'fg-light': '#393E4A',
        'text-fg': '#E9EAEB',
        'text-bg': '#E9E9EA',
        'gray': '#CCCAC2',
        'blue1': '#409FFF',
        'blue2': '#73D0FF',
        'blue3': '#5CCFE6',
        'blue4': '#80BFFF',
        'green1-dimmer': '#95B35A',
        'green1-dim': '#B5D96D',
        'green1': '#D5FF80',
        'greed1-shade': '#DBFF93',
        'green2': '#87D96C',
        'green3': '#95E6CB',
        'red1-dimmer': '#A9555C',
        'red1-dim': '#CE676F',
        'red1': '#F27983',
        'red1-shade': '#F48D96',
        'red2': '#F28779',
        'red3': '#F29E74',
        'yellow-dimmer': '#B39251',
        'yellow-dim': '#D9B262',
        'yellow': '#FFD173',
        'yellow-shade': '#FFD888',
        'orange': '#FFAD66',
        'beige': '#FFDFB3',
        'purple': '#DFBFFF',
      },
    },
  },
  plugins: [backfaceVisibility],
}
