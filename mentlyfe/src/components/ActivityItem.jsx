export default function ActivityItem({ activity }) {
  const getIconColor = (type) => {
    if (type.includes("KYC")) return "bg-yellow-500";
    if (type.includes("Sign Up")) return "bg-purple-500";
    if (type.includes("Withdrawal")) return "bg-green-500";
    return "bg-blue-500";
  };

  return (
    <div className="flex items-start">
      <div
        className={`w-8 h-8 rounded-full ${getIconColor(
          activity.type
        )} mr-3 flex items-center justify-center text-white`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div>

      <div>
        <div className="font-medium text-sm">{activity.type}</div>
        <div className="text-xs text-gray-600">{activity.description}</div>
        <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
      </div>
    </div>
  );
}
