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
        homeMobileBackground:
          "url('./src/assets/home/background-home-mobile.jpg')",
        homeTabletBackground:
          "url('./src/assets/home/background-home-tablet.jpg')",
        homeDesktopBackground:
          "url('./src/assets/home/background-home-desktop.jpg')",
        destinationMobileBackground:
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        destinationTabletBackground:
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        destinationDesktopBackground:
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        crewMobileBackground:
          "url('./src/assets/crew/background-crew-mobile.jpg')",
        crewTabletBackground:
          "url('./src/assets/crew/background-crew-tablet.jpg')",
        crewDesktopBackground:
          "url('./src/assets/crew/background-crew-desktop.jpg')",
        technologyMobileBackground:
          "url('./src/assets/technology/background-technology-mobile.jpg')",
        technologyTabletBackground:
          "url('./src/assets/technology/background-technology-tablet.jpg')",
        technologyDesktopBackground:
          "url('./src/assets/technology/background-technology-desktop.jpg')",
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
