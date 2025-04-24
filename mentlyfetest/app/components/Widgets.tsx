import React from 'react'

const Widgets = () => {
  const images = {
    window: 'Images/Group calls icon/window widget.svg',
    widget: 'Images/Group calls icon/widget.svg',
  }
  return (
    <section className="widgets w-[15rem] h-[3rem] flex gap-4 justify-around items-center bg-transparent">
      <img src={images.widget} className="w-8 h-8" alt="widget style" />
      <img src={images.window} className="w-8 h-8" alt="widget style" />
      <div className="font-[700] text-[1rem] text-[#1F0954]">Manage Widget</div>
    </section>
  )
}
export default Widgets
