const GroupCalls = () => {
  const images = {
    menu: '/Images/Programs/menu (2).svg',
    more: '/Images/Programs/dots.svg',
    time: '/Images/Group calls Icon/time.svg',
    calender: '/Images/Group calls Icon/calender.svg',
    arrow: '/Images/Group calls Icon/arrow.svg',
    study: '/Images/Participants/UIUX strategy.svg',
    redPic: '/Images/Programs/redPic.png',
    asian: '/Images/Programs/chinese woman.png',
    guy: '/Images/Programs/guy.png',
  }
  return (
    <section className="scroll w-[47.62rem] h-[20rem] bg-white mt-10 overflow-scroll max-[638px]:overflow-x-hidden  relative">
      <div className="topbar w-full h-[3.5rem] bg-[white] flex justify-between items-center px-[.82rem] absolute z-50">
        <div className="w-28 h-full flex items-center justify-around gap-2">
          <img
            src={images.menu}
            alt="group calls menu"
            className="hover:scale-110 transition-transform duration-75 ease-in-out"
          />
          <span className="text-[#B0B0B0] font-[700] text-[1rem]">
            Group Calls
          </span>
        </div>

        <div className="w-28 h-full flex items-center justify-around gap-2">
          <span className="font-[600] text-[0.76rem] text-[#6F01D0]">
            See all
          </span>
          <img
            src={images.more}
            alt="view more details icon"
            className="hover:scale-110 transition-transform duration-75 ease-in-out"
          />
        </div>
      </div>
      <section className="w-[120%] group-calls-cards bg-white p-4 py-9 mt-10 flex gap-4 max-[638px]:flex-col max-[638px]:justify-center max-[638px]:items-center max-[638px]:ml-0 ">
        <article className="w-[42%] min-[500px]:max-[900px]:w-[87%] h-[19rem] bg-[#FFFFFF] rounded-[0.5rem] flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="color-hack-tutorial image w-[90%] h-[30%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-[130%] font-[400] w-full text-[1.05rem] text-black left-1.5 absolute border-b-[0.05rem] border-b-[#E1E7EC]">
              Weekly Meeting - Product
              <br /> Demo Review with Testers
            </span>
            <div className="programType bg-[#2AC10033] w-14 h-[0.72rem] absolute left-0 top-[106%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#1F8B01] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#1F8B01] font-[700] text-[0.41rem] ">
                Ongoing
              </span>
            </div>
          </div>
          <div className="calls-time-details w-full h-[6.5rem] flex flex-col justify-center items-center absolute top-[58%]">
            <div className="Time w-full h-8 -mt-18 flex -ml-3 gap-7">
              <div className="w-[55%] h-8 border-transparent border-[0.05rem] border-r-[#D0D5DD] flex justify-center items-center gap-2">
                <img
                  src={images.calender}
                  className="w-[0.8rem] h-[0.8rem]"
                  alt="calender icon"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  Mon. Jul 30, 2024
                </span>
              </div>
              <div className="w-[35%] h-8 flex justify-center items-center -ml-4 gap-2">
                <img
                  src={images.time}
                  alt="time"
                  className="w-[0.8rem] h-[0.8rem]"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  9:00 - 11:00AM
                </span>
              </div>
            </div>
            <div className="w-full h-8 absolute top-[40%]">
              <div className="study-group w-[65%] h-8 flex items-center gap-2 pl-5">
                <img
                  src={images.study}
                  className="w-4 h-4"
                  alt="UIUX group logo icon"
                />
                <div className="flex flex-col">
                  <span className="font-[400] text-[0.4rem] text-[#A195C0]">
                    Study Group
                  </span>
                  <span className="font-[600] text-[0.51rem] text-[#595564]">
                    UX Strategy Study group
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-12 h-7 absolute top-1 right-14">
                <span className="font-[400] text-[0.40rem] text-[#A195C0]">
                  Mentor
                </span>
                <div className="mentors w-7 flex relative">
                  <img
                    src={images.redPic}
                    className="w-[.82rem] h-[.82rem] rounded-full"
                    alt="mentor image"
                  />
                  <img
                    src={images.asian}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-2 "
                    alt="mentor image"
                  />
                  <img
                    src={images.guy}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-4"
                    alt="mentor image"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-8 flex gap-2 absolute top-[80%] justify-around">
              <div className="viewDetails -ml-2 font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-24 h-8 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Participants
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D0] w-24 h-8 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Join Now
                <img src={images.arrow} alt="Proceed to UIUX group call icon" />
              </div>
            </div>
          </div>
        </article>

        {/* article 2 */}
        <article className="w-[42%] min-[500px]:max-[900px]:w-[87%] h-[19rem] bg-[#FFFFFF] rounded-[0.5rem] flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="demo-review image w-[90%] h-[30%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-[130%] font-[400] w-full text-[1.05rem] text-black left-1.5 absolute border-b-[0.05rem] border-b-[#E1E7EC]">
              Weekly Meeting - Product
              <br /> Demo Review with Testers
            </span>
            <div className="programType bg-[#E0DDFF] w-14 h-[0.72rem] absolute left-0 top-[106%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#1C0AE1] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#1C0AE1] font-[700] text-[0.41rem] ">
                Ongoing
              </span>
            </div>
          </div>
          <div className="calls-time-details w-full h-[6.5rem] flex flex-col justify-center items-center absolute top-[58%]">
            <div className="Time w-full h-8 -mt-18 flex -ml-3 gap-7">
              <div className="w-[55%] h-8 border-transparent border-[0.05rem] border-r-[#D0D5DD] flex justify-center items-center gap-2">
                <img
                  src={images.calender}
                  className="w-[0.8rem] h-[0.8rem]"
                  alt="calender icon"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  Mon. Jul 30, 2024
                </span>
              </div>
              <div className="w-[35%] h-8 flex justify-center items-center -ml-4 gap-2">
                <img
                  src={images.time}
                  alt="time"
                  className="w-[0.8rem] h-[0.8rem]"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  9:00 - 11:00AM
                </span>
              </div>
            </div>
            <div className="w-full h-8 absolute top-[40%]">
              <div className="study-group w-[65%] h-8 flex items-center gap-2 pl-5">
                <img
                  src={images.study}
                  className="w-4 h-4"
                  alt="UIUX group logo icon"
                />
                <div className="flex flex-col">
                  <span className="font-[400] text-[0.4rem] text-[#A195C0]">
                    Study Group
                  </span>
                  <span className="font-[600] text-[0.51rem] text-[#595564]">
                    UX Strategy Study group
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-12 h-7 absolute top-1 right-14">
                <span className="font-[400] text-[0.40rem] text-[#A195C0]">
                  Mentor
                </span>
                <div className="mentors w-7 flex relative">
                  <img
                    src={images.redPic}
                    className="w-[.82rem] h-[.82rem] rounded-full"
                    alt="mentor image"
                  />
                  <img
                    src={images.asian}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-2 "
                    alt="mentor image"
                  />
                  <img
                    src={images.guy}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-4"
                    alt="mentor image"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-8 flex gap-2 absolute top-[80%] justify-around">
              <div className="viewDetails -ml-2 font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-24 h-8 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Participants
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D04D] w-24 h-8 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Join Now
                <img src={images.arrow} alt="Proceed to UIUX group call icon" />
              </div>
            </div>
          </div>
        </article>

        {/* article 3 */}
        <article className="w-[42%] min-[500px]:max-[900px]:w-[87%] h-[19rem] bg-[#FFFFFF] rounded-[0.5rem] flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="MUUK image w-[90%] h-[30%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-[130%] font-[400] w-full text-[1.05rem] text-black left-1.5 absolute border-b-[0.05rem] border-b-[#E1E7EC]">
              Weekly Meeting - Product
              <br /> Demo Review with Testers
            </span>
            <div className="programType bg-[#2AC10033] w-14 h-[0.72rem] absolute left-0 top-[106%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#1F8B01] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#1F8B01] font-[700] text-[0.41rem] ">
                Ongoing
              </span>
            </div>
          </div>
          <div className="calls-time-details w-full h-[6.5rem] flex flex-col justify-center items-center absolute top-[58%]">
            <div className="Time w-full h-8 -mt-18 flex -ml-3 gap-7">
              <div className="w-[55%] h-8 border-transparent border-[0.05rem] border-r-[#D0D5DD] flex justify-center items-center gap-2">
                <img
                  src={images.calender}
                  className="w-[0.8rem] h-[0.8rem]"
                  alt="calender icon"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  Mon. Jul 30, 2024
                </span>
              </div>
              <div className="w-[35%] h-8 flex justify-center items-center -ml-4 gap-2">
                <img
                  src={images.time}
                  alt="time"
                  className="w-[0.8rem] h-[0.8rem]"
                />
                <span className="font-[500] text-[#595564] text-[0.72rem]">
                  9:00 - 11:00AM
                </span>
              </div>
            </div>
            <div className="w-full h-8 absolute top-[40%]">
              <div className="study-group w-[65%] h-8 flex items-center gap-2 pl-5">
                <img
                  src={images.study}
                  className="w-4 h-4"
                  alt="UIUX group logo icon"
                />
                <div className="flex flex-col">
                  <span className="font-[400] text-[0.4rem] text-[#A195C0]">
                    Study Group
                  </span>
                  <span className="font-[600] text-[0.51rem] text-[#595564]">
                    UX Strategy Study group
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-12 h-7 absolute top-1 right-14">
                <span className="font-[400] text-[0.40rem] text-[#A195C0]">
                  Mentor
                </span>
                <div className="mentors w-7 flex relative">
                  <img
                    src={images.redPic}
                    className="w-[.82rem] h-[.82rem] rounded-full"
                    alt="mentor image"
                  />
                  <img
                    src={images.asian}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-2 "
                    alt="mentor image"
                  />
                  <img
                    src={images.guy}
                    className="w-[.82rem] h-[.82rem] rounded-full absolute left-4"
                    alt="mentor image"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-8 flex gap-2 absolute top-[80%] justify-around">
              <div className="viewDetails -ml-2 font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-24 h-8 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Participants
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D0] w-24 h-8 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Join Now
                <img src={images.arrow} alt="Proceed to UIUX group call icon" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}
export default GroupCalls
