module.exports = {
  darkMode: 'class', // Enable dark mode using class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garmetGreen: '#0B4551',
        garmetYellow: '#E5FC31',
      },
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}