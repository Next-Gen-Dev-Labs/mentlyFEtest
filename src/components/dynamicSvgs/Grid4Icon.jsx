import React from 'react'

const Grid4Icon = ({color,height,width,onClick}) => {
  return (
    <svg className='cursor-pointer ' onClick={onClick} width={width?width: "31"} height={height?height: "30"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 2V22" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    

    
  )
}

export default React.memo(Grid4Icon)

