import React from "react";

interface button {
  value: string;
}
const buttonPurple = ({ value }: button) => {
  return <button className="bg-[#6F01D0] text-white font-medium px-6 py-2 rounded-md">{value}</button>;
};

export default buttonPurple;
