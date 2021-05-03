module.exports = {
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    extend: {
      // ...
      fontWeight: ['hover', 'focus'],
      margin: ['first', 'last']
    }
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-40': 'repeat(auto-fit, minmax(20rem, 1fr));',
        'footer': 'fit-content(10px) fit-content(10px) 1fr',
      },
      colors: {
        green: {
          tokped: '#03AC0E',
        },

      },
      fontSize: {
        '0.8': '.86rem',
        '1.4': '1.14286rem',
        'xxs': '.65rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '11': '11px',
      },
      zIndex: {
        '0': 0,
        '3': 3,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '50': 50,
        '75': 75,
        '100': 100,
        'auto': 'auto',
      },
      width: {
        '145px': '145px',
        '560px': '560px',
        '96%': '96%',
        '99': '27rem',
        '100': '28rem',
      },
      height: {
        '27': '110px',
        '25': '100px',
        '450px': '450px',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
      },
      minWidth: {
        '150px': '150px'
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '100': '33rem',
      },
      inset: {
        '18': '75px',
        '17': '74px'
      }
    }


  }
}
