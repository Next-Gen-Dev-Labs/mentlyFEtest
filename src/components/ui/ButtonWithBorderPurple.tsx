type button = {
  value: string;
  className?: string;
};
const ButtonWithBorderPurple = ({ value, className }: button) => {
  return <button className={`border border-[#6F01D0] text-[#6F01D0] text-xs font-normal ${className}`}>{value}</button>;
};

export default ButtonWithBorderPurple;
