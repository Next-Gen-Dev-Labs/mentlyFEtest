
interface button {
    value: string;
    className?: string;
}
const ButtonRedBorder = ({value, className}: button) => {
  return (
    <button className={`text-[#D83535] border border-[#D09696] bg-[#FFEDED] rounded-md font-medium ${className}`}>{value}</button>
  )
}

export default ButtonRedBorder
