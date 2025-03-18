import Cal_1 from "../../public/flat-lay-desk-calendar-clock.jpg";
import Cal_2 from "../../public/flat-lay-desk-calendar-clock_2.jpg";
import Cal_3 from "../../public/man-with-headphones-watching-videos.jpg";

function Works() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center pt-8">
        How <span className="text-green-950">It</span> Works
      </h1>
      <p className="text-center text-lg">
        Coworking & Flexible Office Marketplace | Search & Book Today
      </p>

      <div className="flex items-center justify-center gap-16 pt-12">
        <div className="flex flex-col gap-4 w-[15rem]">
          <div className="flex items-center gap-2">
            <div className="w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100 flex items-center justify-center">
              <span>1</span>
            </div>
            <p className="">Book, Reach or Call</p>
          </div>

          <img src={Cal_1} alt="" className="" />

          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed cum ipsam?
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[15rem]">
          <div className="flex items-center gap-2">
            <div className="w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100 flex items-center justify-center">
              <span>2</span>
            </div>
            <p className="">View Location Info</p>
          </div>

          <img src={Cal_2} alt="" className="" />

          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed cum ipsam?
          </p>
        </div>

        <div className="flex flex-col gap-4 w-[15rem]">
          <div className="flex items-center gap-2">
            <div className="w-[1.6rem] h-[1.6rem] rounded-full bg-amber-100 flex items-center justify-center">
              <span>3</span>
            </div>
            <p className="">Search Locations</p>
          </div>

          <img src={Cal_3} alt="" className="" />

          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed cum ipsam?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
