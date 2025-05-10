"use client"
import React, { useState } from 'react'
import ViewMirrow from '../dynamicSvgs/ViewMirrow'
import ViewThumb from '../dynamicSvgs/ViewThumb'
import { widget } from "@/data/dashboard.json";
import { useSelector, useDispatch } from 'react-redux';
import { toggleWidget } from '@/redux/widgetSlice';


const Widget = () => {
  const [toggle,setToggle] = useState('thumb')
  const showWidget = useSelector((state) => state.widget.showWidget);
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-end pt-[17px] pe-[40px] ' >
        <div className="flexBetween gap-x-[24px]  ">
            <span className=""><ViewMirrow onClick={()=> {setToggle('mirrow')}} color={toggle === "mirrow"?"#6F01D0": "#A4A5B8"} /></span>
            <span className=""><ViewThumb onClick={()=> {setToggle('thumb')}} color={toggle === "thumb"?"#6F01D0": "#A4A5B8"} /></span>
            <button onClick={() => dispatch(toggleWidget())} className="font-Chivo font-bold text-base text-purple-900 cursor-pointer "> {widget.btn} </button>
            
            
        </div>
        
    </div>
  )
}

export default Widget