
interface button {
    value: string;
    className?: string;
}
const ButtonRedBorder = ({value, className}: button) => {
  return (
    <button className={`text-[#D83535] border cursor-pointer border-[#D09696] bg-[#FFEDED] transition-all duration-300 hover:bg-[#f5d5d5] rounded-md font-medium ${className}`}>{value}</button>
  )
}

export default ButtonRedBorder
