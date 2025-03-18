import CoworkingSvg from "../../public/co-working.svg";
import WorkplaceSvg from "../../public/workplace.svg";
import ConferenceSvg from "../../public/conference.svg";
import VideoSvg from "../../public/video-call.svg";
import PriceSvg from "../../public/Price_fi_11805286.svg";
import EllipsePng from "../../public/Ellipse_4.png";
import CreativePng from "../../public/creative-office-interior-thoughtfully-designed-with-vibrant-colors-flexible-spaces-inspiring-decor-fostering-productivity-innovation-generative-ai.png";

function Space() {
  return (
    <section className="pt-16">
      <div className="w-[48rem] flex items-center justify-center gap-4 bg-green-800 rounded-[4rem] my-0 mx-auto h-[5rem]">
        <div className="cursor-pointer flex items-center gap-2 bg-white rounded-4xl px-4 py-2 text-green-800">
          <img src={CoworkingSvg} alt="CoworkingSvg" />
          <p>Shared Spaces</p>
        </div>
        <div className="cursor-pointer flex items-center gap-2 bg-green-700 rounded-4xl px-4 py-2 text-white">
          <img src={WorkplaceSvg} alt="WorkplaceSvg" />
          <p>Private Offices</p>
        </div>
        <div className="cursor-pointer flex items-center gap-2 bg-green-700 rounded-4xl px-4 py-2 text-white">
          <img src={ConferenceSvg} alt="ConferenceSvg" />
          <p>Meeting Rooms</p>
        </div>
        <div className="cursor-pointer flex items-center gap-2 bg-green-700 rounded-4xl px-4 py-2 text-white">
          <img src={VideoSvg} alt="VideoSvg" />
          <p>Virtual Offices</p>
        </div>
      </div>

      <div className="flex justify-between gap-2 pt-8">
        <div className="flex flex-col justify-between w-[45%]">
          <div>
            <h1 className="text-4xl font-bold">Shared Space</h1>
            <h2 className="text-md font-semibold">(CO Work Space)</h2>
            <p className="">
              Rent as many desks as you need in a dynamic, shared office space.
              Business Address and storage options included.
            </p>

            <div className="flex flex-col gap-4 pt-4 pb-4">
              <div className="flex items-center gap-2">
                <img src={EllipsePng} alt="Ellipse Image" />
                <p>Reserved permanent workspace as long as you need</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={EllipsePng} alt="Ellipse Image" />
                <p>Book a desk by the hour or day in anyplace</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={EllipsePng} alt="Ellipse Image" />
                <p>A well-prepared place for your service and comfort</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={EllipsePng} alt="Ellipse Image" />
                <p>Hot desk as often as you need in any place</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 border-t pt-2">
              <img src={PriceSvg} alt="Price Image" />
              <p className="">
                Price Starting From: <span>1250 EGP</span>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <button className="cursor-pointer text-white bg-green-700 hover:bg-green-800 rounded-md px-4 py-2">
                Book Now
              </button>
              <button className="cursor-pointer flex items-center gap-2 border text-green-800 border-solid border-green-700 hover:border-green-800 rounded-md px-4 py-2">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-[45%]">
          <img src={CreativePng} alt="Creative Image" />
        </div>
      </div>
    </section>
  );
}

export default Space;
