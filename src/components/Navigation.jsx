import { Link } from "react-scroll";

function Navigation() {
  return (
    <ul className="flex items-center justify-between gap-2 text-gray-600 w-[50%]">
      <li className="">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          How It Works
        </Link>
      </li>
      <li>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer hover:text-green-800 hover:font-semibold"
        >
          Mempership
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
