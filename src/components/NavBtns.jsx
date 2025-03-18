import CreateBtn from "./CreateBtn";
import LangBtn from "./LangBtn";
import LoginBtn from "./LoginBtn";

function NavBtns() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <LangBtn />
        <CreateBtn />
        <LoginBtn />
      </div>
    </div>
  );
}

export default NavBtns;
