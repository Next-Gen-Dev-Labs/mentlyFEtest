export const Banner = () => {
  return (
    <div className="w-full h-auto lg:h-13 rounded-sm bg-custom-1d0 flex flex-col lg:flex-row items-center py-2 px-2.5 2xl:px-7 gap-2 justify-between">
      <h4 className="font-semibold text-lg lg:text-[26px] -tracking-[1%] text-white">
        Welcome Aboard, Blessing 👋
      </h4>
      <p className="text-sm lg:text-xl text-[#BDBDBD] font-semibold">
        We’re thrilled to have you join Techrity Team!
      </p>
      <button className="flex items-center justify-center px-6 py-2.5 rounded-lg h-10 bg-white text-custom-954 text-xs lg:text-base font-medium lg:font-bold">
        Update Profile
      </button>
    </div>
  );
};
