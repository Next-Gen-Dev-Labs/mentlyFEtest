"use client";
import { PiWarningCircleLight } from "react-icons/pi";
import { CollapseItemProps, DropdownItem, InfoBoxProps } from "../models";
import { IoIosArrowUp } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";

interface IconWithDropdownProps {
  icon: React.ReactNode;
  items: DropdownItem[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const IconWithDropdown: React.FC<IconWithDropdownProps> = ({
  icon,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown open state
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {icon}
      </div>

      {isOpen && (
        <div className="origin-top-right z-20 absolute right-0 mt-2 min-w-32 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.length > 0 ? (
              items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsOpen(false);
                    item.onClick && item.onClick();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-[#777795] hover:bg-gray-100"
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))
            ) : (
              <div className="block w-full text-center px-4 py-2 text-sm text-[#777795] italic">
                No contents
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const HeaderText = ({ text }: { text: string }) => {
  return <h3 className="text-mentlyBlue text-[2rem] font-[700]">{text}</h3>;
};

export const InfoBox: React.FC<InfoBoxProps> = ({
  message,
  backgroundColor = "bg-[#CEE1FB]",
  textColor = "text-[#777795]",
  fontSize = "text-[0.8rem]",
  fontWeight = "font-[300]",
}) => {
  return (
    <div
      className={`${backgroundColor} p-3 rounded-[0.4rem] flex items-center gap-2`}
    >
      <div>
        <PiWarningCircleLight size={38} color="#086BED" />
      </div>
      <span className={`${textColor} ${fontSize} ${fontWeight}`}>
        {message}
      </span>
    </div>
  );
};

export const CheckBox = ({
  label,
  checked,
}: {
  label: string;
  checked?: boolean;
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="
          w-5 h-5 
          rounded 
          text-mentlyBlue 
          bg-white 
          border-1 border-mentlyBlue
          
         
          cursor-pointer
        "
        id="hs-checked-checkbox"
        checked={checked}
      />
      <label className="text-sm text-[#333333] ms-3">{label}</label>
    </div>
  );
};

export const CollapseItem: React.FC<CollapseItemProps> = ({
  id,
  label,
  children,
  isExpanded,
  onClick,
}) => {
  // When the header is clicked, trigger the onClick callback with this item's id.
  const handleToggle = () => {
    onClick(id);
  };

  return (
    <div className="border border-gray-300 rounded-md mt-2">
      <div className="w-full flex items-center justify-between px-4 py-3 bg-[#F1F1F1] text-gray-800 focus:outline-none">
        <span className="text-mentlyBlue">{label}</span>
        <div className="flex gap-3 items-center">
          <IoIosArrowUp
            onClick={handleToggle}
            className={`w-5 h-5 transform transition-transform duration-300 cursor-pointer ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <IconWithDropdown
            icon={<CiMenuKebab size={24} color="#C2C2C2" />}
            items={[
              {
                label: "Delete",
              },
              {
                label: "Edit",
              },
            ]}
          />
        </div>
      </div>
      {isExpanded && (
        <div
          style={{ maxHeight: isExpanded ? "500px" : "0px" }}
          className="overflow-hidden transition-all duration-300"
        >
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md transform transition-all">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
