import * as React from "react";
import { DropdownMenu } from "radix-ui";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Icon } from "@iconify/react";

interface DropDownProps {
    menu: string[];
    icon: string;
    color: string;
    hover: string;
}

const Dropdown = ({ menu, icon, color, hover }: DropDownProps) => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState("pedro");

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="inline-flex size-[35px] items-center justify-center outline-none"
                    aria-label="Customise options"
                >
                   <Icon icon={icon} className={`text-[${color}] hover:text-${hover}`} width="24" height="24" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[64px] min-h-[64px] rounded-md bg-[#FAFAFA] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                    sideOffset={5}
                >
                    {menu.map((list, index) => (
                        <DropdownMenu.Item
                            key={index}
                            className="group relative flex h-[25px] select-none items-center justify-center hover:rounded-md hover:bg-[#cee1fb] rounded-[3px] px-[5px] text-[13px] leading-none text-[#777795] outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                            {list}
                        </DropdownMenu.Item>
                    ))}

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown
