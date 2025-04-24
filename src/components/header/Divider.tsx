import Image from 'next/image'
import React from 'react'
import { ManageWidgets } from './ManageWidgets'

const Divider = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1"></div>
      <div className="flex items-center gap-6 md:px-6">
          <Image src="/SVGs/widget.svg" width={30} height={26} alt="widget_icon" />
          <Image src="/SVGs/gallery.svg" width={24} height={18} alt="gallery_icon" />
          <ManageWidgets />
      </div>
    </div>
  )
}

export default Divider