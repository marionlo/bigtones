module.exports = {
  purge: ['./src/**/*.html',
  './src/**/*.js',],
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
        '1/8': '20%',
        '1/10': '10%',
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
      menu: '35rem',
      video: '60vh',
      menumob: '30rem',
      menutab: '40rem',
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
