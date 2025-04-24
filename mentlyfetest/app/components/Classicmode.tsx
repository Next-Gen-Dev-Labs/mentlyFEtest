'use client'
import React from 'react'
import { useState } from 'react'

const Classicmode = () => {
  const [toggle, setToggle] = useState(false)
  const [position, setPosition] = useState(0)
  const handleToggle = () => {
    setToggle(!toggle)
    setPosition(toggle ? 0 : 1)
    console.log('happy')
  }
  return (
    <div
      className="w-4 h-4 bg-[#1F0954] rounded-full absolute  cursor-pointer transition-all duration-500"
      onClick={handleToggle}
      style={{ transform: `translateX(${position}rem)` }}
    ></div>
  )
}
export default Classicmode
