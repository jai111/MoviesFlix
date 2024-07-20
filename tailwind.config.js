module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(239 68 68 / 1)', 
          light: 'rgb(239 68 68 / 0.1)',   
          dark: 'rgb(239 68 68 / 0.2)'  
        },
        secondary: {
          DEFAULT: '#D97706', 
          light: '#FBBF24',   
          dark: '#B45309'     
        },
      },
    },
  },
  plugins: [],
}
