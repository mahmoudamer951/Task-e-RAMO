import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import EngFlag from "../../public/united-states-of-america-flag-waving-icon-16.png";
import ArabFlag from "../../public/saudi-arabia-flag-waving-icon-16.png";
import { useState } from "react";

function LangBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("English");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function changeLanguage(selectLanguage) {
    setLang(selectLanguage);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => toggleDropdown()}
        className="flex items-center gap-2 px-4 py-2 cursor-pointer"
      >
        {lang === "English" ? (
          <img src={EngFlag} width={16} quality={100} alt="flag" />
        ) : (
          <img src={ArabFlag} width={16} quality={100} alt="flag" />
        )}
        <span>{lang}</span>
        <span>{!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </button>

      {isOpen && (
        <div className="absolute bg-white z-1">
          <span
            onClick={() => changeLanguage("English")}
            className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
          >
            <img src={EngFlag} width={16} quality={100} alt="flag" /> English
          </span>
          <span
            onClick={() => changeLanguage("العربية")}
            className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
          >
            العربية
            <img src={ArabFlag} width={16} quality={100} alt="flag" />{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default LangBtn;
