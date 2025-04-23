export default function UsersSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-700">Users</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 text-sm border rounded px-2 py-1">
            <span>All</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">240</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
          </div>
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="10" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="200"
              strokeDashoffset="50"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="10"
              strokeDasharray="200"
              strokeDashoffset="150"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="10"
              strokeDasharray="200"
              strokeDashoffset="180"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ef4444"
              strokeWidth="10"
              strokeDasharray="200"
              strokeDashoffset="190"
            />
          </svg>
        </div>

       
        <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-sm">Students</span>
                  </div>
                  <span className="font-medium">200</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    <span className="text-sm">Mentors</span>
                  </div>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm">Programs</span>
                  </div>
                  <span className="font-medium">22</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span className="text-sm">Others</span>
                  </div>
                  <span className="font-medium">10</span>
                </div>
          </div>



  
      
        </div>

     
    </div>
  )
}
