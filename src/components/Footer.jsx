import { Link } from "react-scroll";

import logo from "../../public/Logo-png_1.png";
import facebook from "../../public/facebook.png";
import linkedin from "../../public/linkedin_2.png";
import youtube from "../../public/youtube.png";
import twitter from "../../public/twitter-alt.png";

import CoworkingSvg from "../../public/co-working.svg";
import WorkplaceSvg from "../../public/workplace.svg";
import ConferenceSvg from "../../public/conference.svg";
import VideoSvg from "../../public/video-call.svg";

import Google from "../../public/Group.png";
import Vector from "../../public/Vector.svg";

function Footer() {
  return (
    <footer className="relative flex items-start justify-between gap-4 pt-12 bg-gray-200 -left-[2rem] w-[calc(100%+4rem)] p-20">
      <span className="absolute top-0 left-[50%] -translate-x-[50%] border-b pb-4 border-gray-400 w-[95%]"></span>
      <div className="flex flex-col items-start">
        <img className="cursor-pointer h-[4rem]" src={logo} alt="logo" />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4">
          <img
            className="col-1 row-1 cursor-pointer"
            src={facebook}
            alt="facebook"
          />
          <img
            className="col-2 row-1 cursor-pointer"
            src={youtube}
            alt="youtube"
          />
          <img
            className="col-1 row-2 cursor-pointer"
            src={linkedin}
            alt="linkedin"
          />
          <img
            className="col-2 row-2 cursor-pointer"
            src={twitter}
            alt="twitter"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-xl font-bold text-green-950">Main Pages</h2>
        <ul className="flex flex-col items-start justify-center gap-4">
          <li className="">
            <Link className=" cursor-pointer">Home</Link>
          </li>
          <li className="">
            <Link className=" cursor-pointer">About</Link>
          </li>
          <li className="">
            <Link className=" cursor-pointer">How It Works</Link>
          </li>
          <li className="">
            <Link className=" cursor-pointer">Contact Us</Link>
          </li>
          <li className="">
            <Link className=" cursor-pointer">Membership</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-xl font-bold text-green-950">Products</h2>
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img src={CoworkingSvg} alt="CoworkingSvg" />
            <p className="">Shared Space</p>
          </div>
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img src={WorkplaceSvg} alt="WorkplaceSvg" />
            <p className="">Private Offices</p>
          </div>
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img src={ConferenceSvg} alt="ConferenceSvg" />
            <p className="">Meeting Rooms</p>
          </div>
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img src={VideoSvg} alt="VideoSvg" />
            <p className="">Virtual Offices</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4 w-[12rem] !important">
        <h2 className="text-xl font-bold text-green-950">
          Download the Chair Location App
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 pt-2">
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

      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] text-sm text-gray-600 flex items-center justify-between gap-4 border-t pt-2 border-gray-400 w-[95%] pb-4">
        <div className="flex-items-center justify-center gap-2">
          <span className="">Privacy & Policy</span>
          <span className="">Terms & Conditions</span>
        </div>

        <p className="">
          All Copyright Chair Location | Developed by{" "}
          <span className="text-gray-950 font-bold">
            e-RAMO For Digital Solutions
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
