import Img_1 from "../../public/3d-rendering-business-meeting-working-room-office-building.jpg";
import Img_2 from "../../public/empty-office-with-flowerpots.jpg";
import Img_3 from "../../public/modern-business-office-interior-3d-rendering.jpg";

function Hybrid() {
  return (
    <section>
      <h1 className="text-xl font-bold pt-8 pb-2 text-center">
        Hybrid working can work for you
      </h1>
      <p className="text-gray-400 text-md font-light text-center px-16 pb-4">
        Hybrid working offers you the freedom to work closer to clients,
        colleagues or home. It's also greener and more cost-effective. With over
        4,000 locations globally, nobody is better placed than Regus to help you
        make the best of it.
      </p>

      <div className="flex justify-center gap-16">
        <img
          src={Img_1}
          alt="Img_1"
          className="w-[20rem] h-[16rem] object-cover rounded-xl"
        />
        <div className="flex flex-col gap-4 w-[20rem] h-[22rem] pb-4">
          <img
            src={Img_2}
            alt="Img_2"
            className="w-[20rem] h-[16rem] object-cover rounded-xl"
          />
          <span className="w-full h-[.6rem] bg-green-950 rounded-t-[9rem]"></span>
        </div>

        <img
          src={Img_3}
          alt="Img_3"
          className="w-[20rem] h-[16rem] object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

export default Hybrid;
