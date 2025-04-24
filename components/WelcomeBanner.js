export default function WelcomeBanner() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-purple-800 text-purple-100 font-semibold text-lg sm:px-6 px-4 py-3 sm:py-2 rounded-md shadow">
      <div className="flex flex-col sm:flex-row sm:gap-2">
        <span className="text-[15px] font-semibold text-center sm:text-left">
          Welcome Aboard, Blessing 👋
        </span>
        <span className="text-[12px] text-center sm:text-left">
          We're thrilled to have you join Techrity Team!
        </span>
      </div>

      <button className="bg-white text-black text-[12px] font-medium sm:px-4 sm:py-1.5 px-3 py-1 mt-3 sm:mt-0 rounded-md shadow hover:bg-gray-100 transition">
        Update Profile
      </button>
    </div>
  );
}
