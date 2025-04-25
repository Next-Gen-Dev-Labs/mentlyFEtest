import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import GlobalHeader from '../../components/GlobalHeader'
import GroupCallCard from '../../components/GroupCallCard'

export default function DashboardLayout({ children }) {
  return (   //min-h-screen element will always be at least as tall as the full height of the screen
          <div className="flex min-h-screen  bg-gray-50">  
                <Sidebar />
                
               {/*flex-1 tells the item to take up all remaining space in a flex container */}
               <div className="flex-1 flex flex-col bg-gray-100">

                   <GlobalHeader/>

                   <div className='flex justify-end font-bold space-x-7  m-3'>
                    <img src='/Vector.png' className='  text-sm hover:bg-purple-300 hover:rounded-4xl'/>
                    <img src='/material-symbols.png' className=' text-sm '/>

                      <p className='text-purple-950 hover:text-purple-600'>Manage Widgets</p> 
                   </div>


                 
                    <div className='p-6 '> 
                      <Topbar />

                       {children} 
                    </div> 
                </div> 
            </div>
  )
}
