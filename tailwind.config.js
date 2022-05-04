module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors:{
        'terminal': '#39ff14',
        'grass': '#90EE90',
      },
      animation: {
        // cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.2s ease-out .4s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '1.5ch' },
          '25%, 30%': { width: '2ch' },
          '35%, 40%': { width: '2.5ch' },
          '45%, 50%': { width: '3ch' },
          '55%, 60%': { width: '3.5ch' },
          '65%, 70%': { width: '4ch' },
          '75%, 80%': { width: '4.5ch' },
          '85%, 90%': { width: '5ch' },
          '95%, 100%': { width: '6ch' },
        },
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    }
  },
  plugins: [],
}