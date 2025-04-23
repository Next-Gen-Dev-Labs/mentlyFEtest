type button = {
  value: string;
};
const buttonWithBorderPurple = ({ value }: button) => {
  return <button className="border border-[#6F01D0] text-[#6F01D0] text-xs font-normal">{value}</button>;
};

export default buttonWithBorderPurple;
