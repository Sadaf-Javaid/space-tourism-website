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
          "url('/home/background-home-mobile.jpg')",
        homeTabletBackground:
          "url('/home/background-home-tablet.jpg')",
        homeDesktopBackground:
          "url('/home/background-home-desktop.jpg')",
        destinationMobileBackground:
          "url('/destination/background-destination-mobile.jpg')",
        destinationTabletBackground:
          "url('/destination/background-destination-tablet.jpg')",
        destinationDesktopBackground:
          "url('/destination/background-destination-desktop.jpg')",
        crewMobileBackground:
          "url('/crew/background-crew-mobile.jpg')",
        crewTabletBackground:
          "url('/crew/background-crew-tablet.jpg')",
        crewDesktopBackground:
          "url('/crew/background-crew-desktop.jpg')",
        technologyMobileBackground:
          "url('/technology/background-technology-mobile.jpg')",
        technologyTabletBackground:
          "url('/technology/background-technology-tablet.jpg')",
        technologyDesktopBackground:
          "url('/technology/background-technology-desktop.jpg')",
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
