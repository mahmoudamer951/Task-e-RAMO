import image_1 from "../../public/minimalist-business-office-modern-spacious-design-with-sleek-furniture-open-concept-spaces1.png";
import image_2 from "../../public/room-with-sign-that-says-no-photos-wall1.png";
import image_3 from "../../public/creative-office-interior-thoughtfully-designed-with-vibrant-colors-flexible-spaces-inspiring-decor-fostering-productivity-innovation-generative-ai.jpg";

function Contact() {
  return (
    <section className="">
      <h1 className="text-3xl font-bold text-gray-950 text-center pt-4">
        Contact Us
      </h1>
      <p className="text-md font-semibold text-gray-600 text-center">
        We Are Here For Your Help
      </p>

      <div className="h-full flex items-center justify-center gap-4 pt-2">
        <div className="w-[45%] grid grid-cols-2 grid-rows-3 gap-4 relative">
          <img
            src={image_1}
            alt="image_1"
            className="row-span-2 col-1 h-full"
          />
          <img src={image_2} alt="image_2" className="row-3 col-1 h-full" />
          <img
            src={image_3}
            alt="image_3"
            className="row-span-3 col-2 h-full"
          />
          <span className="w-[6rem] h-[6rem] rounded-full bg-white/50 backdrop-blur-md absolute bottom-[6.5rem] left-[11rem]"></span>
        </div>

        <div className="w-[45%] h-full flex flex-col gap-4 self-start">
          <p className="text-sm font-bold text-gray-950">
            Please fill the upcoming fields
          </p>
          <div className="w-full h-full flex flex-col justify-between flex-grow gap-4">
            <input
              type="text"
              value=""
              placeholder="Full Name..."
              className="w-full h-[2rem] px-2 py-1 border border-gray-800 rounded-sm"
            />
            <input
              type="text"
              value=""
              placeholder="Email..."
              className="w-full h-[2rem] px-2 py-1 border border-gray-800 rounded-sm"
            />
            <input
              type="text"
              value=""
              placeholder="Phone Number..."
              className="w-full h-[2rem] px-2 py-1 border border-gray-800 rounded-sm"
            />
            <input
              type="text"
              value=""
              placeholder="City..."
              className="w-full h-[2rem] px-2 py-1 border border-gray-800 rounded-sm"
            />
            <textarea
              value=""
              placeholder="Message text..."
              className="w-full h-[10rem] px-2 py-1 border border-gray-800 rounded-sm"
            />

            <button className="self-center text-white bg-green-800 hover:bg-green-950 cursor-pointer rounded-md w-[8rem] px-4 py-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
