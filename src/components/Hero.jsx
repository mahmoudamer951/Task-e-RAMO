import HeroImg from "../../public/modern-office-space-with-sleek-design-corporate-interior-with-comfortable-furniture-clean-spacious-work-environment.png";
import coWorkingSvg from "../../public/co-working.svg";
import workplaceSvg from "../../public/workplace.svg";
import conferenceSvg from "../../public/conference.svg";
import videoCallSvg from "../../public/video-call.svg";
import SearchSvg from "../../public/search_fi_149852.svg";
import NearbySvg from "../../public/nearby_fi_17065265.svg";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden h-[100vh] py-4">
      <div className="relative h-[70vh] rounded-lg overflow-hidden">
        <img src={HeroImg} className="absolute h-full" alt="Hero img" />
        <div className="absolute top-0 flex items-center justify-center inset-0 bg-black opacity-70"></div>
        <p className="relative top-[8rem] text-6xl px-32 font-bold text-white text-center">
          Office That Fit You Creative Way To Work
        </p>
      </div>

      <div className="absolute w-[80%] h-[12rem] flex items-center flex-col justify-between overflow-hidden bg-white rounded-xl bottom-20 left-1/2 translate-x-[-50%]">
        <div className="flex self-center justify-between gap-4 pt-8 px-8 my-4 w-full">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-sm cursor-pointer">
            <img src={coWorkingSvg} alt="" />
            <span>Shared Space</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-sm cursor-pointer">
            <img src={workplaceSvg} alt="" />
            <span>Private Offices</span>
          </div>
          <div className="flex items-center gap-2 bg-green-100 border-b border-green-800 px-4 py-2 rounded-sm cursor-pointer">
            <img src={conferenceSvg} alt="" />
            <span>Meating Rooms</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-sm cursor-pointer">
            <img src={videoCallSvg} alt="" />
            <span>Virtual Offices</span>
          </div>
        </div>

        <div className="bg-amber-50 w-full h-full flex items-center justify-between gap-2 pt-2 px-8">
          <input
            type="text"
            value=""
            className="w-full h-[2rem] px-2 border border-solid border-green-700 focus:outline-green-800 rounded-sm"
            placeholder="Search Here..."
          />

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center justify-between gap-2 py-2 cursor-pointer">
              <img src={NearbySvg} alt="nearby" />
              <span className="text-nowrap">Search Nearby</span>
            </div>
            <button className="py-2 px-4 cursor-pointer bg-green-700 hover:bg-green-800 text-white rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
