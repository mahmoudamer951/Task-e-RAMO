import { FaArrowRightLong } from "react-icons/fa6";
import image_1 from "../../public/image_1.png";
import image_2 from "../../public/image_2.png";
import image_3 from "../../public/image_3.png";

function Articles() {
  return (
    <section className="pt-4">
      <h1 className="text-3xl font-bold text-gray-950">Our Recent Articles</h1>
      <span className="text-sm font-semibold text-gray-600">
        Stay informed with Our latest insights
      </span>

      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex flex-col gap-2">
          <img src={image_1} alt="image_1" />
          <div className="flex items-center justify-between pt-3">
            <span className="text-sm font-semibold text-amber-950">
              Mohamed MO
            </span>
            <span className="text-sm font-semibold text-gray-800">
              20 Apr 2024
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-950">Blog Title Here</h2>

          <p className="text-sm text-gray-400 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            ipsam tempore nobis recusandae impedit voluptatem dicta optio soluta
            non veniam!
          </p>
          <div className="flex items-center gap-2 self-start cursor-pointer">
            <button className="cursor-pointer text-sm font-bold">
              Read More
            </button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <img src={image_2} alt="image_2" />
          <div className="flex items-center justify-between pt-3">
            <span className="text-sm font-semibold text-amber-950">
              Mohamed MO
            </span>
            <span className="text-sm font-semibold text-gray-800">
              20 Apr 2024
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-950">Blog Title Here</h2>

          <p className="text-sm text-gray-400 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            ipsam tempore nobis recusandae impedit voluptatem dicta optio soluta
            non veniam!
          </p>
          <div className="flex items-center gap-2 self-start cursor-pointer">
            <button className="cursor-pointer text-sm font-bold">
              Read More
            </button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <img src={image_3} alt="image_3" />
          <div className="flex items-center justify-between pt-3">
            <span className="text-sm font-semibold text-amber-950">
              Mohamed MO
            </span>
            <span className="text-sm font-semibold text-gray-800">
              20 Apr 2024
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-950">Blog Title Here</h2>

          <p className="text-sm text-gray-400 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            ipsam tempore nobis recusandae impedit voluptatem dicta optio soluta
            non veniam!
          </p>
          <div className="flex items-center gap-2 self-start cursor-pointer">
            <button className="cursor-pointer text-sm font-bold">
              Read More
            </button>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
