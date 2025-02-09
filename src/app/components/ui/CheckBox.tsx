import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  isActive: boolean;
  onChange: () => void | any;
  borderColor?: string;
  bgColor?: string;
}

const CheckBox = ({ isActive, onChange, borderColor, bgColor}: Props) => {

  return (
    <div>
      <label className="flex items-center gap-x-2 cursor-pointer">
        <input
          onChange={() => {
            onChange();
          }}
          type="checkbox"
          checked={isActive}
          className="hidden"
        />
        <div className="relative">
          <div
            className={`border-2 border-${borderColor} py-1 px-1 w-6 h-6 rounded-md duration-300 ${
              isActive ? `bg-${bgColor} border-none` : ""
            } `}
          ></div>
          <div
            className={`text-white absolute bottom-[0.2rem]  left-[0.15rem] text-base font-bold`}
          >
            {isActive && <Icon icon="ic:round-check" />}
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
