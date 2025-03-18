/* eslint-disable no-irregular-whitespace */
import location from "../../public/location.jpg";
import maraai from "../../public/maraai.png";
import masraf from "../../public/masraf.png";
import visa from "../../public/visa.png";
import slack from "../../public/slack.png";
import xboxone from "../../public/xboxone.png";
import linkedin from "../../public/linkedin.png";
import cisco from "../../public/cisco.png";
import bank from "../../public/bank.png";

function Chair() {
  return (
    <section className="mt-12 -left-[2rem] w-[calc(100%+4rem)] flex items-center justify-center relative">
      <img className="" src={location} alt="location" />

      <div className="flex items-center justify-center gap-12 absolute">
        <div className="w-[45%]">
          <h1 className="text-4xl font-bold text-white pb-2">
            Chair Location Is Trusted By The World’s Largest Companies.
          </h1>
          <p className="text-md font-light text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            aperiam?
          </p>
        </div>

        <div className="w-[45%] grid grid-cols-2 grid-rows-4 gap-6">
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-1 row-1">
            <img src={maraai} alt="maraai" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-2 row-1">
            <img src={masraf} alt="masraf" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-1 row-2">
            <img src={visa} alt="visa" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-2 row-2">
            <img src={slack} alt="slack" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-1 row-3">
            <img src={xboxone} alt="xboxone" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-2 row-3">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-2xl flex items-center justify-center col-1 row-4">
            <img src={cisco} alt="cisco" />
          </div>
          <div className="bg-white/20 border border-gray-300 px-4 py-2 rounded-md flex items-center justify-center col-2 row-4">
            <img src={bank} alt="bank" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chair;
