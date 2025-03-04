const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
      },
      backgruondImage: {
        "gradient-cover": 
        "linear-gradient(90.21deg, rgba(70, 54, 124, 0.5) -5.91%, rgba(74, 47, 190, 0.5) 111.58%)",
      }
    }
  }
};
export default config;