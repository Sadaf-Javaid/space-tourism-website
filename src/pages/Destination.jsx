import Navbar from "../components/Navbar";
import imageMoon from "../assets/destination/image-moon.png";
import Tabs from "../components/Tabs";

export default function Destination() {
  return (
    <div className="flex min-h-screen flex-col bg-destinationMobileBackground bg-cover bg-center bg-no-repeat md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground">
      <Navbar />
      <main className="flex-col p-6">
        {/* Picture section */}
        <div className="mb-8 flex flex-grow flex-col items-center justify-center space-y-6">
          <p className="font-base font-barlow-condensed tracking-[0.15rem] text-white">
            <span className="mr-6 text-blue-200">01</span>
            PICK YOUR DESTINATION
          </p>
          <div className="px-[5.25rem] py-[1.65rem]">
            <img src={imageMoon} width={150} height={150} />
          </div>
        </div>

        {/* Tabs section */}
        <Tabs />
      </main>
    </div>
  );
}
