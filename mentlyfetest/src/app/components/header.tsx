export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 mt-4 w-screen bg-[#340260] shadow-md rounded-lg flex-wrap sm:flex-nowrap">
      {/* Welcome Text */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <p className="text-[26.1px] font-bold text-white">
          Welcome Aboard, Blessing 👋
        </p>
        <p className="text-[#BDBDBD] mt-1 text-[20px] font-bold sm:mt-0">
          We’re thrilled to have you join Techrity Team!
        </p>
      </div>

      {/* Update Profile Button */}
      <button className="bg-white text-[#340260] px-4 py-2 rounded hover:bg-purple-200 transition mt-4 sm:mt-0">
        Update Profile
      </button>
    </div>
  );
}
