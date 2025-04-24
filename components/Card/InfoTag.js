const InfoTag = ({ text, color }) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-800",
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
      gray: "bg-gray-100 text-gray-800",
    };
  
    return (
      <span className={`${colorMap[color]} text-[9px] font-medium px-3 py-1 rounded-md`}>
        {text}
      </span>
    );
  };
  export default InfoTag
  