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
     },
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
