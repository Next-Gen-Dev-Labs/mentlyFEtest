"use client";
import LeftProgramInformation from "../components/programComponents/LeftProgramInformation";
import RightProgramInformation from "../components/programComponents/RightProgramInformation";
import { useAppContext } from "../context/AppContent";

const ProgramPages = () => {
    const { darktheme, setDarkTheme } = useAppContext();

    return (
        <div className={`flex flex-col ${darktheme ? "bg-appDeepTextBlue" : "bg-[#FDFDFD]" } gap-8 lg:flex-row`}>
            {/* Left Section */}
            <LeftProgramInformation />

            {/* Right Section */}
            <RightProgramInformation />
        </div>
    );
}

export default ProgramPages;