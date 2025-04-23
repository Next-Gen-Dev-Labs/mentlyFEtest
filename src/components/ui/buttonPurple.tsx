import React from "react";

interface button {
  value: string;
  className?: string;
}
const ButtonPurple = ({ value, className }: button) => {
  return <button className={`bg-[#6F01D0] text-white font-medium ${className}`}>{value}</button>;
};

export default ButtonPurple;
