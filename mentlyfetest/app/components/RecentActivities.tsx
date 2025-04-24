const RecentActivities = () => {
  const images = {
    menu: '/Images/Programs/menu (2).svg',
    dots: '/Images/Programs/dots.svg',
    mentor: '/Images/Group calls icon/student.jpg',
    lady: '/Images/Group calls icon/Recent Activities.jpg',
    red: '/Images/Participants/beautiful lady.png',
  }

  return (
    <section className="applications relative cursor-default scroll bg-white w-[21rem] h-[19rem] mt-10 ml-10 overflow-y-scroll max-[500px]:w-[90vw] min-[640px]:max-[900px]:w-[70%] min-[640px]:max-[900px]:flex-col min-[640px]:max-[900px]:items-center min-[640px]:max-[900px]:justify-center min-[640px]:max-[900px]:ml-0 max-[500px]:ml-0 rounded-xl">
      <div className="menuSection w-[21rem] h-12 flex items-center justify-around gap-22 p-2 cursor-default bg-white/40 backdrop-blur-md mb-18 fixed rounded-t-xl z-50">
        <div className="flex items-center gap-2">
          <img
            src={images.menu}
            alt="menuIcon"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
          <span className="text-[#B0B0B0] text-[1rem] font-[700]">
            Recent Activities
          </span>
        </div>
        <div className="flex w-[4rem] gap-2 items-center -mr-3">
          <span className="text-[#6F01D0] text-[0.76rem] font-[600]">
            See all
          </span>
          <img
            src={images.dots}
            alt="more"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
        </div>
      </div>

      <section className="mentors w-full h-[105%] flex flex-col items-center border-transparent border-b-[.05rem] border-b-[#E1E7EC] -mt-4 overflow-y-scroll scroll absolute top-[20%]">
        <div className="w-[96%] h-[30%] flex flex-col py-4 gap-4 pt-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between ">
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.lady}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2 leading-[1rem] mt-3">
                <span className="font-[700] text-[0.88rem] text-[#011627]">
                  KYC Verification
                </span>
                <span className="font-[400] text-[0.75rem] text-[#707991] w-[15rem]">
                  45 new persons just signed up on Mently
                </span>
                <span className="text-[#707991] font-[300] text-[0.75rem]">
                  25 minutes Ago
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[96%] h-[30%]  flex flex-col py-4 gap-4 pt-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between ">
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.red}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2 leading-[1rem] mt-3">
                <span className="font-[700] text-[0.88rem] text-[#011627]">
                  KYC Verification
                </span>
                <span className="font-[400] text-[0.75rem] text-[#707991] w-[15rem]">
                  45 new persons just signed up on Mently
                </span>
                <span className="text-[#707991] font-[300] text-[0.75rem]">
                  25 minutes Ago
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[96%] h-[30%] flex flex-col py-4 gap-4 pt-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between ">
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.mentor}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2 leading-[1rem] mt-3">
                <span className="font-[700] text-[0.88rem] text-[#011627]">
                  KYC Verification
                </span>
                <span className="font-[400] text-[0.75rem] text-[#707991] w-[15rem]">
                  45 new persons just signed up on Mently
                </span>
                <span className="text-[#707991] font-[300] text-[0.75rem]">
                  25 minutes Ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default RecentActivities
