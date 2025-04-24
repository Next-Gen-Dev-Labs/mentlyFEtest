import { SectionHeader } from '@/components/section-header'
import { ApplicationsSection } from '@/features/application-board'
import { GroupCallsSection } from '@/features/group-calls'
import { RecentActivitiesSection } from '@/features/kyc'
import { MentorsSection } from '@/features/mentor'
import Programs from '@/features/programs'
import { UsersSection } from '@/features/users'


const MainLayout = () => {
  return (
    <>
         <div className='min-h-screen flex p-2 gap-2 flex-col md:flex-row mt-4'>
      <div className='md:w-[30%] flex flex-col gap-3'>
        <div className=' overflow-hidden bg-white rounded-[12px]'>
        <SectionHeader title="Programs" seeAllLink="#" />
          <Programs />
          </div> 
        <div className='h-[320px] border bg-white '>
          <UsersSection />
        </div>
      </div>
      <div className=' flex-1 flex  flex-col gap-3 p-3 '>
        <div className=' w-full bg-white rounded-xl'>
          <SectionHeader title="Group Calls" seeAllLink="#" />
          <GroupCallsSection />
        </div>
        <div className='w-full flex-1 flex flex-col md:flex-row  gap-3 p-2'>
          <div className=' flex-1 bg-white rounded-xl'>
            <SectionHeader title="Applications" seeAllLink="#" />
            <ApplicationsSection />
          </div>
          <div className='  flex md:w-[40%] flex-col gap-3 p-2'>
            <div className=' flex-1 bg-white rounded-xl'>
            <SectionHeader title="Mentors"  hasAddButton />
              <MentorsSection />
            </div>
            <div className=' flex-1 bg-white rounded-xl'>
            <SectionHeader title="Recent Activities" seeAllLink="#" />
              <RecentActivitiesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainLayout