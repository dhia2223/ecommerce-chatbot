
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // blue-600
        secondary: '#1E3A8A', // blue-900
        third: '#F3F4F6', // gray-100
        four: '#1F2937', // gray-800
      },
    },
  },
  plugins: [],
};