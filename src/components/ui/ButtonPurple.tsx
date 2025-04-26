"use client";

import React from "react";

interface button {
  value: string;
  className?: string;
  icon?: React.ReactNode;
}
const ButtonPurple = ({ value, className, icon }: button) => {
  return <button className={`bg-[#6F01D0] transition-all duration-300 hover:bg-[#5c00ad] cursor-pointer text-white font-medium ${className}`}>
    <p>{value}</p>
    {icon}
  </button>;
};

export default ButtonPurple;
