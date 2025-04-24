'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './mainMenu.module.css';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';

function MainMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  const closeMenu = () => setIsOpen(false);
const menu = (
  <div className='sticky top-0 lg:top-0.5 z-40 mx-1 lg:mx-2.5 rounded-t-xl' id="mainMenu">
    <div className={`flex justify-between gap-5 items-center px-2.5 lg:px-50 py-2.5  rounded-t-xl  ${isScrolled ? 'bg-blue' : 'bg-transparent'}`} id="mainMenu">
      <div >
        <Link href='/' style={{cursor:'pointer'}}>
          <div className='flex white items-end'> 
            <Image src="/BenisonHomecareLogo.png" 
              alt="Benison Homecare Logo" className=''
              width="60"
              height="50" 
            />
            <h1 id="menun" className='text-md font-bold text-white '>Benison Home <br className='' />Medicare Limited</h1>
          </div>
        </Link>
      </div>

      <div className='flex gap-5 items-center '>
        <menu className={styles.menuItems + ' lg:flex white hidden text-lg '}>
          <Link href="/" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-white'><li>Home</li></Link>
          <Link href="/about-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-white'><li>About Us</li></Link>
          <Link href="/our-services" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-white'><li>Our Services</li></Link>
          <Link href="/work-with-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-white'><li >Work With Us</li></Link>
        </menu>

        <div className='hidden lg:block'>
          <Link href="/contact-benison-home-medicare"><button className={` px-5 py-2.5 rounded-xl font-semibold text-white hover:text-black hover:bg-white ${isScrolled ? 'bg-green' : 'bg-blue'}`} >Get Homecare</button></Link>
        </div>

        <button onClick={toggleMenu} className='text-[45px] text-white font-bold lg:hidden'>{isOpen ? <MdOutlineClose /> : <MdOutlineMenu />} </button>
      </div>

    </div>

    <div className={`$ flex flex-col lg:hidden top-20 text-xl bg-blue text-white py-2.5 gap-2.5 absolute text-center w-[98%] mx-1 rounded-xl ${isOpen ? 'translate-y-0 transition duration-300 ease-in-out' : '-translate-y-[200%]'}`} >
      <Link href='/' onClick={closeMenu} className='border-b border-grey pt-2.5 pb-2.5'>Home</Link>
      <Link href='/about-us'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>About Us</Link>
      <Link href='/our-services'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>Our Services</Link>
      <Link href='/work-with-us'onClick={closeMenu} className=' border-b border-grey pt-1.5 pb-2.5'>Work With Us</Link>
      <Link href='/contact-benison-home-medicare'onClick={closeMenu} className=' border-grey pt-1.5 pb-2.5'>Contact Us</Link>
    </div>  
  </div>
);

return menu;

}


export default MainMenu;
