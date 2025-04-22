// src/components/WelcomeBanner.tsx
interface WelcomeBannerProps {
    name: string;
  }
  
  const WelcomeBanner = ({ name }: WelcomeBannerProps) => {
    return (
      <div className="bg-[#6F01D0] text-white px-6 py-4 rounded-xl flex items-center justify-between">
        <div className="text-lg font-semibold">
          Welcome Aboard, {name} 👋
        </div>
        <div className="text-sm font-medium hidden md:block">
          We’re thrilled to have you join Techrity Team!
        </div>
        <button className="bg-white text-[#7300E6] font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
          Update Profile
        </button>
      </div>
    );
  };
  
  export default WelcomeBanner;
  