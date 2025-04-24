const TopHeader = () => {
  const images = {
    bell: '/Images/Icons/notifications.svg',
    logo: '/Images/Icons/logo.svg',
    dropdown: '/Images/Programs/dropdown.svg',
  }

  return (
    <div className="w-[80vw] h-[3.8rem] ml-[0.68rem] bg-white drop-shadow-md drop-shadow-[#9f9b9b] gap-4 backdrop-blur-md flex justify-end px-8 items-center max-[500px]:w-screen cursor-default">
      <img
        src={images.bell}
        className="w-[3rem] h-[1.5rem] hover:scale-110 transition-transform duration-700 ease-in-out"
        alt="notifications icon"
      />
      <div className="w-[12rem] h-full flex justify-center items-center gap-4">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full flex justify-center items-center bg-[#8B72FC]">
          <img
            src={images.logo}
            className="w-[3rem] h-[2rem]"
            alt="Techrity logo"
          />
        </div>
        <div className="text-[#404040] flex flex-col gap-1">
          <span className="font-[400] text-[0.87]">Techrity Foun...</span>
          <span className="font-[400] text-[0.75rem] pl-1">Member</span>
        </div>
      </div>
      <div className="w-[1.5rem] h-[1.5rem] rounded-md bg-[#8B72FC] flex justify-center items-center hover:scale-110 transition-transform duration-700 ease-in-out">
        <img src={images.dropdown} alt="more info clickable menu" />
      </div>
    </div>
  )
}
export default TopHeader
