import { Icon } from "@iconify/react";
import IconWrapper from "../ui/ProgramIcons";

const ProgramInfoBoxContent = [
    {
        icon: "ph:certificate",
        text: "Content"
    },
    {
        icon: "formkit:people",
        text: "Content"
    },
    {
        icon: "fluent:call-add-20-regular",
        text: "Content"
    },
    {
        icon: "mynaui:briefcase",
        text: "Content"
    },
    {
        icon: "solar:notes-outline",
        text: "Content"
    },
    {
        icon: "material-symbols-light:forum-outline",
        text: "Content"
    },
]

const ProgramListItems = ["Content", "Content", "Content", "Content", "Content", "Content"]

const ProgramInfoBox = () => {
    return (
        <div className="w-full space-y-6 mt-6">
            <section className="border border-[#FEE0B1] bg-[#FFFAF2] rounded-xl p-4" aria-labelledby="program-info-title-2">
                <h2 id="program-info-title" className="text-mentlyBlue text-3xl font-bold mb-[37px]">Program Information Text</h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ProgramInfoBoxContent.map((item, index) => (
                        <li key={index} className="mb-[32px] flex items-center gap-4 w-[50%]" role="list">
                            <IconWrapper icon={item.icon} />
                            <span className='text-[#595564]'>{item.text}</span>
                        </li>
                    ))}
                </ul>

            </section>

            <section className="border border-[#FEE0B1] bg-[#FFFAF2] rounded-xl p-4" aria-labelledby="program-info-title-2">
                <h2 id="program-info-title-2" className="text-mentlyBlue text-3xl font-bold mb-[37px]">Program Information Text</h2>

                <ul className="list-disc pl-6 space-y-3">
                    {ProgramListItems.map((item, index) => (
                        <li key={index} className="flex w-[50%] text-[#595564]" style={{display: "list-item"}}>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ProgramInfoBox;