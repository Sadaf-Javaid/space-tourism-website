import Navbar from "../components/Navbar";
import imageMoon from "../assets/destination/image-moon.png";
import Tabs from "../components/Tabs";

export default function Destination() {
  return (
    <div className="flex min-h-screen flex-col bg-destinationMobileBackground bg-cover bg-center bg-no-repeat md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground">
      <Navbar />
      <main className="flex-col p-6">
        {/* Picture section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-white">
            <span>01</span>PICK YOUR DESTINATION
          </p>
          <img src={imageMoon} />
        </div>

        {/* Tabs section */}
        <Tabs />
      </main>
    </div>
  );
}
