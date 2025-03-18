import ToggleBtn from "./ToggleBtn";
import CoworkingSvg from "../../public/co-working.svg";
import Meeting_Rooms from "../../public/conference.svg";
import Private_Offices from "../../public/workplace.svg";
import VirtualOffics from "../../public/Video-call.svg";
import Available from "../../public/Available.png";
import Circle from "../../public/Circle.svg";
import squarre from "../../public/squarre.svg";
import squar_2 from "../../public/squar_2.svg";
import popular from "../../public/popular.png";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-cneter mb-4">
        <p className="text-center text-md capitalize font-bold text-green-950 pt-8">
          PRICING
        </p>
        <h1 className="text-center text-2xl font-bold text-gray-950">
          Simple, transparent pricing
        </h1>
        <p className="w-[40rem] mx-auto text-center text-sm font-bold text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quisquam ducimus assumenda obcaecati mollitia reprehenderit,
          voluptatibus ipsum! Omnis, pariatur sapiente.
        </p>

        <div className="flex items-center gap-2 self-center pt-4 text-sm font-bold">
          Monthly <ToggleBtn /> Annually
        </div>
      </div>

      <div className="flex items-end gap-4 justify-center pt-4">
        <div className="flex flex-col gap-4 self-center w-[15rem]">
          <h2 className="self-start w-[9rem] text-gray-950 font-semibold">
            Select Form The Upcoming Options.
          </h2>

          <div className="flex flex-col justify-between h-[14rem]">
            <div className="flex items-center gap-2 self-center px-4 py-2 rounded-md bg-gray-50 w-[11rem]">
              <img src={CoworkingSvg} alt="CoworkingSvg" />{" "}
              <span className="text-gray-800 text-sm font-medium">
                Shared Space
              </span>
            </div>
            <div className="flex items-center gap-2 self-center px-4 py-2 rounded-md bg-amber-100 w-[11rem]">
              <img src={Meeting_Rooms} alt="Meeting_Rooms" />{" "}
              <span className="text-gray-800 text-sm font-medium">
                Meeting Rooms
              </span>
            </div>
            <div className="flex items-center gap-2 self-center px-4 py-2 rounded-md bg-gray-50 w-[11rem]">
              <img src={Private_Offices} alt="Private_Offices" />{" "}
              <span className="text-gray-800 text-sm font-medium">
                Private Offices
              </span>
            </div>
            <div className="flex items-center gap-2 self-center px-4 py-2 rounded-md bg-gray-50 w-[11rem]">
              <img src={VirtualOffics} alt="VirtualOffics" />{" "}
              <span className="text-gray-800 text-sm font-medium">
                Virtual Offices
              </span>
            </div>
          </div>

          <p className="text-gray-900 text-md font-medium pt-8">
            Do you face Any Problems?
          </p>
          <span className="text-gray-400 text-sm font-light -mt-3 w-[9rem]">
            Contact us anyplace we will be happy.
          </span>

          <div className="flex items-center justify-between">
            <div className="flex itemms-center gap-2">
              <img src={Available} alt="Available" />
              <span>Available 24/7</span>
            </div>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="flex flex-col gap-4  w-[18rem] rounded-md bg-gray-50 p-6 border border-gray-200">
          <div className="flex items-start gap-2">
            <div className="w-[4rem] h-[4rem] rounded-md bg-green-200 flex items-center justify-center">
              <img src={Circle} alt="Circle" />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm font-light text-gray-400">
                For Individuals
              </p>
              <span className="text-md font-bold text-green-950">Basic</span>
            </div>
          </div>
          <p className="text-sm font-light text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            libero.
          </p>

          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-950">SAR</span>
            <span className="text-6xl font-bold text-green-950 -translate-y-[1rem]">
              99
            </span>
            <span className="text-md font-light text-gray-800"> /monthly</span>
          </div>

          <span className=""></span>
          <div className="flex flex-col gap-4">
            <p className="text-green-950 font-bold">What's Included</p>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">10 Hours / Week</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                24 Hour in Shared area / Month
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                Free 1 hour private office
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                Up to 3 teem members
              </span>
            </div>
          </div>

          <button className="cursor-pointer bg-green-800 hover:bg-green-950 rounded-4xl px-3 py-2 text-white font-semibold">
            Get started
          </button>
        </div>

        <div className="flex flex-col gap-4 w-[18rem] rounded-md bg-green-900 p-6 border border-gray-200">
          <div className="flex items-center justify-center gap-2 bg-green-950 px-4 py-2 rounded-lg">
            <img src={popular} alt="popular" />
            <p className="text-white">Popular Plan (Best Sales)</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-[4rem] h-[4rem] rounded-md bg-green-200 flex items-center justify-center">
              <img src={squarre} alt="squar" />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="text-white text-sm font-light">For mid companies</p>
              <span className="text-white text-md font-bold">Enterprise</span>
            </div>
          </div>
          <p className="text-sm font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            libero.
          </p>

          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">SAR</span>
            <span className="text-6xl font-bold text-white -translate-y-[1rem]">
              99
            </span>
            <span className="text-md font-light text-white"> /monthly</span>
          </div>

          <span className=""></span>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold">What's Included</p>
            <div className="flex items-center gap-2 text-white">
              <FaCheckCircle />
              <span className="text-sm font-semibold text-white">
                All analytics features
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold text-white">
                Up to (1 MMillion) tracked visits
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold text-white">
                Premium support
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold text-white">
                Up to 10 teem members
              </span>
            </div>
          </div>

          <button className="text-green-950 cursor-pointer bg-white rounded-4xl px-3 py-2 font-semibold">
            Get started
          </button>
        </div>

        <div className="flex flex-col gap-4  w-[18rem] rounded-md bg-gray-50 p-6 border border-gray-200">
          <div className="flex items-start gap-2">
            <div className="w-[4rem] h-[4rem] rounded-md bg-green-200 flex items-center justify-center">
              <img src={squar_2} alt="squar_2" />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm font-light text-gray-400">
                For big companies
              </p>
              <span className="text-md font-bold text-green-950">
                Enterprise
              </span>
            </div>
          </div>
          <p className="text-sm font-light text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            libero.
          </p>

          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-950">SAR</span>
            <span className="text-6xl font-bold text-green-950 -translate-y-[1rem]">
              99
            </span>
            <span className="text-md font-light text-gray-800"> /monthly</span>
          </div>

          <span className=""></span>
          <div className="flex flex-col gap-4">
            <p className="text-green-950 font-bold">What's Included</p>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                All anlytics features
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                Up to (5 Millions) tracked visits
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">Dedicated support</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle />
              <span className="text-sm font-semibold">
                Up to 50 teem members
              </span>
            </div>
          </div>

          <button className="cursor-pointer bg-green-800 hover:bg-green-950 rounded-4xl px-3 py-2 text-white font-semibold">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
