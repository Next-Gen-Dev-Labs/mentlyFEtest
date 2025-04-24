import React from 'react'

const Applications = () => {
  const images = {
    menu: '/Images/Programs/menu (2).svg',
    dots: '/Images/Programs/dots.svg',
    dropdown: '/Images/Programs/dropdown.svg',
    guy: '/Images/Programs/guy.png',
    man: '/Images/Programs/manNotifications.png',
    flag: '/Images/Group calls icon/vector.svg',
    student: '/Images/Group calls icon/student.jpg',
  }

  return (
    <section className="applications scroll bg-white w-[23.5rem] h-[26rem] mt-10 ml-10 overflow-y-scroll min-[640px]:max-[900px]:w-[70%] min-[640px]:max-[900px]:flex-col min-[640px]:max-[900px]:items-center min-[640px]:max-[900px]:justify-center min-[640px]:max-[900px]:ml-0 max-[500px]:ml-0">
      <div className="menuSection w-full h-12 flex justify-around items-center gap-36 p-2 cursor-default">
        <div className="flex items-center gap-2">
          <img
            src={images.menu}
            alt="menuIcon"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
          <span className="text-[#B0B0B0] text-[1rem] font-[700]">
            Applictions
          </span>
        </div>
        <div className="flex w-[4rem] gap-2">
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

      {/* Mentors */}
      <section className="mentors w-full h-44 bg-white flex justify-center items-center border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
        <div className="w-[94%] h-[76%] flex flex-col gap-4">
          <span className=" font-[400] text-[0.62rem] text-[#7D8DA6] ml-7">
            Mentors
          </span>
          <div className="w-full h-full flex justify-between ">
            <input
              type="checkbox"
              name="mentor"
              id="mentor"
              autoFocus
              className="w-4 h-4 rounded-sm mt-4"
            />
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.guy}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-18 h-7 bg-[#D09696] font-[500] text-[0.61rem] text-[#D83535] border-[0.04rem] flex justify-center items-center border-[#D09696] rounded-md hover:scale-110 transition-transform duration-75 ease-in-out">
                Reject
              </div>
              <div className="w-18 h-7 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-sm hover:scale-110 transition-transform duration-75 ease-in-out">
                Accept
              </div>
            </div>
          </div>
          <div className="w-full h-10 flex gap-2 justify-center -mt-22 ml-2">
            <div className="font-[500] text-[0.54rem] text-[#9985A7] bg-[#DDCEEE] border-[0.05rem] border-[#DDCEEE] rounded-md w-20 h-5 flex justify-center items-center hover:scale-110 transition-transform duration-75 ease-in-out">
              Product Designer
            </div>
            <div className="font-[500] text-[0.54rem] text-[#58948E] bg-[#A1BDBA] border-[0.05rem] border-[#A1BDBA] rounded-md w-20 h-5 flex justify-center items-center hover:scale-110 transition-transform duration-75 ease-in-out">
              4years Experience
            </div>
            <div className="font-[500] text-[0.54rem] text-[#8196B5] bg-[#E3ECF9] border-[0.05rem] border-[#ABBEE0] rounded-md w-20 h-5 flex justify-center items-center hover:scale-110 transition-transform duration-75 ease-in-out">
              <img src={images.flag} alt="" />
              Lagos,Nigeria
            </div>
            <div className="font-[500] text-[0.54rem] text-[#595564] bg-[#F4F4F4] border-[0.05rem] border-[#C8C8C8] rounded-md w-16 h-5 flex justify-center items-center hover:scale-110 transition-transform duration-75 ease-in-out">
              GMT +1
            </div>
          </div>
        </div>
      </section>

      {/* Student */}
      <section className="mentors w-full h-[28rem] flex flex-col items-center py-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC] overflow-y-scroll scroll">
        <div className="w-[94%] h-[20%] flex flex-col gap-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <span className=" font-[400] text-[0.62rem] text-[#7D8DA6] ml-7">
            Students
          </span>
          <div className="w-full h-full flex justify-between">
            <input
              type="checkbox"
              name="mentor"
              id="mentor"
              autoFocus
              className="w-4 h-4 rounded-sm mt-4"
            />
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.student}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-18 h-7 bg-[#D09696] font-[500] text-[0.61rem] text-[#D83535] border-[0.04rem] flex justify-center items-center border-[#D09696] rounded-md hover:scale-110 transition-transform duration-75 ease-in-out">
                Reject
              </div>
              <div className="w-18 h-7 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-sm hover:scale-110 transition-transform duration-75 ease-in-out">
                Accept
              </div>
            </div>
          </div>
        </div>

        {/* Second student */}
        <div className="w-[94%] h-[20%] flex flex-col gap-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between pt-6">
            <input
              type="checkbox"
              name="mentor"
              id="mentor"
              autoFocus
              className="w-4 h-4 rounded-sm mt-4"
            />
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.guy}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-18 h-7 bg-[#D09696] font-[500] text-[0.61rem] text-[#D83535] border-[0.04rem] flex justify-center items-center border-[#D09696] rounded-md hover:scale-110 transition-transform duration-75 ease-in-out">
                Reject
              </div>
              <div className="w-18 h-7 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-sm hover:scale-110 transition-transform duration-75 ease-in-out">
                Accept
              </div>
            </div>
          </div>
        </div>

        {/* third student */}
        <div className="w-[94%] h-[20%] flex flex-col gap-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between pt-6">
            <input
              type="checkbox"
              name="mentor"
              id="mentor"
              autoFocus
              className="w-4 h-4 rounded-sm mt-4"
            />
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.student}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-18 h-7 bg-[#D09696] font-[500] text-[0.61rem] text-[#D83535] border-[0.04rem] flex justify-center items-center border-[#D09696] rounded-md hover:scale-110 transition-transform duration-75 ease-in-out">
                Reject
              </div>
              <div className="w-18 h-7 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-sm hover:scale-110 transition-transform duration-75 ease-in-out">
                Accept
              </div>
            </div>
          </div>
        </div>

        {/* fourth student */}
        <div className="w-[94%] h-[20%] flex flex-col gap-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
          <div className="w-full h-full flex justify-between pt-6">
            <input
              type="checkbox"
              name="mentor"
              id="mentor"
              autoFocus
              className="w-4 h-4 rounded-sm mt-4"
            />
            <div className="w-[10rem] h-[4rem] flex gap-3">
              <img
                src={images.guy}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-18 h-7 bg-[#D09696] font-[500] text-[0.61rem] text-[#D83535] border-[0.04rem] flex justify-center items-center border-[#D09696] rounded-md hover:scale-110 transition-transform duration-75 ease-in-out">
                Reject
              </div>
              <div className="w-18 h-7 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-sm hover:scale-110 transition-transform duration-75 ease-in-out">
                Accept
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default Applications
