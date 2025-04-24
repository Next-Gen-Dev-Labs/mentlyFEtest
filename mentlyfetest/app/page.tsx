import Applications from './components/Applications'
import Classicmode from './components/Classicmode'
import GroupCalls from './components/GroupCalls'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import Programs from './components/Programs'
import RecentActivities from './components/RecentActivities'
import TopHeader from './components/TopHeader'
import UsersStat from './components/UsersStat'
import WelcomeAboard from './components/WelcomeAboard'
import Widgets from './components/Widgets'

const page = () => {
  return (
    <div className="w-screen h-screen bg-[#F4F5FA] grid grid-cols-6 overflow-x-hidden gap-x-[11.5rem] gap-y-6 pb-3">
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-5">
        <TopHeader />
      </div>
      <div className="">
        <Widgets />
      </div>
      <div className="col-start-2">
        <Programs />
      </div>
      <div className="col-start-2">
        <UsersStat />
      </div>
      <div className="col-start-4 row-start-2 -ml-12">
        <GroupCalls />
      </div>
      <div className="w-[38rem] h-[100%] top-[55%] ml-[8.9rem] -mt-[8rem] flex overflow-scroll pr-10 py-2 scroll">
        <div className="-ml-2">
          {/* col-start-3 row-start-3 row-end-5 -ml-12 */}
          <Applications />
        </div>
        <div className="h-[150%] flex flex-col">
          <Mentors />
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}
export default page
