import React from 'react'

const DotIcon = ({color,height,width,onClick}) => {
  return (
    <svg className='cursor-pointer ' onClick={onClick} width={width?width: "7"} height={height?height: "8"} viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3.58232" cy="4.05123" r="3.12242" fill={color?color: "#1F0954"}/>
    </svg>
    

    
  )
}

export default React.memo(DotIcon)

