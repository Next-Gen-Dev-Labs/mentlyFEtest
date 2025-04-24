import React from 'react'

const ViewMirrowIcon = ({color,height,width,onClick}) => {
  return (
    <svg className='cursor-pointer ' onClick={onClick} width={width?width: "31"} height={height?height: "30"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 13.5H16.5V21H24V13.5ZM22.5 19.5H18V15H22.5V19.5ZM24 3H16.5V10.5H24V3ZM22.5 9H18V4.5H22.5V9ZM0 4.5V6H13.5V4.5H0ZM4.5 9H13.5V7.5H4.5V9ZM13.5 15H0V16.5H13.5V15ZM13.5 18H4.5V19.5H13.5V18Z" fill={color?color: "#A4A5B8"}/>
</svg>


    
  )
}

export default React.memo(ViewMirrowIcon)


