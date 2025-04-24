const Mentors = () => {
  const images = {
    menu: '/Images/Programs/menu (2).svg',
    dots: '/Images/Programs/dots.svg',
    dropdown: '/Images/Programs/dropdown.svg',
    plus: '/Images/Group calls icon/plus.svg',
    mentor: '/Images/Group calls icon/student.jpg',
    guy: '/Images/Programs/guy.png',
  }

  return (
    <section className="applications cursor-default scroll bg-white w-[21rem] h-[19rem] mt-10 ml-10 overflow-y-scroll min-[640px]:max-[900px]:w-[70%] min-[640px]:max-[900px]:flex-col min-[640px]:max-[900px]:items-center min-[640px]:max-[900px]:justify-center min-[640px]:max-[900px]:ml-0 max-[500px]:ml-0 rounded-xl relative">
      <div className="menuSection w-full h-12 flex items-center justify-around gap-40 p-2 cursor-default mb-4">
        <div className="flex items-center gap-2">
          <img
            src={images.menu}
            alt="menuIcon"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
          <span className="text-[#B0B0B0] text-[1rem] font-[700]">Mentors</span>
        </div>
        <div className="flex w-[4rem] gap-2 items-center -mr-4">
          <img
            src={images.plus}
            alt="add mentor"
            className="w-[1.3rem] h-[1.3rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
          <img
            src={images.dots}
            alt="more"
            className="w-[1rem] h-[1rem] hover:scale-105 transition-transform duration-75 ease-in-out"
          />
        </div>
      </div>

      <section className="mentors w-full h-[4rem] bg-white flex flex-col items-center border-transparent border-b-[.05rem] gap-10 border-b-[#E1E7EC] ">
        <div className="w-[94%] h-[76%] flex flex-col gap-4 pt-4">
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
                  Product Designer
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-24 h-6 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-2xl hover:scale-110 transition-transform duration-75 ease-in-out">
                Message
              </div>
            </div>
          </div>
        </div>

        <div className="w-[94%] h-[76%] flex flex-col gap-4 border-transparent border-b-[.05rem] border-b-[#E1E7EC]">
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
                src={images.mentor}
                className="w-7 h-7 rounded-full mt-2 ml-2"
                alt="image of a mentor"
              />
              <div className="w-fit h-fit flex flex-col gap-1 -mr-2">
                <span className="font-[700] text-[0.9rem] text-[#7D8DA6]">
                  Maxwell Smith
                </span>
                <span className="font-[400] text-[0.63rem] text-[#7D8DA6]">
                  Product Designer
                </span>
              </div>
            </div>
            <div className="w-[10rem] h-8 flex justify-around items-center">
              <div className="w-24 h-6 bg-[#6F01D0]  font-[500] text-[0.61rem] text-[#FFFFFF] flex justify-center items-center rounded-2xl hover:scale-110 transition-transform duration-75 ease-in-out">
                Message
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[60%] h-[2rem] bg-[#DDD6FB] text-[#6F01D0] rounded-2xl flex justify-center items-center font-[600] text-[0.87rem] absolute top-[80%] right-[22.5%] hover:scale-110 transition-transform duration-75 ease-in-out">
        See All
      </div>
    </section>
  )
}
export default Mentors
