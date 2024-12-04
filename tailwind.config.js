module.exports = {
  darkMode: 'class', // Enable dark mode using class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garmetGreen: '#0B4551', // Light mode color
        garmetYellow: '#E5FC31', // Dark mode color
      },
    },
  },
  plugins: [],
}