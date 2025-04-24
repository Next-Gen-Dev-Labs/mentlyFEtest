const WelcomeAboard = () => {
  return (
    <div className="w-[75%] bg-[#6F01D0] h-[3.8rem] flex gap-4 px-4 mt-2 ml-2 cursor-default rounded-md justify-between items-center max-[700px]:w-full min-[701px]:max-[950px]:w-[85%]">
      <div className="font-[600] text-[1.2rem] text-[#FFFFFF] max-[800px]:text-[.7rem]">
        Welcome Aboard, Blessing 👋
      </div>
      <div className="font-[600] text-[.9rem] text-[#BDBDBD] max-[800px]:text-[.5rem]">
        We’re thrilled to have you join Techrity Team!
      </div>
      <div className="bg-[#FFFFFF] font-[700] text-[.8rem] text-[#1F0954] w-[10rem] h-[60%] rounded-md flex justify-center items-center max-[800px]:text-[.6rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
        Update Profile
      </div>
    </div>
  )
}
export default WelcomeAboard
