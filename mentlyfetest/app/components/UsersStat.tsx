const UsersStat = () => {
  const images = {
    dropdown: '/Images/Programs/dropdown.svg',
    donut: '/Images/Programs/donut.svg',
  }
  return (
    <section className="programs scroll bg-white w-[21.5rem] max-[900px]:w-screen max-[900px]:ml-0  h-[26rem] mt-10 ml-10 overflow-y-auto rounded-md border-[.05rem] border-[#E1E7EC]">
      <div className="w-full h-[15%] flex items-center justify-around  border-b-[.05rem] border-b-[#E1E7EC] cursor-default">
        <span className="text-[1.12rem] font-[600] text-[#595564]">Users</span>
        <div className="bg-transparent border-[0.05rem] border-[#E1E7EC] w-[5rem] h-7 text-[0.87rem]  text-[#595564] flex items-center justify-around cursor-pointer">
          All
          <img
            src={images.dropdown}
            aria-label="filter icon"
            alt="filterIcon"
          />
        </div>
      </div>
      <div className="charts w-full h-[80%] flex items-center gap-1 px-2 min-[500px]:max-[900px]:flex-col  min-[500px]:max-[900px]:justify-center">
        <div className="relative">
          <img src={images.donut} alt="piechart of users" />
          <div className="w-9 h-9 flex flex-col absolute top-[36%] left-[38%]">
            <span className="font-[700] text-[1.5rem] text-[#222529]">240</span>
            <span className="text-[0.75rem] font-[400] text-[#595564]">
              Users
            </span>
          </div>
        </div>
        <div></div>
        <div className=" w-[40%] h-[40%] flex flex-col">
          <div className="students w-full h-8 flex">
            <div className="w-[70%] flex gap-2 px-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#62B2FD]"></div>
              <span className="font-[400] text-[0.62rem] text-[#595564]">
                Students
              </span>
            </div>
            <span className="w-[20%] font-[700] text-[0.75rem] flex justify-center items-center text-[#595564]">
              200
            </span>
          </div>
          {/* mentors */}
          <div className="mentors w-full h-8 flex">
            <div className="w-[70%] flex gap-2 px-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#9BDFC4]"></div>
              <span className="font-[400] text-[0.62rem] text-[#595564]">
                Mentors
              </span>
            </div>
            <span className="w-[20%] font-[700] text-[0.75rem] flex justify-center items-center text-[#595564]">
              8
            </span>
          </div>

          {/* Programs */}
          <div className="programs w-full h-8 flex">
            <div className="w-[70%] flex gap-2 px-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#F99BAB]"></div>
              <span className="font-[400] text-[0.62rem] text-[#595564]">
                Programs
              </span>
            </div>
            <span className="w-[20%] font-[700] text-[0.75rem] flex justify-center items-center text-[#595564]">
              22
            </span>
          </div>

          {/* others */}
          <div className="programs w-full h-8 flex">
            <div className="w-[70%] flex gap-2 px-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#FFB44F]"></div>
              <span className="font-[400] text-[0.62rem] text-[#595564]">
                Others
              </span>
            </div>
            <span className="w-[20%] font-[700] text-[0.75rem] flex justify-center items-center text-[#595564]">
              10
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UsersStat
