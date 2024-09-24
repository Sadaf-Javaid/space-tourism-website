import Navbar from "../components/Navbar";
import imageMoon from "../assets/destination/image-moon.png";

export default function Destination() {
  return (
    <div className="bg-destinationMobileBackground md:bg-destinationTabletBackground lg:bg-destinationDesktopBackground flex min-h-screen flex-col bg-cover bg-center bg-no-repeat">
      <Navbar />
      <main className="flex-col p-6">
        {/* picture section */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="text-white">
            <span>01</span>PICK YOUR DESTINATION
          </p>
          <img src={imageMoon} />
        </div>
        {/* tabs section */}
        <div></div>
      </main>
    </div>
  );
}
