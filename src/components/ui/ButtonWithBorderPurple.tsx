type button = {
  value: string;
  className?: string;
};
const ButtonWithBorderPurple = ({ value, className }: button) => {
  return <button className={`border border-[#6F01D0] hover:bg-[#e5e0fd] transition-all duration-300 cursor-pointer text-[#6F01D0] text-xs font-normal ${className}`}>{value}</button>;
};

export default ButtonWithBorderPurple;
