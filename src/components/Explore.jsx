import Iphone from "../../public/iPhone_12_Pro.png";
import Google from "../../public/Group.png";
import Vector from "../../public/Vector.svg";
import Hand from "../../public/Hand.png";

function Explore() {
  return (
    <section className="pt-4 flex gap-8">
      <img src={Iphone} alt="Iphone" />
      <div className="relative w-full">
        <div className="absolute w-full top-[15rem]">
          <h1 className="text-4xl font-bold">Explore The Chair Location App</h1>
          <p className="text-md font-medium text-gray-600 pt-4">
            Hybrid working offers you the freedom to work closer to clients,
            colleagues or home.
          </p>

          <div className="flex items-center gap-2 pt-8">
            <div className="flex items-start gap-2 bg-gray-950 px-4 py-2 rounded-md">
              <img src={Google} alt="Google" />
              <div className="flex flex-col text-white w-[7rem] h-[2rem] ">
                <span className="text-[0.7rem] font-bold">GET IT ON</span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-gray-950 px-4 py-2 rounded-md">
              <img src={Vector} alt="Vector" />
              <div className="flex flex-col text-white w-[7rem] h-[2rem] ">
                <span className="text-[0.5rem] font-semibold">
                  Download on the
                </span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </div>
          </div>
        </div>

        <img src={Hand} alt="Hand" className="absolute top-0 right-0" />
      </div>
    </section>
  );
}

export default Explore;
