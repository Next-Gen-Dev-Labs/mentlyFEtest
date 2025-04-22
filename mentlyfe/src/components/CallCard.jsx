export default function CallCard({ call }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-500";
      case "Upcoming":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <span
          className={`w-2 h-2 rounded-full ${getStatusColor(call.status)} mr-2`}
        ></span>
        <span className="text-xs text-gray-500">{call.status}</span>
      </div>

      <h3 className="font-medium text-sm mb-4">{call.title}</h3>

      <div className="mb-4">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {call.time} • {call.date}
        </div>

        <div className="flex items-center text-xs text-gray-500">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          {call.host}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          {call.participants} in study group
        </div>

        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition-colors duration-200">
            View Participants
          </button>
          <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
