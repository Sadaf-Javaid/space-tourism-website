/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        bellefair: "'Bellefair', serif",
        barlow: "'Barlow', sans-serif",
        "barlow-condensed": "'Barlow Condensed', sans-serif",
      },
      backgroundImage: {
        mobileBackground: "url('./src/assets/home/background-home-mobile.jpg')",
        tabletBackground: "url('./src/assets/home/background-home-tablet.jpg')",
        desktopBackground:
          "url('./src/assets/home/background-home-desktop.jpg')",
      },
      letterSpacing: {
        "nav-number": "0.168rem",
        "nav-text": "0.125rem",
      },
      backdropBlur: {
        nav: "80px",
      },
    },
  },
  plugins: [],
};
