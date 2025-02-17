/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          'gray': '#9C9C9C',
          'primary-orange': '#FF9D01',
          'secondary-gray': '#656565',
          'ligh-gray': '#EFEFEF',
          'secondary-blue': '#307B74',
          'black': '#323231',
        }
      },
      fontFamily: {
        'sequel-300': 'Sequel Sans Light Body',
        'sequel-400': 'Sequel Sans Book Body',
        'sequel-500': 'Sequel Sans Medium Body',
        'sequel-600': 'Sequel Sans Semi Bold Body',
        'sequel-700': 'Sequel Sans Bold Body',
      },
      maxWidth: {
        'xxl': '1340px'
      },
      boxShadow: {
        'hero-card': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'grid-bg': "url('../img/card-img-1.png')"
      }
    },
  },
  plugins: [],
}

