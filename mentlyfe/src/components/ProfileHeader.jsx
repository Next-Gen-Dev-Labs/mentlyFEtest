export default function ProfileHeader() {
  return (
    <div className="bg-white p-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-200">
      <div className="flex items-center mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">
          Welcome <span className="text-purple-600">Peter Jonathan-Hart</span>{" "}
          👋
          <span className="ml-4 text-gray-500 text-base">
            We're thrilled to have you join Techrity Team!
          </span>
        </h1>
      </div>

      <div className="flex items-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200">
          Update Profile
        </button>
        <div className="ml-4 relative">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer">
            <span className="text-white">T</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
