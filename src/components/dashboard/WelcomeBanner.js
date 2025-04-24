// components/dashboard/WelcomeBanner.jsx
export default function WelcomeBanner({ name }) {
    return (
        <div className="bg-primary  py-2 px-4 rounded-lg flex justify-between items-center mb-6">
            <div className="flex items-center ">
                <h1 className="md:text-base lg:text-base xl:text-xl 2xl:text-xl text-xs whitespace-nowrap text-white font-bold">Welcome Aboard, {name} 👋</h1>
                <p className="ml-4 hidden md:text-[10px] lg:block lg:text-xs text-gray-300 font-bold">We&apos;re thrilled to have you join Techrity Team!</p>
            </div>
            <button className="bg-white text-primary text-[8px] md:text-base  font-bold whitespace-nowrap md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primaryDark hover:text-white transition-colors">
                Update Profile
            </button>
        </div>
    );
}