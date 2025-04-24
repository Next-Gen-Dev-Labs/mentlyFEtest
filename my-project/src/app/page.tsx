import Image from "next/image";
import Nav from '../app/components/Nav'
import Manage from "./components/Manage";
import Vector from '../app/images/Vector.png'
import dots from '../app/images/dots.png'
import groups from "@/data/groupData";
import students from "@/data/studentData"
import mentors from "@/data/mentorData";
import recents from "@/data/recentData";
// import programs from "@/data/programData";
import man from '../app/images/man.png'
import Nigeria from '../app/images/Nigeria.png'
import plus from '../app/images/plus.png'
import angle from '../app/images/angle.png'
import body from '../app/images/body.png'
import dounut from '../app/images/donut.png'
// import man from '../app/images/man.png'

export default function Home() {
  console.log(groups)
  return (
    <section className="lg:w-[1200px] lg:h-[1168px] lg:bg-[#F1F5F9] lg:flex lg:flex-col  lg:items-center">
      {/* <div className="lg:w-[1200px] lg:h-[82px] lg:bg-[#FDFDFD]  lg:flex lg:items-center lg:justify-end">
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

      </div> */}
      <Nav />
      <Manage />
      <div className="lg:w-[1100px] lg:h-[51px] lg:rounded lg:bg-[#6F01D0] lg:flex 
      lg:items-center lg:justify-between lg:pr-6 lg:pl-6">
        <div className="lg:w-[380px] lg:h-[37px] lg:flex 
      lg:items-center lg:justify-center">
          <h3 className="lg:font-light lg:text-[26.21px] lg:leading-[140%] lg:text-[#FFFFFF] lg:flex 
      lg:items-center lg:justify-center">Welcome Aboard, Blessing 👋</h3>
        </div>
        <div className="lg:w-[430px] lg:h-[37px] lg:bg-transparent lg:flex 
      lg:items-center lg:justify-center">
          <h3 className="lg:font-medium lg:text-[20px] lg:leading-[140%] lg:text-[#BDBDBD] lg:flex 
      lg:items-center lg:justify-center">We’re thrilled to have you join Techrity Team!</h3>

        </div>

        <div className="lg:w-[160px] lg:h-[39px] lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-center lg:rounded-lg lg:pt-[10px] lg:pr-[24px] lg:pb-[10px] lg:pl-[24px]">
          <div className="lg:w-[112px] lg:h-[19px] lg:bg-transparent lg:flex lg:items-center lg:justify-center">
            <h3 className="lg:font-semibold lg:text-[16px] lg:leading-[100%] lg:text-[#1F0954] lg:flex lg:items-center lg:justify-center">Update Profile
            </h3>
          </div>
        </div>

      </div>

      <div className=" lg:w-[1100px] lg:h-[1168px] lg:mt-1 lg:bg-[#F1F5F9] lg:flex lg:justify-between">
        <div className="lg:w-[329px] lg:h-[935px] lg:rounded lg:bg-transparent lg:flex lg:flex-col lg:justify-between" >
          <div className="lg:w-[329px] lg:h-[604px] lg:rounded lg:bg-transparent">
          <div className="lg:w-[329px] lg:h-[40px] lg:pr-[10px] lg:pl-[10px]  lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-[10px] lg:h-[9px]">
              <Image src={Vector} alt="menu" className="lg:text-[#000000]" />
              </div>
        
              <div  className="lg:w-[165px] lg:h-[15.62px]  lg:bg-transparent lg:flex lg:items-center">
                  <h3 className="lg:font-semibold lg:text-[16px] lg:align-middle lg:text-[#B0B0B0]">Programs</h3>
                </div>
              
              
              <div className="lg:w-[80px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-[45px] lg:h-[17px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <h3 className="lg:font-medium lg:text-[14px] lg:leading-[100%] lg:text-[#6F01D0]">See all</h3>
             
            </div>

            <div className="lg:w-[18px] lg:h-[18px] lg:bg-transparent">
            <Image src={dots} alt="menu" className="lg:text-[#000000]"/>
           

            </div>
              </div>
          

             </div>

             <div className="lg:w-[329px] lg:h-[23px] lg:mt-1  lg:bg-transparent lg:flex lg:justify-end">
             <div className="lg:w-[98px] lg:h-[23px] lg:mr-6 lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-[29px] lg:h-[13px] lg:bg-blue-100 lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:font-normal lg:text-[11.26px] lg:leading-[12.87px] lg:text-[#918C9C]">Filter</h3>
              </div>

              <div className="lg:w-[55px] lg:h-[13px] lg:bg-transparent lg:pr-[2px] lg:pl-[2px] lg:rounded-sm lg:border-[0.8px] lg:border-[#E1E7EC]">
              <div className="lg:w-[34px] lg:h-[13px] lg:bg-transparent lg:flex lg:items-center">
               <h3 className="lg:font-normal lg:text-[11.26px] lg:leading-[12.87px] lg:text-[#595564]">Active</h3>
               <Image src={angle} alt="angle" className="lg:w-[8px] lg:h-[9.2px] lg:ml-2 lg:text-[#595564]" />
               

                </div>
              </div>

            </div>
             </div>
  <div className="lg:w-[291px] lg:h-[528.3px] lg:flex lg:flex-col lg:mt-1 lg:items-center lg:mx-auto lg:bg-transparent">
    {/* {
      programs.map((program) => {
        return(
          <div
          key={program.id}
          className="lg:w-[291.2px] lg:h-[171px] lg:rounded-lg lg:p-[13.14px] lg:bg-blue-300 lg:mb-2">
          <div className="relative lg:w-[265px] lg:h-[69.8px] lg:rounded-lg lg:p-[13.14px] lg:bg-yellow-300">
          
                        <Image
                          src={program.picture}
                          alt="pic"
                          fill
                          className="object-cover rounded-lg"
                        />
                     
        </div>
        <div className="absolute lg:top-[260px] lg:w-[265px] lg:h-[36px] lg:mt-1 lg:bg-green-800">
       <h3> hhh</h3>
       </div>
     
        <div className="lg:w-[265px] lg:h-[36px] lg:mt-1 lg:bg-yellow-800">
       <h3></h3>
     
        </div>
     
        <div className="lg:w-[265px] lg:h-[25.4px] lg:mt-1 lg:bg-green-200 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-[75px] lg:h-[13.9px] lg:mt-1 lg:bg-indigo-200">
      men
     </div>
     
     <div className="lg:w-[150.31px] lg:h-[25.4px] lg:mt-1 lg:bg-indigo-200 lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[78.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
     lg:border-[0.66px] lg:border-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[100px] lg:h-[10px] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#6F01D0]">View Details</h3>
     
     
     </div>
     </div>
     
     <div className="lg:w-[65.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
      lg:bg-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     h
     </div>
     </div>
     
        </div>
     
         </div>
        )
      })
    }
     */}
      <div
         
          className="lg:w-[291.2px] lg:h-[171px] lg:rounded-lg lg:p-[13.14px] lg:bg-[#FFFFFF] lg:mb-2">
          <div className="lg:w-[265px] lg:h-[69.8px] lg:rounded- lg:bg-transparent">
            <Image  src={body} alt="body"/>
        </div>
        <div className="absolute lg:top-[260px] lg:w-[265px] lg:h-[50px] lg:pl-[6px] lg:pr-[6px] lg:pt-[2px] lg:pb-[2px] lg:mt-1 lg:bg-transparent">
            <h3 className="lg:font-semibold lg:text-[16.42px] lg:leading-[100%] lg:text-[#FFFFFF]">Fundamentals of User interface & Experience </h3>
       <div className="lg:w-[47px] lg:h-[8px] lg:rounded-xl lg:flex  lg:mt-[5px]  lg:bg-[#D4E0F3] lg:items-center lg:justify-center">
       <h3 className="lg:font-semibold lg:text-[6.57px] lg:leading-[100%] lg:align-middle lg:text-[#0077FF]">Bootcamp</h3>
       </div>


       </div>
     
        <div className="lg:w-[265px] lg:h-[43px] lg:mt-1 lg:bg-transparent">
       <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#A3A3A3] lg:align-middle">This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</h3>
     
        </div>
     
        <div className="lg:w-[265px] lg:h-[25.4px] lg:mt-1 lg:bg-transparent lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-[75px] lg:h-[13.9px] lg:mt-1 lg:bg-indigo-200 lg:flex lg:items-center lg:justify-around">
          <Image src={man} alt="group"  className="lg:w-[20px] lg:h-[15px]"/>
      <h3 className="lg:font-semibold lg:text-[8.34px] lg:leading-[9.73px] lg:text-[#6C6C6C]" >
        Mentor
      </h3>
     
     

     </div>
     
     <div className="lg:w-[150.31px] lg:h-[25.4px] lg:mt-1 lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[78.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
     lg:border-[0.66px] lg:border-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[100px] lg:h-[10px] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#6F01D0]">View Details</h3>
     
     
     </div>
     </div>
     
     <div className="lg:w-[65.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
      lg:bg-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#FFFFFF]">Analysis</h3>
     </div>
     </div>
     
        </div>
     
         </div>

         <div
         
          className="lg:w-[291.2px] lg:h-[171px] lg:rounded-lg lg:p-[13.14px] lg:bg-[#FFFFFF] lg:mb-2">
          <div className="lg:w-[265px] lg:h-[69.8px] lg:rounded- lg:bg-transparent">
            <Image  src={body} alt="body"/>
        </div>
        <div className="absolute lg:top-[440px] lg:w-[265px] lg:h-[50px] lg:pl-[6px] lg:pr-[6px] lg:pt-[2px] lg:pb-[2px] lg:mt-1 lg:bg-transparent">
            <h3 className="lg:font-semibold lg:text-[16.42px] lg:leading-[100%] lg:text-[#FFFFFF]">Fundamentals of User interface & Experience </h3>
       <div className="lg:w-[47px] lg:h-[8px] lg:rounded-xl lg:flex  lg:mt-[5px]  lg:bg-[#D4E0F3] lg:items-center lg:justify-center">
       <h3 className="lg:font-semibold lg:text-[6.57px] lg:leading-[100%] lg:align-middle lg:text-[#0077FF]">Bootcamp</h3>
       </div>


       </div>
     
        <div className="lg:w-[265px] lg:h-[43px] lg:mt-1 lg:bg-transparent">
       <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#A3A3A3] lg:align-middle">This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</h3>
     
        </div>
     
        <div className="lg:w-[265px] lg:h-[25.4px] lg:mt-1 lg:bg-transparent lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-[75px] lg:h-[13.9px] lg:mt-1 lg:bg-indigo-200 lg:flex lg:items-center lg:justify-around">
          <Image src={man} alt="group"  className="lg:w-[20px] lg:h-[15px]"/>
      <h3 className="lg:font-semibold lg:text-[8.34px] lg:leading-[9.73px] lg:text-[#6C6C6C]" >
        Mentor
      </h3>
     
     

     </div>
     
     <div className="lg:w-[150.31px] lg:h-[25.4px] lg:mt-1 lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[78.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
     lg:border-[0.66px] lg:border-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[100px] lg:h-[10px] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#6F01D0]">View Details</h3>
     
     
     </div>
     </div>
     
     <div className="lg:w-[65.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
      lg:bg-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#FFFFFF]">Analysis</h3>
     </div>
     </div>
     
        </div>
     
         </div>
         
         <div
         
          className="lg:w-[291.2px] lg:h-[171px] lg:rounded-lg lg:p-[13.14px] lg:bg-[#FFFFFF] lg:mb-2">
          <div className="lg:w-[265px] lg:h-[69.8px] lg:rounded- lg:bg-transparent">
            <Image  src={body} alt="body"/>
        </div>
        <div className="absolute lg:top-[620px] lg:w-[265px] lg:h-[50px] lg:pl-[6px] lg:pr-[6px] lg:pt-[2px] lg:pb-[2px] lg:mt-1 lg:bg-transparent">
            <h3 className="lg:font-semibold lg:text-[16.42px] lg:leading-[100%] lg:text-[#FFFFFF]">Fundamentals of User interface & Experience </h3>
       <div className="lg:w-[47px] lg:h-[8px] lg:rounded-xl lg:flex  lg:mt-[5px]  lg:bg-[#D4E0F3] lg:items-center lg:justify-center">
       <h3 className="lg:font-semibold lg:text-[6.57px] lg:leading-[100%] lg:align-middle lg:text-[#0077FF]">Bootcamp</h3>
       </div>


       </div>
     
        <div className="lg:w-[265px] lg:h-[43px] lg:mt-1 lg:bg-transparent">
       <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#A3A3A3] lg:align-middle">This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</h3>
     
        </div>
     
        <div className="lg:w-[265px] lg:h-[25.4px] lg:mt-1 lg:bg-transparent lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-[75px] lg:h-[13.9px] lg:mt-1 lg:bg-indigo-200 lg:flex lg:items-center lg:justify-around">
          <Image src={man} alt="group"  className="lg:w-[20px] lg:h-[15px]"/>
      <h3 className="lg:font-semibold lg:text-[8.34px] lg:leading-[9.73px] lg:text-[#6C6C6C]" >
        Mentor
      </h3>
     
     

     </div>
     
     <div className="lg:w-[150.31px] lg:h-[25.4px] lg:mt-1 lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[78.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
     lg:border-[0.66px] lg:border-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <div className="lg:w-[100px] lg:h-[10px] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#6F01D0]">View Details</h3>
     
     
     </div>
     </div>
     
     <div className="lg:w-[65.69px] lg:h-[22.17px] lg:rounded-md lg:pt-[5.26px] lg:pr-[15.77px] lg:pb-[5.26px] lg:pl-[15.77px]
      lg:bg-[#6F01D0] lg:flex lg:items-center lg:justify-between">
     <h3 className="lg:font-light lg:text-[8px] lg:leading-[100%] lg:text-center lg:text-[#FFFFFF]">Analysis</h3>
     </div>
     </div>
     
        </div>
     
         </div>

     
           
             </div>

             <div>
              
             </div>


          </div>

          <div className="lg:w-[329px] lg:h-[320px] lg:min-w-[328px] lg:rounded lg:bg-[#F3ECF9]">
            <div className="lg:w-[324px] lg:h-[60px] lg:pt-[12px] lg:pr-[24px] lg:pb-[12px] lg:pl-[12px] lg:border-b-[1px]
          lg:border-[#E1E7EC] lg:bg-[#F3ECF9] lg:flex lg:items-center lg:justify-between"> 
         <div className="lg:w-[52px] lg:h-[22px] lg:bg-transparent">
          <h3 className="lg:font-medium lg:text-[18px] lg:leading-[22px] lg:align-middle lg:text-[#595564]">Users</h3>
          </div>

          <div className="lg:w-[52px] lg:h-[22px] lg:bg-transparent lg:flex lg:items-center lg:justify-between"> 
          <h3 className="lg:font-medium lg:text-[18px] lg:leading-[22px] lg:align-middle lg:text-[#595564]">All</h3>
          <Image  src={angle} alt="angle"/>
          </div>
           </div>

           <div className="lg:w-[300px] lg:h-[180px] lg:bg-transpaent lg:flex lg:items-center
            lg:justify-between lg:mx-auto lg:mt-10"> 
            <div className="lg:w-[180px] lg:h-[180px] lg:bg-transpaent">
           <Image src={dounut} alt="dounut" />

            </div>
            <div className="lg:w-[111px] lg:h-[92px] lg:bg-transpaent lg:flex lg:flex-col lg:items-center lg:justify-between">
            <div className="lg:w-[111px] lg:h-[14px] lg:bg-transpaent lg:flex lg:items-center lg:justify-between">
          <h3 className="lg:font-light lg:text-[10px] lg:leading-[12px] ">
          Students
          </h3>

          <h3 className="lg:font-semibold lg:text-[12px] lg:leading-[14px] ">
          200
          </h3>

              </div>

              <div className="lg:w-[111px] lg:h-[14px] lg:bg-transpaent lg:flex lg:items-center lg:justify-between">
          <h3 className="lg:font-light lg:text-[10px] lg:leading-[12px] ">
          Mentors
          </h3>

          <h3 className="lg:font-semibold lg:text-[12px] lg:leading-[14px] ">
          8
          </h3>

              </div>

              <div className="lg:w-[111px] lg:h-[14px] lg:bg-transpaent lg:flex lg:items-center lg:justify-between">
          <h3 className="lg:font-light lg:text-[10px] lg:leading-[12px] ">
          Programs
          </h3>

          <h3 className="lg:font-semibold lg:text-[12px] lg:leading-[14px] ">
          22
          </h3>

              </div>

              <div className="lg:w-[111px] lg:h-[14px] lg:bg-transpaent lg:flex lg:items-center lg:justify-between">
          <h3 className="lg:font-light lg:text-[10px] lg:leading-[12px] ">
          Others
          </h3>

          <h3 className="lg:font-semibold lg:text-[12px] lg:leading-[14px] ">
          10
          </h3>

              </div>
         

          </div>

           </div>
          



          </div>

        </div>

        <div className="lg:w-[762px] lg:h-[935px] lg:rounded-xl  lg:pb-[6.14px] lg:bg-transparent lg:flex lg:flex-col lg:items-center lg:justify-between">
          <div className="lg:w-[762px] lg:h-[320px] lg:rounded-lg lg:pb-[6.14px] lg:bg-[#FFFFFF] lg:flex lg:flex-col lg:items-center lg:justify-between">
            <div className="lg:w-[762px] lg:h-[40.3px] lg:pr-[25px] lg:pl-[25px] lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between">
              <Image src={Vector} alt="" className="lg:w-[10px] lg:h-[9px]" />
              <div className="lg:w-[570px] lg:h-[14px] lg:bg-[#FFFFFF]">
                <h3 className="lg:font-semibold lg:text-[16px] lg:leading-[14.03px] lg:align-middle lg:text-[#B0B0B0]">Group Calls</h3>
              </div>

              <div className="lg:w-[100px] lg:h-[15px]  lg:bg-transparent lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-[39px] lg:h-[15px]  lg:bg-transparent ">
                  <h3 className="lg:font-medium lg:text-[12.27px] lg:leading-[100%] lg:text-[#6F01D0] ">See all</h3>
                </div>
                <div className="lg:w-[18px] lg:h-[18px]  lg:bg-transparent ">
                  <Image src={dots} alt="dots" />
                </div>
              </div>
            </div>
            <div className="lg:w-[762px] lg:h-[264.7px] lg:pr-[38px] lg:pl-[38px] lg:bg-transparent lg:flex lg:items-center lg:justify-around">
              {
                groups.map((group) => {
                  return (
                    <div
                      key={group.id}
                      className="lg:w-[269.9px] lg:h-[264.2px] lg:rounded-lg lg:mt-1 lg:p-[12.93px] lg:bg-[#F9F7FF]">

                      {/* <div className="lg:w-[244.07px] lg:h-[68.69px] lg:rounded-lg lg:p-[12.93px] lg:bg-red-100">
       <Image src={group.picture}  alt="laugh" width={224.07} height={68.69}/>
          </div> */}
                      <div className="relative lg:w-[244px] lg:h-[68.69px] lg:rounded-lg lg:bg-red-100">
                        <Image
                          src={group.picture}
                          alt="laugh"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-[240.8px] lg:h-[16.9px] lg:bg-transparent lg:mt-1">
                        <div className="lg:w-[69.2px] lg:h-[16.9px] lg:rounded-lg 
 lg:bg-gray-500 lg:flex lg:items-center lg:justify-evenly">
                          <div className=" lg:relative lg:w-[6.24px] lg:h-[6.24px] ">
                            <Image src={group.dot} alt="laugh"
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="lg:font-light lg:text-[9.99px] lg:leading-[100%] lg:align-middle">{group.status}</h4>
                        </div>
                      </div>
                      <div className="lg:w-[240.07px] lg:h-[40.1px] lg:bg-transparent lg:mt-1 lg:flex lg:items-center lg:justify-center
          lg:text-[#595564]">
                        <h3 className="lg:font-light lg:text-[16.81px] lg:leading-[100%]">Weekly Meeting - Product Demo Review with Testers</h3>
                      </div>
                      <div className="lg:w-[245.6px] lg:h-[0.88px] lg:bg-[#D0D5DD] lg:mt-1">
                      </div>

                      <div className="lg:w-[244.07px] lg:h-[45.17px] lg:mt-1 lg:bg-transparent  lg:flex lg:flex-col lg:items-center lg:justify-between">
                        <div className="lg:w-[244.07px] lg:h-[12.12px] lg:bg-transparent  lg:flex lg:items-center lg:justify-between">
                          {/* <div className="lg:w-[105.87px] lg:h-[12.12px] lg:pr-[7.27px] lg:pl-[4.85px]  lg:bg-green-300">
          <div className="relative lg:w-[11.16px] lg:h-[11.16px] lg:rounded-lg">
          <Image src={group.time}
    alt="laugh"
    fill
    className="object-cover rounded-lg"
  />
        <h3 className="lg:font-normal lg:text-[8.08px] lg:leading-[16.97px] ">{group.createdAt}</h3>
   
  </div>
  
            </div> */}
                          <div className="lg:w-[105.87px] lg:h-[12.12px] lg:pr-[7.27px] lg:pl-[4.85px] lg:bg-transparent  lg:flex lg:items-center  lg:justify-evenly lg:gap-[4px]">
                            <div className="relative lg:w-[11.16px] lg:h-[11.16px]">
                              <Image
                                src={group.calender}
                                alt="laugh"
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>

                            <h3 className="lg:font-normal lg:text-[8.08px] lg:leading-[16.97px] lg:text-[#595564]">
                              {group.createdAt}
                            </h3>
                          </div>

                          <div className="lg:w-[105.87px] lg:h-[12.12px] lg:pr-[7.27px] lg:pl-[4.85px] llg:bg-transparent  lg:flex lg:items-center lg:justify-evenly lg:gap-[4px]">
                            <div className="relative lg:w-[11.16px] lg:h-[11.16px]">
                              <Image
                                src={group.time}
                                alt="laugh"
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>

                            <h3 className="lg:font-normal lg:text-[8.08px] lg:leading-[16.97px] lg:text-[#595564]">
                              {group.date}
                            </h3>
                          </div>

                        </div>
                        <div className="lg:w-[244.07px] lg:h-[23.355px] lg:bg-transparent  lg:pr-[6.47px] lg:pl-[6.27px] lg:flex lg:items-center lg:justify-between">
                          
                        <div className="lg:w-[135.87px] lg:h-[19.6px] lg:bg-transparent  lg:flex lg:items-center lg:justify-evenly">
                        <div className="relative lg:w-[11.519px] lg:h-[11.529px]" >
                                  <Image
                                src={group.icon}
                                alt="laugh"
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                           

                            <div className="lg:w-[105.87px] lg:h-[19.6px] lg:bg-transparent  lg:flex lg:flex-col  lg:justify-between">

                        <div className="lg:w-[38px] lg:h-[8px] lg:bg-transparent ">
                          <h3 className="lg:font-light lg:text-[6.47px] lg:leading-[100%] lg:align-middle lg:text-[#A195C0]">Study Group</h3>
                            </div>
                            <div className="lg:w-[105.8px] lg:h-[10px] lg:bg-transparent ">
                           <h3 className="lg:font-medium lg:text-[8.80px] lg:leading-[100%] lg:text-[#595564]">UX Strategy  Study group</h3>
                              </div>
                              </div>
                          <div>
                       
                              </div>

                            </div>

                            <div className="lg:w-[77.5px] lg:h-[23.3px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between">
                        <div className="lg:w-[38px] lg:h-[8px] lg:bg-transparent ">
                          <h3 className="lg:font-light lg:text-[6.47px] lg:leading-[100%] lg:align-middle lg:text-[#A195C0]">Mentors</h3>
                            </div>
                            <div className="relative lg:w-[30.23px] lg:h-[16.74px]">
                            <Image
                                src={group.pics}
                                alt="laugh"
                                fill
                                className="object-cover rounded-lg"
                              />
                              </div>

                            </div>



                        </div>
                      </div>
                      {/*buttons starts */}
                      <div className="lg:w-[244.07px] lg:h-[34.18px] lg:mt-1 lg:bg-transparent  lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-[119.2px] lg:h-[32px] lg:rounded lg:border-[0.88px] lg:border-[#6F01D0] lg:p-[14.03px]
                         lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-center">
                     <div className="lg:w-[104px] lg:h-[15px] lg:flex lg:items-center lg:justify-center">
                     <h3 className="lg:font-normal lg:text-[10.88px] lg:leading-[100%] lg:align-middle lg:text-[#6F01D0]">View Participants</h3>
                      </div>
                       
                        </div>
                        <div className="lg:w-[98.18px] lg:h-[34px] lg:rounded lg:p-[10.03px] lg:bg-[#6F01D0] lg:flex lg:items-center lg:justify-center">
                          <div className="lg:w-[130px] lg:h-[15px] lg:bg-transparent  lg:flex lg:items-center lg:justify-between"> 
                          <div className="lg:w-[54px] lg:h-[15px] lg:bg-transparent lg:flex lg:items-center lg:justify-center"> 
                            <h3 className="lg:font-normal lg:text-[11.27px] lg:leading-[100%] lg:align-middle lg:text-[#FFFFFF]">Join Now</h3>
                              </div>
                              <div className=" relative lg:w-[12.3px] lg:h-[11.39px] lg:bg-transparent ">
                              <Image
                                src={group.pic}
                                alt="laugh"
                                fill
                                className="object-cover rounded-lg text-white"
                              />

                                </div>

                        
                          </div>

                        </div>
                      </div>
                      {/*buttons ends*/}
                    </div>
                  )
                })
              }





            </div>
          </div>

          {/* <div className="lg:w-[762px] lg:h-[605px] lg:rounded-xl lg:pt-[8px] lg:pr-[16px] lg:pb-[8px] lg:bg-green-600
        lg:flex lg:items-center"> 
        
         {
                groups.map((group) => (
                  <div
                    key={group.id}>
                    <h1 className={group.status === 'Ongoing' ? 'bg-green-400 text-white  p-2 rounded-2xl max-w-max' : 'bg-red-500 p-2 text-white rounded-2xl max-w-max'}
                    >{group.status}</h1>
                    <div className="relative lg:w-[100px] lg:h-[100px]">
                      <Image src={group.picture} alt='img' fill />
                    </div>


                  </div>
                ))
              }*/}
          <div className="lg:w-[762px] lg:h-[610px] lg:rounded-xl lg:bg-transparent
        lg:flex lg:items-center lg:justify-between lg:mt-4">
            <div className="lg:w-[431px] lg:h-[605px] lg:pt-[8px] lg:pr-[16px] lg:pl-[16px] lg:pb-[8px] lg:bg-[#FFFFFF]
            lg:flex lg:flex-col lg:items-center">
              <div className="lg:w-[399px] lg:h-[40px] lg:pt-[8px] lg:pr-[29px] lg:pb-[8px] lg:pl-[29px] 
               lg:flex lg:items-center lg:justify-between lg:mx-auto lg:bg-[#FFFFFF] ">
                <div className="lg:w-[10px] lg:h-[9px] lg:bg-transparent" >
                <Image src={Vector} alt="" className="lg:w-[10px] lg:h-[9px]" />
                </div>
                <div className="lg:w-[230px] lg:h-[16px] lg:bg-[#FFFFff] lg:flex lg:items-center">
                  <h3 className="lg:font-semibold lg:text-[16px] lg:align-middle lg:text-[#B0B0B0]">Applications</h3>
                </div>

                <div className="lg:w-[45px] lg:h-[17px] lg:bg-transparentlg:flex lg:items-center lg:justify-center" >
                  <h3 className="lg:font-medium lg:text-[14px] lg:leading-[100%] lg:text-[#6F01D0]">See all</h3>
                </div>

                <div className="lg:w-[18px] lg:h-[18px]  lg:bg-transparent ">
                <Image src={dots} alt="dots" />
                </div>
              </div>

              <div className="lg:w-[399px] lg:h-[138px] lg:border-b-[0.81px] lg:border-[#D0D5DD] lg:bg-[#FFFFFF] lg:flex lg:flex-col lg:justify-between lg:mt-5">
                <div className="lg:w-[184px] lg:pt-[8px] lg:pr-[24px] lg:pb-[8px] lg:pl-[24px] lg:bg-transparent lg:flex justify-center">
             <h3 className="lg:w-[136px] lg:h-[12px] lg:font-normal lg:text-[10px] lg:text-[#7D8DA6] ">Mentors</h3>
          
                </div>
                <div className="lg:w-[399px] lg:h-[102px] lg:bg-transparent lg:justify-between">
                <div className="lg:w-[391px] lg:h-[57px] lg:bg-transparentlg:pt-[16px] lg:pb-[16px] 
                lg:justify-between lg:flex lg:items-center">
                    <div className="lg:w-[203px] lg:h-[36px] lg:bg-transparent lg:justify-between lg:flex lg:items-center">
                      <input  type="checkbox"/>
                       <div className="lg:w-[32px] lg:h-[32px] lg:rounded-full">
                    <Image src={man} alt="man"/>
                      </div>

                      <div className="lg:w-[124px] lg:h-[36px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between">
                      <div className="lg:w-[104px] lg:h-[22px] lg:bg-transparent">
                        <h3 className="lg:font-semibold lg:text-[14.4px] lg:leading-[150%] lg:text-[#4F4F4F]">Maxwell Smith</h3>
                        </div>
                        <div className="lg:w-[124px] lg:h-[12px] lg:bg-transparent">
                        <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#7D8DA6]">maxwellsmith@gmail.com</h3>
                          {/* font-family: Chivo;
font-weight: 400;
font-size: 10px;
line-height: 100%;
letter-spacing: 0%; */}

                        </div>
                      </div>
                 
                  </div>

                  <div className="lg:w-[166.7px] lg:h-[31px] lg:bg-transparent lg:flex lg:items-center lg:justify-between ">
                  <div className="lg:w-[78px] lg:h-[31px] lg:bg-[#FFEDED] lg:rounded lg:pt-[9.77px] lg:pr-[24.42px]
                  lg:pb-[9.77px] lg:pl-[24.42px]  lg:border-[0.61px] lg:border-[#D09696] lg:flex lg:items-center lg:justify-center">
                    <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#D83535]" >Reject</h3>
              </div>
             
              <div className="lg:w-[78px] lg:h-[31px] lg:bg-[#6F01D0] lg:rounded lg:pt-[9.77px] lg:pr-[24.42px]
                  lg:pb-[9.77px] lg:pl-[24.42px]  lg:border-w-[0.61px] lg:flex lg:items-center lg:justify-center">
                    <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#FFFFFF]" >Accept</h3>
              </div>
              

               </div>
               </div>
               <div className="lg:w-[392px] lg:h-[19.2px] lg:pl-[26.38px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
               <div className="lg:w-[96px] lg:h-[19.2px] lg:rounded lg:pr-[3.6px] lg:pl-[3.46px] lg:border-[0.86px]
               lg:border-[#DDCEEE] lg:bg-[#F3ECF9] lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:font-normal lg:text-[8.65px] lg:leading-[22.48px] lg:text-[#9985A7]">Product Designer</h3>
               
</div>

<div className="lg:w-[102.02px] lg:h-[19.2px] lg:rounded lg:pr-[3.6px] lg:pl-[3.46px] lg:border-[0.86px]
               lg:border-[#A1BDBA] lg:bg-[#E8FDFB] lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:font-normal lg:text-[8.65px] lg:leading-[22.48px] lg:text-[#58948E]">4years Experience</h3>
               
</div>



<div className="lg:w-[96px] lg:h-[19.2px] lg:rounded lg:pr-[3.6px] lg:pl-[3.46px] lg:border-[0.86px]
               lg:border-[#ABBEE0] lg:bg-[#E3ECF9] lg:flex lg:items-center lg:justify-center">
                  <Image src={Nigeria} alt="Nigeris"/>
                <h3 className="lg:font-normal lg:text-[8.65px] lg:leading-[22.48px] lg:text-[#8196B5]">Lagos, Nigeria</h3>
               
</div>


<div className="lg:w-[44px] lg:h-[19.2px] lg:rounded lg:pr-[3.6px] lg:pl-[3.46px] lg:border-[0.86px]
               lg:border-[#C8C8C8] lg:bg-[#F4F4F4] lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:font-normal lg:text-[8.65px] lg:leading-[22.48px]  lg:flex lg:items-center lg:justify-center lg:text-[#595564]">GMT +1</h3>
               
</div>

               </div>

              

                </div>
              </div>

              <div className="lg:w-[399px] lg:h-[356px] lg:mt-4 lg:bg-transparent lg:flex lg:flex-col  lg:justify-between">
              <div className="lg:w-[184px] lg:pt-[8px] lg:pr-[24px] lg:pb-[8px] lg:pl-[24px] lg:bg-transparent lg:flex justify-center">
             <h3 className="lg:w-[136px] lg:h-[12px] lg:font-normal lg:text-[10px] lg:text-[#7D8DA6] ">Students</h3>
          
                </div>
                <div className="lg:w-[399px] lg:h-[320px] lg:bg-transparent">
                  {
                    students.map((student) => {
                      return(
                        <div 
                        key={student.id}
                        className="lg:w-[391px] lg:h-[57px] lg:border-b-[0.81px] lg:border-[#D0D5DD] lg:mb-4 lg:bg-transparent lg:pt-[16px] lg:pb-[16px] 
                lg:justify-between lg:flex lg:items-center">
                    <div className="lg:w-[203px] lg:h-[36px] lg:bg-transparent lg:justify-between lg:flex lg:items-center">
                      <input  type="checkbox"/>
                       <div className=" relative lg:w-[32px] lg:h-[32px] lg:rounded-full">
                    <Image src={student.picture} alt="man"
                     fill
                     className="object-cover rounded-lg"/>
                    

                      </div>

                      <div className="lg:w-[124px] lg:h-[36px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between">
                      <div className="lg:w-[104px] lg:h-[22px] lg:bg-transparent">
                        <h3 className="lg:font-semibold lg:text-[14.4px] lg:leading-[150%] lg:text-[#4F4F4F]">Maxwell Smith</h3>
                        </div>
                        <div className="lg:w-[124px] lg:h-[12px] lg:bg-transparent">
                        <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#7D8DA6]">maxwellsmith@gmail.com</h3>
                         

                        </div>
                      </div>
                 
                  </div>

                  <div className="lg:w-[166.7px] lg:h-[31px] lg:bg-transparent lg:flex lg:items-center lg:justify-between ">
                  <div className="lg:w-[78px] lg:h-[31px] lg:bg-[#FFEDED] lg:rounded lg:pt-[9.77px] lg:pr-[24.42px]
                  lg:pb-[9.77px] lg:pl-[24.42px]  lg:border-[0.61px] lg:border-[#D09696] lg:flex lg:items-center lg:justify-center">
                    <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#D83535]" >Reject</h3>
              </div>
             
              <div className="lg:w-[78px] lg:h-[31px] lg:bg-[#6F01D0] lg:rounded lg:pt-[9.77px] lg:pr-[24.42px]
                  lg:pb-[9.77px] lg:pl-[24.42px]  lg:border-w-[0.61px] lg:flex lg:items-center lg:justify-center">
                    <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#FFFFFF]" >Accept</h3>
              </div>
              

               </div>
               </div>
                      )
                    })
                  }
                
                

                </div>
             
              </div>
             

            </div>


            <div className="lg:w-[320px] lg:h-[604px] lg:rounded-xl lg:bg-transparent lg:flex lg:flex-col lg:items-center lg:justify-between ">
              <div className="lg:w-[320px] lg:h-[272px] lg:rounded-xl lg:bg-[#FFFFFF]">
              {/* lg:pr-[24px] lg:pb-[24px] lg:pl-[24px] */}
              <div className="lg:w-[312px] lg:h-[54px] lg:pr-[20px] lg:pl-[20px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-[10px] lg:h-[9px]">
              <Image src={Vector} alt="menu" className="lg:text-[#000000]" />
              </div>
        
              <div  className="lg:w-[165px] lg:h-[15.62px]  lg:bg-transparent lg:flex lg:items-center">
                  <h3 className="lg:font-semibold lg:text-[16px] lg:align-middle lg:text-[#B0B0B0]">Mentors</h3>
                </div>
              
              
              <div className="lg:w-[50px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-[24px] lg:h-[24px] lg:bg-transparent">
              <Image src={plus} alt="menu" className="lg:-[#9D92A6] lg:flex lg:items-center lg:justify-between" />
            </div>

            <div className="lg:w-[18px] lg:h-[18px] lg:bg-transparent">
            <Image src={dots} alt="menu" className="lg:text-[#000000]"/>
           

            </div>
              </div>
          

             </div>
             <div className="lg:w-[264px] lg:h-[120px] lg:bg-transparent lg:pr-[24px] lg:pb-[24px] lg:pl-[24px]">
             <div className="lg:w-[264px] lg:h-[120px] lg:bg-transparent lg:mt-3 lg:flex lg:flex-col lg:items-center lg:justify-between">
              {mentors.map((mentor) => {
                return(
<div 
key={mentor.id}
className="lg:w-[263px] lg:h-[52px] lg:bg-transparent lg:pt-[8px] lg:pb-[8px] 
                lg:justify-between lg:flex lg:items-center lg:border-b-[1px] lg:border-[#F3F3F3]">
                  

                    
                    <div className="lg:w-[200px] lg:h-[36px] lg:bg-transparent
                     lg:justify-between lg:flex lg:items-center">

                       <div className="relative lg:w-[32px] lg:h-[32px] lg:rounded-full">
                    <Image src={mentor.picture} alt="man" fill
                     className="object-cover rounded-lg"/>
                      </div>
                      <div className="lg:w-[102px] lg:h-[36px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between">
                      <div className="lg:w-[104px] lg:h-[22px] lg:bg-transparent">
                       
                        <h3 className="lg:font-semibold lg:text-[14.4px] lg:leading-[150%] lg:text-[#4F4F4F]">{mentor.name}</h3>
                        </div>
                        <div className="lg:w-[124px] lg:h-[12px] lg:bg-transparent">
                        <h3 className="lg:font-light lg:text-[10px] lg:leading-[100%] lg:text-[#7D8DA6]">{mentor.title}</h3>
                        </div>
                      </div>
                 
                  </div>

                  <div className="lg:w-[166.7px] lg:h-[31px] lg:bg-transparent00 lg:flex lg:items-center lg:justify-end ">
              <div className="lg:w-[76px] lg:h-[22px] lg:bg-[#6F01D0] lg:rounded-2xl lg:pt-[4px] lg:pr-[12px]
                  lg:pb-[4px] lg:pl-[12px] lg:flex lg:items-center lg:justify-center">
                   

                   <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#F3F3F3]" >{mentor.info}</h3>
              </div>
              

               </div>
               </div> 
                )
              })

              }
               
           
             </div>

             </div>
            
             <div className="lg:w-[264px] lg:h-[44px] lg:rounded-3xl lg:mt-5 lg:pt-[4px] lg:pr-[12px] lg:pb-[4px] lg:pl-[12px]
             lg:bg-[#DDD6FB] lg:flex lg:items-center lg:justify-center lg:mx-auto">
              <div className="lg:w-[45px] lg:h-[17px] lg:flex lg:items-center lg:justify-center">
               <h3 className="lg:font-medium lg:text-[14px] lg:leading-[100%] lg:text-[#6F01D0]">See all</h3>
              

</div>
             </div>
             

              </div>

           <div className="lg:w-[320px] lg:h-[316px] lg:bg-[#FFFFFF] lg:rounded-xl ">
           <div className="lg:w-[312px] lg:h-[54px] lg:pr-[20px] lg:pl-[20px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-[10px] lg:h-[9px]">
              <Image src={Vector} alt="menu" className="lg:text-[#000000]" />
              </div>
        
              <div  className="lg:w-[165px] lg:h-[15.62px]  lg:bg-transparent lg:flex lg:items-center">
                  <h3 className="lg:font-semibold lg:text-[16px] lg:align-middle lg:text-[#B0B0B0]">Recent Activities</h3>
                </div>
              
              
              <div className="lg:w-[80px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-[45px] lg:h-[17px] lg:bg-transparent lg:flex lg:items-center lg:justify-between">
              <h3 className="lg:font-medium lg:text-[14px] lg:leading-[100%] lg:text-[#6F01D0]">See all</h3>
              {/* font-family: Chivo;
font-weight: 600;
font-size: 14px;
line-height: 100%;
letter-spacing: -0.5%; */}

            </div>

            <div className="lg:w-[18px] lg:h-[18px] lg:bg-transparent">
            <Image src={dots} alt="menu" className="lg:text-[#000000]"/>
           

            </div>
              </div>
          

             </div>

             <div className="lg:w-[287px] lg:h-[227px] lg:bg-transparent  lg:pr-[16px] lg:pb-[24px] lg:pl-[16px]">
             
             <div className="lg:w-[302px] lg:h-[120px] lg:mx-auto lg:bg-transparent lg:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-between">
{recents.map((recent) => {
                return(
<div
key={recent.id}
className="lg:w-[302px] lg:h-[65px] lg:bg-transparent lg:pt-[4px] lg:mt-4 lg:pb-[4px] lg:pr-[0px] lg:pl-[0px]
                lg:justify-between lg:flex lg:items-center lg:border-b-[1px] lg:border-[#F3F3F3]">
                  

                    
                    <div className="lg:w-[300px] lg:h-[50px] lg:bg-transparent
                     lg:flex lg:items-center">
                       <div className="relative lg:w-[32px] lg:h-[32px] lg:rounded-full lg:mt-[-17px]">
                    <Image src={recent.picture} alt="man" fill
                     className="object-cover rounded-lg"/>
                      </div>
                      <div className="lg:w-[252px] lg:h-[57px] lg:ml-2 lg:bg-transparent lg:flex lg:flex-col lg:justify-evenly">
                      <div className="lg:w-[238px] lg:h-[35px] lg:bg-transparent lg:flex lg:flex-col lg:justify-center">
                        <h3 className="lg:font-semibold lg:text-[14px] lg:leading-[16px] lg:align-middle lg:text-[#011627]">{recent.text}</h3>
                        <h3 className="lg:font-light lg:text-[12px] lg:mt-1  lg:leading-[14px] lg:text-[#707991]">{recent.hint}</h3>
                        </div>
                        <div className="lg:w-[238px] lg:h-[14px] lg:bg-transparent lg:flex lg:items-center ">
                        <p className="lg:font-extralight lg:text-[12px] lg:leading-[20%] lg:text-[#7D8DA6]">25 minutes Ago</p>
                       
                        </div>
                      </div>
                 
                  </div>

                  {/* <div className="lg:w-[166.7px] lg:h-[31px] lg:bg-transparent00 lg:flex lg:items-center lg:justify-end ">
              <div className="lg:w-[76px] lg:h-[22px] lg:bg-[#6F01D0] lg:rounded-2xl lg:pt-[4px] lg:pr-[12px]
                  lg:pb-[4px] lg:pl-[12px] lg:flex lg:items-center lg:justify-center">
                   

                   <h3 className="lg:w-[30px] lg:h-[12px] lg:flex lg:items-center lg:justify-center 
                    lg:font-normal lg:text-[9.77px] lg:leading-[100%] lg:text-[#F3F3F3]" >{mentor.info}</h3>
              </div>
              

               </div> */}
               </div> 
                )
              })

              }
               
           
             </div>

             </div>
             

              </div>
            

            </div>

          </div>

        </div>

      </div>



    </section>
  );
}
