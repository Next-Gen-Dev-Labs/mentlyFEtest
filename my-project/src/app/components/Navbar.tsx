import React from 'react'
import Image from 'next/image'
import techrity from '../images/techrity.png'
import grid from '../images/grid.png'
import Home from '../images/home.png'
import book from '../images/book.png'
import bubble from '../images/bubble.png'
import user from '../images/user.png'
import clipboard from '../images/clipboard.png'
import wallet from '../images/wallet.png'
import award from '../images/award.png'
import diagram from '../images/diagram.png'
import settings from '../images/settings.png'
import logout from '../images/logout.png'
import usertag from '../images/usertag.png'
import Toggle from '../images/Toggle.png'

export const Navbar = () => {
  return (
   <section className='lg:w-[240px] lg:h-[1168px] lg:bg-[#340260] lg:flex lg:flex-col l lg:items-center'>
    <div className='lg:w-[240px]  lg:h-[82px] lg:bg-transparent lg:flex lg:items-center lg:justify-center'>
    <div className='lg:w-[227px] lg:h-[52px] lg:flex lg:items-center lg:justify-center min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
    lg:gap-[32px] lg:rounded-md lg:bg-[#340260]'>
        <Image src={techrity} alt="home"  className='lg:w-[116px] lg:h-[27px] ' />
        <Image src={grid} alt="grid"  className='lg:w-[24px] lg:h-[24px]' />
    
    </div>
    </div>

{/* Home Section Starts */}
    <div className='lg:w-[207px] lg:bg-transparent lg:h-[600px] lg:top-[152px] lg:left-[16px] lg:gap-[8px]
   lg:flex lg:flex-col  lg:mt-[60px]'>
      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-[#FFFFFF]'>
      <Image src={Home} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#1F0954]'>Dashboard</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={book} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Programs</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={bubble} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Activities</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={user} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Users</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={clipboard} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Forums</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={wallet} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Finances</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={award} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Rewards</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={diagram} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Analytics</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={settings} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#1F0954]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Settings</h3>
      </div>

      </div>

      <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
      lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
      <Image src={logout} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#1F0954]'/>
      <div className='lg:w-[91px] lg:h-[15px] '>
      <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Logout</h3>
      </div>

      </div>
    </div>

    <div className='lg:w-[220px] lg:h-[126px] lg:bg-[#714796] lg:py-[10px] lg:px-[10px] lg:mt-[50px] lg:rounded-lg'>
      <div className='lg:w-[20px] lg:h-[20px]'>
      <Image src={usertag}  alt="user"/>

      <div className='lg:w-[190px] lg:h-[28px] lg:bg-transparent lg:mt-6'>
        <h3 className='lg:font-semibold lg:text-[12px] lg:leading-[100%] lg:text-[#FFFFFF]'>Got some questions, enquiries or need help?</h3>
      </div>

<div className='lg:w-[136px] lg:h-[12px] lg:bg-transparent  lg:mt-[20px]'>
<h3 className='lg:font-light lg:text-[10px] lg:leading-[100%] lg:underline lg:text-[#F0C074]'>Visit Mently Help Desk Here</h3>
</div>

      </div>
  
    </div>

    
<div className='lg:w-[200.2px] lg:h-[19px] lg:bg-transparent lg:mt-10 lg:flex lg:items-center lg:justify-between '>
<div className='lg:w-[136px] lg:h-[14px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
<div className='lg:w-[136px] lg:h-[14px] lg:flex lg:items-center lg:justify-center'>
    <h3 className='lg:font-semibold lg:text-[12px] lg:leading-[100%] lg:text-center lg:text-[#F2F2F2]'>
  Switch to Classic Mode
  </h3>
  </div>
  </div>
  <Image src={Toggle} alt="toggle" />
</div>
    {/* Home Section Ends */}
   
    </section>
  )
}



// 'use client';
// import React from 'react'
// // import { useState } from 'react'
// import { useState } from 'react';
// import Image from 'next/image'
// import techrity from '../images/techrity.png'
// import grid from '../images/grid.png'
// import Home from '../images/home.png'
// import book from '../images/book.png'
// import bubble from '../images/bubble.png'
// import user from '../images/user.png'
// import clipboard from '../images/clipboard.png'
// import wallet from '../images/wallet.png'
// import award from '../images/award.png'
// import diagram from '../images/diagram.png'
// import settings from '../images/settings.png'
// import logout from '../images/logout.png'
// import usertag from '../images/usertag.png'
// import Toggle from '../images/Toggle.png'

// const Navbar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   return (

//    <section className={`${
//     isCollapsed ? "lg:w-[63px]" : "lg:w-[260px]"
//   } lg:w-[240px] lg:h-[1168px] lg:bg-[#340260] lg:flex lg:flex-col l lg:items-center`}>
    

//     {/* <div
//       className={`${
//         isCollapsed ? "lg:w-[63px]" : "lg:w-[260px]"
//       } lg:h-[1024px] lg:gap-[24px] lg:border-r-[0.5px] border lg:border-[#DCDCDC] lg:bg-[#FAFAFA] transition-all duration-300`}
//     > */}

//     <div className='lg:w-[240px]  lg:h-[82px] lg:bg-transparent lg:flex lg:items-center lg:justify-center'>
//     <div className='lg:w-[227px] lg:h-[52px] lg:flex lg:items-center lg:justify-center min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//     lg:gap-[32px] lg:rounded-md lg:bg-[#340260]'>
//         <Image src={techrity} alt="home"  className='lg:w-[116px] lg:h-[27px] ' />
//         <Image src={grid} alt="grid"  className='lg:w-[24px] lg:h-[24px]' />
    
//     </div>
//     </div>

// {/* Home Section Starts */}
//     <div className='lg:w-[207px] lg:bg-transparent lg:h-[600px] lg:top-[152px] lg:left-[16px] lg:gap-[8px]
//    lg:flex lg:flex-col  lg:mt-[60px]'>
//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-[#FFFFFF]'>
//       <Image src={Home} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#1F0954]'>Dashboard</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={book} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Programs</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={bubble} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Activities</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={user} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Users</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={clipboard} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Forums</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={wallet} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Finances</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={award} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Rewards</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={diagram} alt="Home" className='lg:w-[20px] lg:h-[20px]  lg:text-[#C2C2C2]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Analytics</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={settings} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#1F0954]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Settings</h3>
//       </div>

//       </div>

//       <div className='lg:w-[207px] lg:h-[52px] lg:flex lg:items-center lg:justify-center  lg:min-w-[207px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]
//       lg:gap-[32px] lg:rounded-md lg:mb-0 lg:bg-transparent'>
//       <Image src={logout} alt="Home" className='lg:w-[20px] lg:h-[20px] lg:text-[#1F0954]'/>
//       <div className='lg:w-[91px] lg:h-[15px] '>
//       <h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:text-[#C2C2C2]'>Logout</h3>
//       </div>

//       </div>
//     </div>

//     <div className='lg:w-[220px] lg:h-[126px] lg:bg-[#714796] lg:py-[10px] lg:px-[10px] lg:mt-[50px] lg:rounded-lg'>
//       <div className='lg:w-[20px] lg:h-[20px]'>
//       <Image src={usertag}  alt="user"/>

//       <div className='lg:w-[190px] lg:h-[28px] lg:bg-transparent lg:mt-6'>
//         <h3 className='lg:font-semibold lg:text-[12px] lg:leading-[100%] lg:text-[#FFFFFF]'>Got some questions, enquiries or need help?</h3>
//       </div>

// <div className='lg:w-[136px] lg:h-[12px] lg:bg-transparent  lg:mt-[20px]'>
// <h3 className='lg:font-light lg:text-[10px] lg:leading-[100%] lg:underline lg:text-[#F0C074]'>Visit Mently Help Desk Here</h3>
// </div>

//       </div>
  
//     </div>

    
// <div className='lg:w-[200.2px] lg:h-[19px] lg:bg-transparent lg:mt-10 lg:flex lg:items-center lg:justify-between '>
// <div className='lg:w-[136px] lg:h-[14px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
// <div className='lg:w-[136px] lg:h-[14px] lg:flex lg:items-center lg:justify-center'>
//     <h3 className='lg:font-semibold lg:text-[12px] lg:leading-[100%] lg:text-center lg:text-[#F2F2F2]'>
//   Switch to Classic Mode
//   </h3>
//   </div>
//   </div>
//   <Image src={Toggle} alt="toggle" />
// </div>
//     {/* Home Section Ends */}
   
//     </section>
//   )
// }

// export default Navbar
