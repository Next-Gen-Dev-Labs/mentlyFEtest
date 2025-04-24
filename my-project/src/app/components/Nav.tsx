import Image from "next/image";
import notifications from '../images/notification.png'
import Group from '../images/Group.png'
import arrow from '../images/arrow.png'
const Nav = () => {
  return (
    <div className="lg:w-[1200px] lg:h-[82px] lg:bg-[#FDFDFD]  lg:flex lg:items-center lg:justify-end">
      <div className="lg:w-[230.4px] lg:h-[44px] lg:bg-transparent  lg:flex lg:justify-between lg:items-center lg:mr-8">
         <div className="lg:w-[24px] lg:h-[24px] lg:flex lg:justify-center lg:items-center">
        <Image src={notifications} alt="notify" className="lg:w-[24px] lg:h-[24px]" />
        </div>
     <div className="lg:w-[193.5px] lg:h-[44px]  lg:bg-transparent lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[44.4px] lg:h-[44px] lg:rounded-full lg:bg-[#8B72FC] lg:flex lg:items-center lg:justify-center">
     <Image src={Group} alt="group" />
      </div>
     <div className="lg:w-[106px] lg:h-[35px]  lg:bg-transparentlg:flex lg:flex-col lg:justify-between">
     <div className="lg:w-[106px] lg:h-[17px]  lg:bg-transparent lg:flex lg:items-center lg:justify-center">
     <h3 className="lg:font-light lg:text-[14px] lg:leading-[100%] lg:text-[#404040] ">Techrity  Foun...</h3>
      </div>

      <div className="lg:w-[48px] lg:h-[14px] l  lg:bg-transparent lg:flex lg:items-center lg:justify-end">
      <h3 className="lg:font-light lg:text-[12px] lg:leading-[100%] lg:text-[#53547B] ">Member</h3>
      </div>
      </div>
      <div className="lg:w-[19px] lg:h-[18px] lg:rounded-sm   lg:bg-transparent lg:flex lg:items-center lg:justify-center">
        <Image  src={arrow} alt="arrow" className="lg:w-[19px] lg:h-[18px] lg:rounded-sm" />
     
        
      

      </div>
      </div>

        </div>

      </div>
     
  )
}

export default Nav