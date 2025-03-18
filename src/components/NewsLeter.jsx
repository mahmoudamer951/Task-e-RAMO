import right from "../../public/right.svg";
import left from "../../public/left.svg";

function NewsLeter() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-12">
      <div className="absolute w-[4rem] h-[4rem] bg-amber-100 rounded-md rotate-[20deg] top-[4rem] left-[4rem] flex items-center justify-center">
        <img className="-rotate-[20deg]" src={left} alt="left" />
      </div>
      <div className="absolute w-[4rem] h-[4rem] bg-amber-100 rounded-md -rotate-[20deg] top-[4rem] right-[4rem] flex items-center justify-center">
        <img className="rotate-[20deg]" src={right} alt="right" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl text-gray-950 font-bold">
          Subscribe To Our Newsleter
        </h2>
        <p className="text-md text-gray-800 font-light">
          Every couple of weeks we send out an update and a few things that have
          inspired us.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 w-[50%]">
        <input
          type="text"
          value=""
          className="w-full h-[2.5rem] px-2 border border-solid border-green-700 focus:outline-green-800 rounded-sm"
          placeholder="Search Here..."
        />

        <div className="flex items-center justify-between gap-8">
          <button className="py-2 px-4 cursor-pointer bg-green-700 hover:bg-green-800 text-white rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLeter;
