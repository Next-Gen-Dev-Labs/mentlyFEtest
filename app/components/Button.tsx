import { ButtonProps } from "../types";

const Button: React.FC<Partial<ButtonProps>> = ({
  className,
  extraClasses,
  purpleBg,
  purpleText,
  darkBlueBg,
  greyText,
  whiteText,
  darkBorder,
  whiteBorder,
  verticalAlign,
  fullWidth,
  borderRadius,
  width,
  padding,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        className ||
        `${borderRadius || "rounded-lg"} ${
          purpleBg ? "bg-lavendarMist" : darkBlueBg ? "bg-midnightPurple" : ""
        } ${
          purpleText
            ? "text-royalPurple"
            : whiteText
            ? "text-white"
            : greyText
            ? "text-gray-400"
            : ""
        } ${
          darkBorder
            ? "border-black text-indigo-800"
            : whiteBorder
            ? "border-white"
            : "border-none"
        }  ${verticalAlign ? "flex-col gap-2" : ""} ${
          width || (fullWidth ? "w-full" : "w-fit")
        } ${
          padding || "py-2 px-3"
        } border flex items-center justify-center ${extraClasses}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
