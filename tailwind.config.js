module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

     extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '75xl' :'7.5rem',
       },
      maxWidth: {
        'hero': '50.75rem',
        'intro' : '42.188rem',
        'cat' : '75.406rem',
       },
       padding: {
        '53' : '12.813rem',
        '54': '13.375rem',
       },
       margin: {
        '90' : '22rem',
       },
       inset: {
        '90': '23rem',
        '100': '30rem',
        '120': '35rem',
        '140': '40rem',
        '1/5': '-20%',
        '4/5': '-80%',
        '65': '-16.5rem',
        '1/8': '20%',
       },
       colors: {
        ladies: {
          DEFAULT: '#FFCDC1',
        },
        men: {
          DEFAULT: '#CBE9FF',
        },
        children: {
          DEFAULT: '#E0FCB5',
        },
        cookies: {
          DEFAULT: '#191919',
        },
        lgrey: {
          DEFAULT: '#FFFFFF80',
        },
        dgrey: {
          DEFAULT: '#FFFFFF1A',
        }
     },
     height: {
      footer: '488px',
      menu: '50rem',
      cross: '119px',
      crossmini: '40px',
      video: '60vh',
     },
     width: {
      cross: '7px',
      crossmini: '3px',
     },
     spacing: {
      '100': '50rem',
    }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
