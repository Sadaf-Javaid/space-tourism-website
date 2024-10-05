import Navbar from "../components/Navbar";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import { useState } from "react";

export default function Technology() {
  const [activeTab, setActiveTab] = useState(0);

  const technologyData = [
    {
      id: 0,
      term: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imageSm: launchVehicleLandscape,
      imageLg: launchVehiclePortrait,
    },
    {
      id: 1,
      term: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      imageSm: spaceportLandscape,
      imageLg: spaceportPortrait,
    },
    {
      id: 2,
      term: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imageSm: spaceCapsuleLandscape,
      imageLg: spaceCapsulePortrait,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-technologyMobileBackground bg-cover bg-center bg-no-repeat md:bg-technologyTabletBackground lg:bg-technologyDesktopBackground">
      <Navbar />
      <main className="mt-6 flex h-full max-w-[1300px] flex-grow flex-col items-center md:py-10 lg:ml-auto lg:space-y-6 lg:py-12 lg:pl-10">
        <div className="flex w-full items-center justify-center px-10 md:justify-start lg:px-0">
          <p className="font-base md:font-xl font-barlow-condensed tracking-[0.15rem] text-white lg:text-[1.75rem]">
            <span className="mr-6 text-blue-200">03</span>
            SPACE LAUNCH 101
          </p>
        </div>

        {/* Image and Tabs Container */}
        <div className="flex w-full flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:gap-8 lg:px-0">
          {/* Image Container */}
          <div className="mt-[5.63rem] h-[16.13rem] w-full md:h-[22.31rem] lg:mt-0 lg:flex lg:h-[37.5rem] lg:w-auto lg:justify-end">
            {/* Small and Medium Screen Image */}
            <img
              src={technologyData[activeTab].imageSm}
              className="h-full w-full object-cover object-center lg:hidden"
            />

            {/* Large Screen Image */}
            <img
              src={technologyData[activeTab].imageLg}
              className="hidden object-cover object-center lg:block lg:h-full lg:w-auto"
            />
          </div>

          {/* Tabs Start Here */}
          <div className="mt-8 flex flex-col gap-10 px-6 pb-12 md:px-10 md:pb-10 lg:mt-0 lg:flex-row lg:gap-8 lg:px-0 lg:pb-0 lg:items-center">
            {/* Tab Buttons */}
            <div className="flex items-center justify-center space-x-4 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-8">
              {technologyData.map((technology, index) => (
                <button
                  key={technology.id}
                  onClick={() => setActiveTab(index)}
                  className={`h-10 w-10 rounded-full font-bellefair text-lg transition-colors duration-200 md:h-14 md:w-14 md:text-2xl lg:h-20 lg:w-20 ${activeTab === index ? "border border-white bg-white text-blue-900" : "border border-[rgba(255,255,255,0.25)] bg-transparent text-white hover:border-white"}`}
                >
                  {technology.id + 1}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {technologyData.map(
                (technology, index) =>
                  activeTab === index && (
                    <div className="flex max-w-[600px] flex-col items-center justify-center space-y-4 lg:space-y-8 text-center text-white lg:items-start lg:justify-start lg:text-left">
                      <h3 className="font-bellefair text-lg uppercase text-[#8A8990] md:text-2xl lg:text-[2rem]">
                        THE TERMINOLOGY…
                      </h3>
                      <h2 className="font-bellefair text-2xl text-white md:text-[2.5rem] lg:text-[3.5rem]leading-snug">
                        {technology.term}
                      </h2>
                      <p className="font-barlow text-base leading-7 text-blue-200 lg:text-lg">
                        {technology.description}
                      </p>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
