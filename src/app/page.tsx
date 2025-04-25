'use client';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgramCard from './components/ProgramCard';
import GroupCallCard from './components/GroupCallCard';
import ApplicationCard from './components/ApplicationCard';
import MentorCard from './components/MentorCard';
import ActivityCard from './components/ActivityCard';
import UserChart from './components/UserChart';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[260px] w-full">
        <Header />
        <main className="p-6 grid gap-6 grid-cols-1 lg:grid-cols-4">
          {/* Programs + Users */}
          <section className="lg:col-span-1 space-y-4">
            <div className="space-y-4">
            <ProgramCard
              title="Fundamentals of User interface & Experience"
              description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
              image="/program1.jpg"
              mentors={["/avatar1.png", "/avatar2.png", "/avatar3.png"]}
            />

            </div>

            <UserChart />
          </section>

          {/* Group Calls */}
          <section className="lg:col-span-1">
            <div className="flex gap-4 overflow-x-auto">
              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                tag="Ongoing"
                date="Mon, Jul 30, 2024"
                time="8:00 - 11:00AM"
              />
              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                tag="Upcoming"
                date="Mon, Jul 30, 2024"
                time="9:00 - 11:00AM"
              />
              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                tag="Ongoing"
                date="Mon, Jul 30, 2024"
                time="9:00 - 11:00AM"
              />
            </div>
          </section>

          {/* Applications */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Applications</h3>
                <button className="text-[#7F1AE5] font-semibold text-sm">See all</button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-medium mb-3">Mentors</p>
                <ApplicationCard
                  name="Maxwell Smith"
                  email="maxwellsmith@gmail.com"
                  avatar="/avatars/avatar1.png"
                  isMentor
                  role="Product Designer"
                  experience="4years Experience"
                  location="Lagos, Nigeria"
                  timezone="GMT +1"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground font-medium mb-3">Students</p>
                <ApplicationCard
                  name="Adeati Samuel"
                  email="maxwellsmith@gmail.com"
                  avatar="/avatars/avatar2.png"
                />
                <ApplicationCard
                  name="Maxwell Smith"
                  email="maxwellsmith@gmail.com"
                  avatar="/avatars/avatar1.png"
                />
                <ApplicationCard
                  name="Adeati Samuel"
                  email="maxwellsmith@gmail.com"
                  avatar="/avatars/avatar2.png"
                />
                <ApplicationCard
                  name="Maxwell Smith"
                  email="maxwellsmith@gmail.com"
                  avatar="/avatars/avatar1.png"
                />
              </div>
            </section>


          {/* Mentors + Activities */}
          <section className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-sm p-4">Mentors</h3>
              <MentorCard name="Maxwell Smith" role="Product Designer" />
              <MentorCard name="Adeati Samuel" role="Product Designer" />
              <div className="text-center p-4">
                <button className="text-xs bg-purple-100 text-purple-700 px-4 py-1 rounded-full">See all</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-sm p-4">Recent Activities</h3>
              <ActivityCard
                title="KYC Verification"
                description="45 new persons just signed up on Mently."
                timeAgo="25 minutes ago"
              />
              <ActivityCard
                title="New User Sign Up!"
                description="45 new persons just signed up on Mently."
                timeAgo="25 minutes ago"
              />
              <ActivityCard
                title="Withdrawal Request"
                description="Mardian requested a withdrawal."
                timeAgo="25 minutes ago"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
