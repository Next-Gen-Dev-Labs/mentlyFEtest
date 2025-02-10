import React from "react";
import useColorMode from "@/hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="flex items-center space-x-2">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={colorMode === "dark"}
          onChange={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className="peer sr-only"
        />
        <div className="peer h-6 w-11 rounded-full bg-gray after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-boxdark after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 "></div>
      </label>
    </div>
  );
};

export default DarkModeSwitcher;
