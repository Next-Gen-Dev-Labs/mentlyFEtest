import ProgramCard from '../../components/ProgramCard'
import GroupCallCard from '../../components/GroupCallCard'
import ApplicationCard from '../../components/ApplicationCard'
import MentorCard from '../../components/MentorCard'
import RecentActivity from '../../components/RecentActivity'
import UsersPieChartCard from '../../components/UsersPieChartCard'

export default function DashboardPage() {
  return (
<>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-3.5">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 xl:col-span-1 xl:w-[104%]">
          <section className="bg-white p-4 rounded-xl shadow">
               <div className='flex justify-between '>
                        <h2 className="text-lg font-semibold mb-4 opacity-30"><span className='me-2'>=</span> Programs</h2>
                        <p className='text-[#6F01D0] font-semibold py-1.5 '>See all <span className='font-bold'>:</span></p>
                </div>
                <div className='flex justify-end gap-2'>
                      <p className='opacity-50'>Filter </p>
                      <select className="border border-gray-300 text-sm px-2 py-1 rounded">
                        <option>Active</option>
                      </select>
                </div>
              <ProgramCard/>
          </section>
          
          <section className="bg-white p-4 rounded-xl shadow"><UsersPieChartCard /></section>
        </div>


        {/* Column 2 */}
        <div className="flex flex-col  gap-6 xl:col-span-2">
               {/* GroupCallCard section */}
                <section className="bg-white p-4 rounded-xl shadow ">
                  <div className='flex'>
                      {/* <img src='/Vector (2).png' className='  text-sm '/> */}
                      <span className='me-2'>=</span>
                      <h2 className="text-lg font-semibold mb-4 opacity-40">Group Calls</h2>
                  </div>
                  
                    <GroupCallCard />
                 </section>

                <div className='flex gap-2 flex-col  sm:flex-col md:flex-row gap-y-2 '>
                         {/* ApplicationCard section*/}
                    <section className="bg-white p-4 rounded-xl shadow flex-4/12">
                        <div className='flex justify-between '>
                            <h2 className="text-lg font-semibold mb-4 opacity-50"><span className='me-2'>=</span> Applications</h2>
                            <p className='text-[#6F01D0] font-semibold '>See all <span className='font-bold'>:</span></p>
                        </div>

                        <ApplicationCard />
                    </section>
                      

                    <div className="flex flex-col gap-4 flex-2/12">
                       {/* Mentors section */}
                      <section className="bg-white p-4 rounded-xl shadow">
                        <div className='flex justify-between pb-6'>
                              <h2 className="text-lg font-semibold  opacity-50"><span className='me-2'>=</span> Mentors</h2>
                                <div className='flex space-x-3'>
                                <img src='cross-inside-circle.png'/><span className='font-bold'>:</span>

                              </div>
                          </div>
                            <MentorCard />



                          
                        
                      </section>
                      {/* Recent Activities section */}
                      <section className="bg-white p-4 rounded-xl shadow">
                        <div className='flex justify-between pb-6'>
                              <h2 className="text-sm font-semibold mb-4 opacity-50"><span className='me-2'>=</span> Recent Activities</h2>
                              <p className='text-[#6F01D0] font-semibold '>See all <span className='font-bold'>:</span></p>
                        </div>
                        <RecentActivity />
                                       
                           
                      </section>
                    </div>

                </div>
                

        </div>

       

    
    </div>

</>
  )
}
