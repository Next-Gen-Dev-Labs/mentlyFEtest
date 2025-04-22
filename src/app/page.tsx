import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-60 flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-900">
              Welcome Aboard, Blessing 👋
            </h2>
            <p className="text-purple-600">
              We&apos;re thrilled to have you join the Techrity Team!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Update Profile
            </button>
            <div className="flex items-center space-x-2">
              <Image src="/user.png" width={12} height={12} alt="User" className="h-8 w-8 rounded-full" />
              <span>Techrity Foundation Member</span>
            </div>
          </div>
        </header>

        {/* Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Group Calls Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Group Calls</h3>
              <div className="flex space-x-2">
                <button className="border px-4 py-1 rounded">Programs</button>
                <button className="border px-4 py-1 rounded">See All</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">Fundamentals of User Interface & Experience</h4>
                <p className="text-sm text-gray-600 mt-2">
                  This program is a hands-on guide for designers who want to master color theory and confidently apply it to their designs.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-sm">Mentors</span>
                  <div className="flex -space-x-2">
                    <Image src="/mentor1.png" width={12} height={12} alt="Mentor 1" className="h-6 w-6 rounded-full border-2 border-white" />
                    <Image src="/mentor2.png" width={12} height={12} alt="Mentor 2" className="h-6 w-6 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-purple-600">View Details</button>
                  <button className="bg-purple-600 text-white px-4 py-1 rounded">
                    Join Now
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">Colour Hack Practical</h4>
                <p className="text-sm text-gray-600 mt-2">
                  This program is a hands-on guide for designers who want to master color theory and confidently apply it to their designs.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-sm">Mentors</span>
                  <div className="flex -space-x-2">
                    <Image src="/mentor1.png" width={12} height={12} alt="Mentor 1" className="h-6 w-6 rounded-full border-2 border-white" />
                    <Image src="/mentor2.png" width={12} height={12} alt="Mentor 2" className="h-6 w-6 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-purple-600">View Details</button>
                  <button className="bg-purple-600 text-white px-4 py-1 rounded">
                    Assign Mentor
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">Weekly Meeting - Product Testers</h4>
                <p className="text-sm text-gray-600 mt-2">Mon, Jul 30, 2024 • 9:00 - 11:00 AM</p>
                <div className="flex justify-between mt-4">
                  <button className="text-purple-600">View Participants</button>
                  <button className="bg-purple-600 text-white px-4 py-1 rounded">
                    Join Now
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">Weekly Meeting - Product Testers</h4>
                <p className="text-sm text-gray-600 mt-2">Mon, Jul 30, 2024 • 9:00 - 11:00 AM</p>
                <div className="flex justify-between mt-4">
                  <button className="text-purple-600">View Participants</button>
                  <button className="bg-purple-600 text-white px-4 py-1 rounded">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mentors Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Mentors</h3>
              <button className="text-purple-600">See All</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex items-center space-x-4">
                <Image src="/mentor1.png" width={12} height={12} alt="Mentor" className="h-12 w-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Maxwell Smith</h4>
                  <p className="text-sm text-gray-600">maxwell.smith@gmail.com</p>
                  <p className="text-sm text-gray-600">Product Designer • 4 years Experience</p>
                  <p className="text-sm text-gray-600">Lagos, Nigeria • GMT +2</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-red-600">Reject</button>
                <button className="bg-purple-600 text-white px-4 py-1 rounded">
                  Accept
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <Image src="/mentor2.png" width={12} height={12} alt="Mentor" className="h-12 w-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Adeati Samuel</h4>
                  <p className="text-sm text-gray-600">maxwell.smith@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-red-600">Reject</button>
                <button className="bg-purple-600 text-white px-4 py-1 rounded">
                  Accept
                </button>
              </div>
            </div>
          </div>

          {/* Users Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Users</h3>
              <select className="border rounded px-2 py-1">
                <option>All</option>
              </select>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <svg className="w-32 h-32">
                    <circle cx="64" cy="64" r="60" stroke="lightblue" strokeWidth="8" fill="none" />
                    <circle cx="64" cy="64" r="60" stroke="pink" strokeWidth="8" fill="none" strokeDasharray="150 377" />
                    <circle cx="64" cy="64" r="60" stroke="green" strokeWidth="8" fill="none" strokeDasharray="100 377" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">240</span>
                  </div>
                </div>
                <p className="mt-2">Users</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <span className="text-sm">Students: 200</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-sm">Mentors: 8</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                    <span className="text-sm">Programs: 32</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <Image src="/user1.png" width={12} height={12} alt="User" className="h-12 w-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Maxwell Smith</h4>
                  <p className="text-sm text-gray-600">maxwell.smith@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-red-600">Reject</button>
                <button className="bg-purple-600 text-white px-4 py-1 rounded">
                  Accept
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <button className="text-purple-600">See All</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">KYC Verification</h4>
                  <p className="text-sm text-gray-600">49 new persons signed up on Mently, 25 minutes ago</p>
                </div>
                <div>
                  <h4 className="font-semibold">New User Sign Up!</h4>
                  <p className="text-sm text-gray-600">49 new users signed up on Mently, 25 minutes ago</p>
                </div>
                <div>
                  <h4 className="font-semibold">Withdrawal Request</h4>
                  <p className="text-sm text-gray-600">Mardian has requested a withdrawal, 25 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
