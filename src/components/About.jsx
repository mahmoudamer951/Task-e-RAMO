import LocationSvg from "../../public/location_fi_535239.svg";
import OfficeSvg from "../../public/office_fi_3022243.svg";
import CallSvg from "../../public/call_fi_3468825.svg";
import MenPng from "../../public/group-men-business-attire-sit-around-table-with-laptops.png";
import BusinessJpg from "../../public/modern-business-office-interior-3d-rendering.jpg";
import ReerPng from "../../public/rear-view-woman-using-laptop-office.png";

function About() {
  return (
    <section className="flex gap-4 justify-between">
      <div className="w-[45%] flex flex-col justify-between">
        <div className="pb-4">
          <h1 className="text-4xl font-bold pb-2">About Chair Location</h1>
          <p className="text-sm font-light">
            “Chair location” is a website where you can search, find and reserve
            co-working space, including co-working offices, private offices,
            meeting rooms, and virtual offices near you. It shows the features
            and amenities this space can provide. Professionals and businesses
            can then compare all available co-working spaces to find one with
            the services and facilities that best suit their requirements.{" "}
          </p>
        </div>

        <div className="leading-[2] pb-4">
          <h2 className="text-2xl font-semibold pb-2">Why Chair Location</h2>
          <div className="flex items-center gap-2">
            <img src={LocationSvg} alt="svg" /> <p>More Than (4652 Location)</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={OfficeSvg} alt="svg" />{" "}
            <p>We Offer All Amenities in Our All Location</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={CallSvg} alt="svg" /> <p>All Kinda Of Supports 24/7</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer text-white bg-green-700 hover:bg-green-800 rounded-md px-4 py-2">
            View Products
          </button>
          <button className="cursor-pointer flex items-center gap-2 border text-green-800 border-solid border-green-700 hover:border-green-800 rounded-md px-4 py-2">
            Book Now
          </button>
        </div>
      </div>

      <div className="w-[45%] flex flex-col gap-2">
        <img src={MenPng} alt="image" />
        <img src={BusinessJpg} alt="image" />
        <img src={ReerPng} alt="image" />
      </div>
    </section>
  );
}

export default About;
