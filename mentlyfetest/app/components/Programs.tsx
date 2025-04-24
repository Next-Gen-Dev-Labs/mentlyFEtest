import React from 'react'

const Programs = () => {
  const images = {
    menu: '/Images/Programs/menu (2).svg',
    dots: '/Images/Programs/dots.svg',
    dropdown: '/Images/Programs/dropdown.svg',
    fundamentals: '/Images/Programs/Fundamentals.jpg',
    setting: '/Images/Programs/setting-2.svg',
    redPic: '/Images/Programs/redPic.png',
    asian: '/Images/Programs/chinese woman.png',
    guy: '/Images/Programs/guy.png',
    man: '/Images/Programs/manNotifications.png',
  }
  return (
    <section className="programs scroll bg-white w-[21.5rem] max-[900px]:w-screen max-[900px]:ml-0  h-[26rem] mt-10 ml-10 overflow-y-scroll">
      <div className="menuSection w-full h-12 flex items-center gap-36 p-2 cursor-default">
        <div className="flex items-center gap-2">
          <img
            src={images.menu}
            alt="menuIcon"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
          <span className="text-[#B0B0B0] text-[1rem] font-[700]">
            Programs
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
      <div className="w-[8rem] h-[2rem] ml-[50%] flex justify-around items-center">
        <span className="text-[#918C9C] text-[0.7rem] font-[500]">Filter</span>
        <div className="bg-transparent border-[0.05rem] border-[#E1E7EC] w-[4rem] h-5 text-[0.7rem] font-[500] text-[#595564] flex items-center justify-around">
          Active
          <img
            src={images.dropdown}
            aria-label="filter icon"
            alt="filterIcon"
          />
        </div>
      </div>
      {/* Beginning of program cards */}
      <div className="programCards scroll flex flex-col items-center mt-2 min-[500px]:max-[900px]:flex-row min[500px]:max-[900px]:justify-between min[500px]:max-[900px]:overflow-x-scroll">
        <article className="w-[87%] min-[500px]:max-[900px]:w-[87%] h-52 bg-[#FFFFFF] rounded-[0.5rem] mt-4 flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="UIUXCard image w-[90%] h-[44%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-1 font-[700] text-[1.02rem] text-white left-1.5 absolute">
              Fundamentals of User <br /> interface & Experience
            </span>
            <div className="programType bg-[#D4E0F3] w-14 h-[0.72rem] absolute left-1.5 top-[76%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#0077FF] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#0077FF] font-[700] text-[0.41rem] ">
                Bootcamp
              </span>
            </div>
            <img
              aria-label="configure program icon"
              src={images.setting}
              alt="configure program"
              className="absolute top-2 left-[90%] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer"
            />
          </div>
          <span className="brief-description-of-the-program font-[400] w-[90%] h-18 text-[.68rem] py-[.4rem] pl-[.1rem] pr-[0.71rem] text-black/80 text-ellipsis">
            This program is a hands-on guide designed for designers who want to
            master color theory and confidently apply it to their designs. This
            practical approach
          </span>
          <div className="card-bottom w-full h-8 flex items-center absolute top-[83%]">
            <div className="mentors w-7 flex -px-2 relative left-[5%]">
              <img
                src={images.redPic}
                className="w-3 h-3 rounded-full"
                alt="mentor image"
              />
              <img
                src={images.asian}
                className="w-3 h-3 rounded-full absolute left-2 "
                alt="mentor image"
              />
              <img
                src={images.guy}
                className="w-3 h-3 rounded-full absolute left-4"
                alt="mentor image"
              />
              <span className="font-[600] text-[0.52rem] text-[#6C6C6C] absolute left-9">
                Mentors
              </span>
            </div>
            <div className="w-[8.52rem] h-28 flex gap-2 absolute top-[18%] right-[5%]">
              <div className="viewDetails font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-20 h-5 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Details
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D0] w-20 h-5 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Analysis
              </div>
            </div>
          </div>
        </article>

        {/* Colour Hack Practical */}
        <article className="w-[87%] h-52 bg-[#FFFFFF] rounded-[0.5rem] mt-4 flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="color-hack-tutorial image w-[90%] h-[44%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-1 font-[700] text-[1.02rem] text-white left-1.5 absolute">
              Colour Hack Practical <br />
              Group Call
            </span>
            <div className="programType bg-[#D4F3D4] w-14 h-[0.72rem] absolute left-1.5 top-[76%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#008000] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#008000] font-[700] text-[0.41rem] ">
                Group Call
              </span>
            </div>
            <img
              aria-label="configure program icon"
              src={images.setting}
              alt="configure program"
              className="absolute top-2 left-[90%] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer"
            />
          </div>
          <span className="brief-description-of-the-program font-[400] w-[90%] h-18 text-[.68rem] py-[.4rem] pl-[.1rem] pr-[0.71rem] text-black/80 text-ellipsis">
            This program is a hands-on guide designed for designers who want to
            master color theory and confidently apply it to their designs. This
            practical approach
          </span>
          <div className="card-bottom w-full h-8 flex items-center absolute top-[83%]">
            <div className="mentors w-32 flex items-center -px-2 relative left-[5%]">
              <img
                src={images.man}
                alt="mentor"
                className="w-5 h-5 rounded-full"
              />
              <span className="font-[600] text-[0.45rem] text-[#6C6C6C] absolute left-6">
                Hosted By: Faith Okolo
              </span>
            </div>
            <div className="w-[8.52rem] h-28 flex gap-2 absolute top-[18%] right-[5%]">
              <div className="viewDetails font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-20 h-5 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Details
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D0] w-20 h-5 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Analysis
              </div>
            </div>
          </div>
        </article>

        {/* colour hack tutorial 2 */}
        <article className="w-[87%] h-52 bg-[#FFFFFF] rounded-[0.5rem] mt-4 flex flex-col items-center py-2 drop-shadow-md drop-shadow-[#9f9b9b] backdrop-blur-md cursor-default">
          <div className="color-hack-tutorial image w-[90%] h-[44%] rounded-md relative">
            <div className="w-full h-full bg-black/50 rounded-md"></div>
            <span className="top-1 font-[700] text-[1.02rem] text-white left-1.5 absolute">
              Colour Hack Practical <br />
              Group Call
            </span>
            <div className="programType bg-[#D4F3D4] w-14 h-[0.72rem] absolute left-1.5 top-[76%] flex gap-2 justify-center items-center rounded-lg">
              <div className="bg-[#008000] w-[.35rem] h-[.35rem] rounded-full"></div>
              <span className="text-[#008000] font-[700] text-[0.41rem] ">
                Group Call
              </span>
            </div>
            <img
              aria-label="configure program icon"
              src={images.setting}
              alt="configure program"
              className="absolute top-2 left-[90%] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer"
            />
          </div>
          <span className="brief-description-of-the-program font-[400] w-[90%] h-18 text-[.68rem] py-[.4rem] pl-[.1rem] pr-[0.71rem] text-black/80 text-ellipsis">
            This program is a hands-on guide designed for designers who want to
            master color theory and confidently apply it to their designs. This
            practical approach
          </span>
          <div className="card-bottom w-full h-8 flex items-center absolute top-[83%]">
            <div className="mentors w-32 flex items-center -px-2 relative left-[5%]">
              <img
                src={images.man}
                alt="mentor"
                className="w-5 h-5 rounded-full"
              />
              <span className="font-[600] text-[0.45rem] text-[#6C6C6C] absolute left-6">
                Hosted By: Self
              </span>
            </div>
            <div className="w-[8.52rem] h-28 flex gap-2 absolute top-[18%] right-[5%]">
              <div className="viewDetails font-[400] text-[0.5rem] bg-transparent border-[0.05rem] border-[#6F01D0] w-20 h-5 text-[#6F01D0] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                View Details
              </div>
              <div className="Analysis font-[400] text-[0.5rem] bg-[#6F01D0] w-20 h-5 text-[#FFFFFF] flex justify-center items-center rounded-[0.32rem] hover:scale-110 transition-transform duration-75 ease-in-out cursor-pointer">
                Analysis
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Programs
