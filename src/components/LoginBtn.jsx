import { RiAccountCircleLine } from "react-icons/ri";

function LoginBtn() {
  return (
    <div className="cursor-pointer flex items-center gap-2 border text-green-800 border-solid border-green-700 hover:border-green-800 rounded-md px-4 py-2 text-nowrap">
      <RiAccountCircleLine />
      <button className="cursor-pointer">Login</button>
    </div>
  );
}

export default LoginBtn;
