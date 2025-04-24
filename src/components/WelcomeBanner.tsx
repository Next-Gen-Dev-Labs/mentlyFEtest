'use client';

const WelcomeBanner = () => {
  return (
    <div className="bg-[#6F01D0] p-2 mb-8 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-white text-2xl pl-8 font-semibold">
            Welcome Aboard, Blessing 👋
          </h1>
          <div className="flex items-center gap-20">
            <p className="text-lg text-[#BDBDBD]">
              We're thrilled to have you join Techrity Team!
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner; 