import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-homeMobileBackground bg-cover bg-center md:bg-homeTabletBackground lg:bg-homeDesktopBackground">
      <Navbar />
      <main className="flex flex-grow flex-col p-6 text-center md:px-10 md:py-32 lg:justify-end">
        {/* content wrapper */}
        <div className="flex max-w-[1160px] flex-grow flex-col lg:flex-grow-0 lg:flex-row lg:items-center lg:justify-center lg:gap-[18.625rem]">
          {/* text section */}
          <div className="flex flex-col items-center justify-center gap-6 lg:max-w-[540px] lg:items-start lg:text-left">
            <p className="font-barlow-condensed text-base font-normal tracking-[0.15rem] text-blue-300 md:text-[1.75rem] md:tracking-[0.25rem]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="font-bellefair text-8xl font-normal text-white md:text-[9rem]">
              SPACE
            </h1>
            <p className="font-barlow text-[0.9375rem] font-normal leading-[1.6875rem] text-blue-300 md:text-base">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          {/* button section */}
          <div className="flex flex-grow items-center justify-center md:mt-12">
            <button className="h-36 w-36 cursor-pointer rounded-full bg-white font-bellefair text-2xl font-normal text-blue-900 md:h-[12.5rem] md:w-[12.5rem] md:text-3xl lg:h-[17rem] lg:w-[17rem] lg:text-4xl">
              Explore
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
