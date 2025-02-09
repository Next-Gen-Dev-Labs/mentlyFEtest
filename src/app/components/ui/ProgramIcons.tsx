import { Icon } from "@iconify/react";

interface IconWrapperProps{
    icon: string
}
const IconWrapper = ({icon}: IconWrapperProps) => {
    return (
        <>
            <span className="block flex items-center justify-center rounded-full bg-[#FFECCC] mr-4 w-[32px] h-[32px]" aria-hidden="true">
                <Icon icon={icon} className="text-mentlyBlue"/>
            </span>
        </>
    );
}

export default IconWrapper;