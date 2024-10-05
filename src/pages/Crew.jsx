import Navbar from "../components/Navbar";
import Douglas from "/crew/image-douglas-hurley.png";
import Mark from "/crew/image-mark-shuttleworth.png";
import Victor from "/crew/image-victor-glover.png";
import Anousheh from "/crew/image-anousheh-ansari.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Crew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    customPaging: () => (
      <div className="slick-dot"></div> // Custom dot element
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "8px",
        }}
      >
        <ul className="p-0">{dots}</ul>
      </div>
    ),
  };

  const crewMembers = [
    {
      id: 0,
      role: "Commander",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: Douglas,
    },
    {
      id: 1,
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: Mark,
    },
    {
      id: 2,
      role: "Pilot",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: Victor,
    },
    {
      id: 3,
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
      <main className="flex w-full flex-1 flex-col items-center justify-center p-6 md:p-10 lg:px-10 lg:py-12">
        <div className="slider-container h-full w-full max-w-[1200px]">
          <Slider {...settings}>
            {crewMembers.map((member) => (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-16 flex w-full items-center justify-center px-10 md:justify-start lg:mb-6 lg:px-0">
                  <p className="font-base md:font-xl font-barlow-condensed tracking-[0.15rem] text-white lg:text-[1.75rem]">
                    <span className="mr-6 text-blue-200">02</span>
                    MEET YOUR CREW
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
                  <div className="flex flex-col items-center space-y-12 lg:mr-auto">
                    <div className="text-center lg:text-left">
                      <h3 className="font-lg mb-2 font-bellefair uppercase text-[#ffffff6b] md:mb-4 md:text-2xl lg:text-[2rem]">
                        {member.role}
                      </h3>
                      <h2 className="lg:text-[3.5rem]leading-snug font-bellefair text-2xl uppercase leading-[1.2] text-white md:text-[3.5rem]">
                        {member.name}
                      </h2>
                      <p className="mt-8 max-w-[512px] font-barlow text-base leading-7 text-blue-200 lg:text-lg">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex-center md:p12 flex items-center p-8">
                    <img
                      src={member.image}
                      className="blend-effect h-[340px] object-contain object-center md:h-[560px] lg:h-[676px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
