import React from "react";
import Navbar from "../components/Navbar";
import Mark from "../assets/crew/image-mark-shuttleworth.png";
import Victor from "../assets/crew/image-victor-glover.png";
import Douglas from "../assets/crew/image-douglas-hurley.png";
import Anousheh from "../assets/crew/image-anousheh-ansari.png";
import useEmblaCarousel from "embla-carousel-react";

export default function Crew() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const crewData = [
    {
      role: "Commander",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: Douglas,
    },
    {
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: Mark,
    },
    {
      role: "Pilot",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: Victor,
    },
    {
      role: "Flight Engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: Anousheh,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-crewMobileBackground bg-cover bg-center md:bg-crewTabletBackground lg:bg-crewDesktopBackground">
      <Navbar />
      <main className="flex w-full flex-grow p-6">
        <div className="embla h-full w-full" ref={emblaRef}>
          {/* Embla container */}
          <div className="embla__container flex h-full">
            {crewData.map((member, index) => (
              <div
                className="embla__slide flex h-full flex-col items-center justify-center"
                key={index}
              >
                <div className="max-w-3xl text-center">
                  <div>
                    <p className="font-base md:font-xl font-barlow-condensed tracking-[0.15rem] text-white md:self-start">
                      <span className="mr-6 text-blue-200">02</span>
                      MEET YOUR CREW
                    </p>
                    <div className="mt-16">
                      <h2 className="font-bellefair text-xl font-normal uppercase text-[#8D8F93]">
                        {member.role}
                      </h2>

                      <h3 className="font-bellefair text-2xl font-normal uppercase text-white">
                        {member.name}
                      </h3>
                    </div>
                    <p className="mt-6 font-barlow text-sm leading-7 text-blue-200">
                      {member.description}
                    </p>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mt-8 max-h-80 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
