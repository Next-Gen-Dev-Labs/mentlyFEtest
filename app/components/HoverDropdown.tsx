import { HoverDropdownProps } from "../types";

const HoverDropdown: React.FC<HoverDropdownProps> = ({
  list,
  icon,
  onClickItem,
}) => {
  return (
    <div className="relative group">
      {icon}
      <div className="absolute right-0 top-full w-fit bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10 duration-200 overflow-hidden">
        <ul className="">
          {list?.map((item, index) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-slateLavendar"
              onClick={() => onClickItem && onClickItem(item, index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoverDropdown;
