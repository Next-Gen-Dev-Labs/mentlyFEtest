'use client'
import React, { useState } from 'react'

import Classicmode from './Classicmode'
const Navbar = () => {
  const [toggleNavBar, setToggleNavBar] = useState(true)
  const [navPosition, setNavPosition] = useState(0)
  const [button, setButton] = useState(0)
  const handleToggle = () => {
    setToggleNavBar(!toggleNavBar)
    setNavPosition(toggleNavBar ? -100 : 0)
    console.log('happy')
  }

  const handleClick = () => {
    setToggleNavBar(!toggleNavBar)
    setButton(toggleNavBar ? 0 : -100)
    setNavPosition(0)
  }

  const images = {
    award: 'Images/Navbar/award.svg',
    book: 'Images/Navbar/book.svg',
    clipboard: 'Images/Navbar/clipboard.svg',
    analytics: 'Images/Navbar/diagram.svg',
    wallet: 'Images/Navbar/empty-wallet.svg',
    navclose: 'Images/Navbar/grid-4.svg',
    logout: 'Images/Navbar/logout.svg',
    setting: 'Images/Navbar/setting-2.svg',
    user: 'Images/Navbar/user-tag.svg',
    logo: 'Images/Navbar/Logo.svg',
    dashboard: 'Images/Navbar/dashboard.svg',
    bubble: 'Images/Navbar/bubble.svg',
    users: 'Images/Navbar/users.svg',
  }
  return (
    <>
      <nav
        className="scroll w-[14rem] h-full bg-[#340260] absolute overflow-y-scroll transition-all duration-1000 ease-in-out max-[440px]:w-screen"
        style={{ transform: `translateX(${navPosition}rem)` }}
      >
        <div className="navTop flex w-full justify-around pt-5 mb-[4.5rem]">
          <div className="techrity ">
            <img src={images.logo} alt="techrity-Logo" />
          </div>
          <img
            src={images.navclose}
            alt="close sidenav"
            className="w-[1.5rem] h-[1.5rem] hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={handleToggle}
          />
        </div>
        <div className="listContainer w-full h-[100%]  flex justify-center">
          <ul className="w-[12.93rem] h-fit flex flex-col items-center">
            <li className="dashboard w-[80%] h-[2.3rem] flex gap-2 mb-5 bg-[#FFFFFF] py-1.5 rounded-[0.5rem]">
              <img
                src={images.dashboard}
                alt="dashboard"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="dashwrite text-[1rem] text-[#340260] font-[400px] ml-7">
                Dashboard
              </span>
            </li>
            <li className="activities w-[80%] h-[2.3rem] flex mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.bubble}
                alt="activities"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="actwrite text-[1rem] text-[#C2C2C2] font-[400px] ml-10">
                Activities
              </span>
            </li>
            <li className="users w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.users}
                alt="users"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="usewrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Users
              </span>
            </li>
            <li className="forums w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.clipboard}
                alt="forums"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="forwrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Forums
              </span>
            </li>
            <li className="wallet w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.wallet}
                alt="wallet"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="wallwrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Finances
              </span>
            </li>
            <li className="reward w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.award}
                alt="rewards"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="rewrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Rewards
              </span>
            </li>
            <li className="analytics w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.analytics}
                alt="analytics"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="anawrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Analytics
              </span>
            </li>
            <li className="settings w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] py-1.5 rounded-[0.5rem]">
              <img
                src={images.setting}
                alt="settings"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="setwrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Settings
              </span>
            </li>
            <li className="logout w-[80%] h-[2.3rem] flex gap-2 mb-5 hover:bg-[white] transition-colors duration-75 ease-in py-1.5 rounded-[0.5rem]">
              <img
                src={images.logout}
                alt="logout"
                className="w-[1.3rem] h-[1.3rem] ml-4"
              />
              <span className="logwrite text-[1rem] text-[#C2C2C2] font-[400px] ml-8">
                Log out
              </span>
            </li>
            <li></li>
          </ul>
        </div>
        <section className="helpsection w-full h-fit flex justify-center font-[400px]">
          <div
            aria-label="seek assistance with any query"
            className="helpcard w-[90%] h-[8rem] bg-[white]/12  rounded-[0.5rem] mb-8  flex flex-col gap-2 justify-around pl-2"
          >
            <img
              src={images.user}
              className="w-5 h-6"
              alt="customer support icon"
            />
            <span className="text-[0.75rem]">
              Got some questions, enquiries or need help?
            </span>
            <a
              href="#"
              className="text-[#F0C074] text-[0.62rem] underline font-[500px] cursor-pointer"
            >
              Visit Mently Help Desk Here
            </a>
          </div>
        </section>

        <div className="flex justify-center items-center gap-2 mb-36">
          <span className="text-[0.75rem]">Switch to Classic Mode</span>
          <div className="w-8 h-4 rounded-lg bg-white relative">
            <Classicmode />
          </div>
        </div>
      </nav>
      {toggleNavBar ? (
        ''
      ) : (
        <img
          src={images.navclose}
          alt="close sidenav"
          className="w-[1.5rem] h-[1.5rem] hover:scale-110 transition-transform duration-200 mt-3 ml-4  cursor-pointer"
          onClick={handleClick}
        />
      )}
    </>
  )
}
export default Navbar
