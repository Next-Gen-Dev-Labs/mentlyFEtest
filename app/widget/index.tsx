import { ManageWidgetsDialog } from '@/components/widget-modal'
import { Images, LayoutList } from 'lucide-react'
import React from 'react'

const ManageWidgit = () => {
  return (
 <>
    <div className='md:ml-auto w-[240px]  flex gap-4'>
       
    
        <div className="md:hidden ml-auto mr-4">
          <ManageWidgetsDialog isMobile={true} />
        </div>
        <div className="hidden md:block">
       <ManageWidgetsDialog isMobile={false} />
     </div> 
    </div>
  </>
  )
}

export default ManageWidgit