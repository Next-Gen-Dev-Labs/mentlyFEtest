import React from 'react'

const ProgramsIcon = ({color,height,width,onClick}) => {
  return (
    <svg className='cursor-pointer ' onClick={onClick} width={width?width: "20"} height={height?height: "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91667 15V5.83334C2.91667 2.50001 3.75 1.66667 7.08333 1.66667H12.9167C16.25 1.66667 17.0833 2.50001 17.0833 5.83334V14.1667C17.0833 14.2833 17.0833 14.4 17.075 14.5167" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.29167 12.5H17.0833V15.4167C17.0833 17.025 15.775 18.3333 14.1667 18.3333H5.83333C4.225 18.3333 2.91667 17.025 2.91667 15.4167V14.875C2.91667 13.5667 3.98333 12.5 5.29167 12.5Z" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66667 5.83333H13.3333" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66667 8.75H10.8333" stroke={color?color: "#1F0954"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


    
  )
}

export default React.memo(ProgramsIcon)

