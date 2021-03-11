module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [ 'Lato', 'ui-sans-serif', 'system-ui', 'sans-serif' ],
      'serif': [ 'Merriweather', 'ui-serif', 'serif' ]
    },
    extend: {
      colors: {
        'ant-green': '#1fad58',
        'ant-pale-green': 'e7fff0',
        'ant-yellow': '#f8e729'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

