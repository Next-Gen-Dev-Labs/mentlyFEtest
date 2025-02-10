import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`rounded-2xl flex items-center w-12 p-0.5 cursor-pointer transition-all duration-1000 ${
        isOn ? "bg-softGray" : "bg-gray-400"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <span
        className={`rounded-full w-5 h-5 bg-midnightPurple transition-transform duration-1000 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default ToggleSwitch;
