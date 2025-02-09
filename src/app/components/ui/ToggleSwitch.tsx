import { useAppContext } from "@/app/context/AppContent";
import { useState } from "react";

const ToggleSwitch = () => {
    const { darktheme, setDarkTheme } = useAppContext();
    
    return (
        <>
            <label className="flex items-center justify-center relative gap-x-2 mt-10 cursor-pointer">
                {/* Hidden Checkbox Input */}
                <input
                    value={"on"}
                    type="checkbox"
                    className="hidden"
                    checked={darktheme}
                    onChange={() => setDarkTheme(!darktheme)}
                />
                {/* Toggle Background */}
                <div className={`w-10 h-5 rounded-full transition-colors duration-500 ${darktheme ? "bg-appDeepTextBlue" : "bg-[#F6F6F6]"} `}
                >
                    {/* Toggle Knob */}
                    <div
                        className={`p-2 ml-[0.8px] ${darktheme ? "bg-white translate-x-5  transition-all" : "translate-x-0 bg-mentlyBlue  transition-all"}  rounded-full transform absolute bottom-[1.8px]`}
                    ></div>
                </div>
            </label >
        </>
    );
}

export default ToggleSwitch;

