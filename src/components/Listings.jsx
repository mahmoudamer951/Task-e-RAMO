import Larg from "../../public/large-office-interior-with-plants-open-ceiling-3d-rendering.png";
import RedPng from "../../public/red_Vector_143.png";
import GreenSvg from "../../public/green_Vector_142.svg";
import Arrow from "../../public/right_arrow_fi_17190356.png";
import Hart from "../../public/Hart_fi_833472.png";
import Peer from "../../public/per_fi_17848968.svg";
import Open from "../../public/per_fi_17848968.svg";
import ArrowRight from "../../public/icon_nav_arrow_right.svg";
import YellowStar from "../../public/Yellow_star_fi_2107957.svg";

function Listings() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center pb-4 pt-4">
        Latest Listings
      </h1>
      <p className="text-xl font-semibold text-center">
        Check Out Latest Listings
      </p>

      <div className="flex justify-center gap-16 pt-2">
        <div className="flex flex-col gap-2p-2 w-[15rem] bg-gray-100 p-2 rounded-sm shadow-lg">
          <div className="relative">
            <img src={Larg} alt="image" />
            <div className="absolute top-0 bg-white opacity-30"></div>
            <img src={GreenSvg} alt="image" className="absolute top-0" />
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-12 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Arrow} alt="image" />
            </div>
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-4 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Hart} alt="image" />
            </div>
            <span className="absolute top-5 left-2 -rotate-[45deg] text-[.8rem]">
              Available
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 pb-2">
            <p className="bg-gray-200 px-2 py-1 rounded-sm text-nowrap text-[.8rem]">
              Shared Area
            </p>

            <div className="flex items-center gap-2">
              <img src={YellowStar} alt="Star" />
              <span className="text-nowrap text-[.8rem]">4.9 (162 Review)</span>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-bold pb-1">Spot CO-Working Space</h2>
            <p className="text-sm font-light">
              Chair location is a website where you can search, find and reserve
              co-working space, including co-working
            </p>
          </div>

          <div className="flex flex-col mt-8 pb-2">
            <div className="flex items-center gap-2">
              <img src={Peer} alt="Per" />
              <span className="">12 Per</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Open} alt="Open" />
              <span className="">12 Per</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm">
              Starts From: <span className="font-bold">20</span>SAR/HOUR
            </span>
            <img src={ArrowRight} alt="Arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2p-2 w-[15rem] bg-gray-100 p-2 rounded-sm shadow-lg">
          <div className="relative">
            <img src={Larg} alt="image" />
            <div className="absolute top-0 bg-white opacity-30"></div>
            <img src={RedPng} alt="image" className="absolute top-0" />
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-12 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Arrow} alt="image" />
            </div>
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-4 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Hart} alt="image" />
            </div>
            <span className="absolute top-6 -left-1 -rotate-[45deg] text-[.8rem]">
              Not Available
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 pb-2">
            <p className="bg-gray-200 px-2 py-1 rounded-sm text-nowrap text-[.8rem]">
              Shared Area
            </p>

            <div className="flex items-center gap-2">
              <img src={YellowStar} alt="Star" />
              <span className="text-nowrap text-[.8rem]">4.9 (162 Review)</span>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-bold pb-1">Spot CO-Working Space</h2>
            <p className="text-sm font-light">
              Chair location is a website where you can search, find and reserve
              co-working space, including co-working
            </p>
          </div>

          <div className="flex flex-col mt-8 pb-2">
            <div className="flex items-center gap-2">
              <img src={Peer} alt="Per" />
              <span className="">12 Per</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Open} alt="Open" />
              <span className="">12 Per</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm">
              Starts From: <span className="font-bold">20</span>SAR/HOUR
            </span>
            <img src={ArrowRight} alt="Arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2p-2 w-[15rem] bg-gray-100 p-2 rounded-sm shadow-lg">
          <div className="relative">
            <img src={Larg} alt="image" />
            <div className="absolute top-0 bg-white opacity-30"></div>
            <img src={GreenSvg} alt="image" className="absolute top-0" />
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-12 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Arrow} alt="image" />
            </div>
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-4 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Hart} alt="image" />
            </div>
            <span className="absolute top-5 left-2 -rotate-[45deg] text-[.8rem]">
              Available
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 pb-2">
            <p className="bg-gray-200 px-2 py-1 rounded-sm text-nowrap text-[.8rem]">
              Shared Area
            </p>

            <div className="flex items-center gap-2">
              <img src={YellowStar} alt="Star" />
              <span className="text-nowrap text-[.8rem]">4.9 (162 Review)</span>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-bold pb-1">Spot CO-Working Space</h2>
            <p className="text-sm font-light">
              Chair location is a website where you can search, find and reserve
              co-working space, including co-working
            </p>
          </div>

          <div className="flex flex-col mt-8 pb-2">
            <div className="flex items-center gap-2">
              <img src={Peer} alt="Per" />
              <span className="">12 Per</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Open} alt="Open" />
              <span className="">12 Per</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm">
              Starts From: <span className="font-bold">20</span>SAR/HOUR
            </span>
            <img src={ArrowRight} alt="Arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-2p-2 w-[15rem] bg-gray-100 p-2 rounded-sm shadow-lg">
          <div className="relative">
            <img src={Larg} alt="image" />
            <div className="absolute top-0 bg-white opacity-30"></div>
            <img src={GreenSvg} alt="image" className="absolute top-0" />
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-12 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Arrow} alt="image" />
            </div>
            <div className="cursor-pointer absolute flex items-center justify-center top-2 right-4 w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100">
              <img src={Hart} alt="image" />
            </div>
            <span className="absolute top-5 left-2 -rotate-[45deg] text-[.8rem]">
              Available
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 pb-2">
            <p className="bg-gray-200 px-2 py-1 rounded-sm text-nowrap text-[.8rem]">
              Shared Area
            </p>

            <div className="flex items-center gap-2">
              <img src={YellowStar} alt="Star" />
              <span className="text-nowrap text-[.8rem]">4.9 (162 Review)</span>
            </div>
          </div>

          <div className="">
            <h2 className="text-md font-bold pb-1">Spot CO-Working Space</h2>
            <p className="text-sm font-light">
              Chair location is a website where you can search, find and reserve
              co-working space, including co-working
            </p>
          </div>

          <div className="flex flex-col mt-8 pb-2">
            <div className="flex items-center gap-2">
              <img src={Peer} alt="Per" />
              <span className="">12 Per</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Open} alt="Open" />
              <span className="">12 Per</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm">
              Starts From: <span className="font-bold">20</span>SAR/HOUR
            </span>
            <img src={ArrowRight} alt="Arrow" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listings;
