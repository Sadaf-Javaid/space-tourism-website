import { useState } from "react";
import TabContent from "./TabContent";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      id: 0,
      label: "Moon",
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
    <div>
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
              <TabContent
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
  );
}
