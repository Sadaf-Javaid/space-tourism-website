import Navbar from "../components/Navbar";
import { useState } from "react";
import imageMoon from "../assets/destination/image-moon.png";
import imageTitan from "../assets/destination/image-titan.png";
import imageMars from "../assets/destination/image-mars.png";
import imageEuropa from "../assets/destination/image-europa.png";
import DestinationTabs from "../components/DestinationTabs";

export default function Destination() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      id: 0,
      label: "Moon",
      image: imageMoon,
      content: {
        title: "Moon",
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travelTime: "3 days",
      },
    },
    {
      id: 1,
      label: "Mars",
      image: imageMars,
      content: {
        title: "Mars",
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        travelTime: "9 months",
      },
    },
    {
      id: 2,
      label: "Europa",
      image: imageEuropa,
      content: {
        title: "Europa",
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        travelTime: "3 years",
      },
    },
    {
      id: 3,
      label: "Titan",
      image: imageTitan,
      content: {
        title: "Titan",
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travelTime: "7 years",
      },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-destinationMobileBackground bg-cover bg-center bg-no-repeat md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground">
      <Navbar />
      <main className="flex flex-col items-center flex-grow p-6 md:p-10 lg:max-w-[1120px] lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:self-center lg:px-16 lg:py-12">
        {/* Picture section */}
        <div className="mb-8 flex w-full flex-grow flex-col items-center justify-center space-y-6 lg:mb-0">
          <p className="font-base md:font-xl font-barlow-condensed tracking-[0.15rem] text-white md:self-start">
            <span className="mr-6 text-blue-200">01</span>
            PICK YOUR DESTINATION
          </p>
          <div className="px-[5.25rem] py-[1.65rem] lg:px-0 lg:py-0">
            <img
              src={tabsData[activeTab].image}
              className="h-[9.375rem] w-[9.375rem] min-w-[9.375rem] max-w-full object-contain md:h-[18.75rem] md:w-[18.75rem] lg:h-[30rem] lg:w-[30rem]"
            />
          </div>
        </div>

        {/* Tabs section */}
        <div className="flex max-w-[514px] flex-col lg:items-start">
          {/* Buttons section */}
          <div className="flex items-center justify-center space-x-8">
            {tabsData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`pb-3.5 font-barlow-condensed text-base uppercase tracking-[0.13125rem] transition-colors duration-200 ${activeTab === index ? "border-b-[3px] border-white text-white" : "text-blue-200 hover:border-b-[3px] hover:border-[#FFFFFF80] hover:text-white"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content section */}
          <div>
            {tabsData.map(
              (tab, index) =>
                activeTab === index && (
                  <DestinationTabs
                    key={tab.id}
                    title={tab.content.title}
                    description={tab.content.description}
                    distance={tab.content.distance}
                    travelTime={tab.content.travelTime}
                  />
                ),
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
