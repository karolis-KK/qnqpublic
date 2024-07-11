/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        dmsans: ['DM Sans']
      },
      spacing: {
        '102': '50rem',
        '100': '42rem',
        '99': '31rem',
        '101': '47rem',
        '120': '115rem',
        '90': '35rem',
        '91': '48rem',
        '92': '42rem',
        '103': '65rem',
        '104': '60rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

