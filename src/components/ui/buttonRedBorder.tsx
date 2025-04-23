
interface button {
    value: string;
}
const ButtonRedBorder = ({value}: button) => {
  return (
    <button className="text-[#D83535] border border-[#D09696] bg-[#FFEDED] rounded-md px-6 py-2 text-xs font-medium">{value}</button>
  )
}

export default ButtonRedBorder
