import { Link } from "react-scroll";
import logo from "../../public/Logo-png_1.png";

function Logo() {
  return (
    <Link
      to="/"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="cursor-pointer"
    >
      <img src={logo} width={60} quality={100} alt="Logo" />
    </Link>
  );
}

export default Logo;
