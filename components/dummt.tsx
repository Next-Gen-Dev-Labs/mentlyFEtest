import React from 'react'

const dummt = () => {
  return (
    <div>
         <main className="flex-1 bg-gray-50 overflow-y-auto">
        <Header />
        <SubHeader />
        <div className="p-4 grid gap-4">
          {/* Grid container with responsive columns */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Programs Section - Full width on mobile, 1/3 width on desktop */}
            <div className="lg:row-span-2">
              <ProgramsSection />
            </div>

            {/* Group Calls Section - Full width on mobile, 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <GroupCalls />
            </div>

            {/* Applications and Mentors/Activities Section */}
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-5">
              <div className="sm:col-span-3">
                <Applications />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <MentorsSection/>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <RecentActivities/>
                </div>
              </div>
            </div>

            {/* User Analytics Section */}
            <div className="lg:col-span-1 row-span-2">
              <UserAnalytics/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default dummt