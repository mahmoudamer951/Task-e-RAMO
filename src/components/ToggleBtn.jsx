import { useState } from "react";

function ToggleBtn() {
  const [enableBtn, setEnableBtn] = useState(false);
  return (
    <button
      onClick={() => setEnableBtn(!enableBtn)}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition cursor-pointer ${
        enableBtn ? "bg-gray-300" : "bg-green-800"
      }`}
    >
      <span
        className={`absolute left-1 h-4 w-4 transform rounded-full bg-white transition ${
          enableBtn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
}

export default ToggleBtn;
