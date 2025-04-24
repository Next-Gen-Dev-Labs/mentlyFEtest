export const Banner = () => {
  return (
    <div className="w-full h-13 rounded-sm bg-custom-1d0 flex items-center px-5 2xl:px-7 justify-between">
      <h4 className="font-semibold text-[26px] -tracking-[1%] text-white">
        Welcome Aboard, Blessing 👋
      </h4>
      <p className="text-xl text-[#BDBDBD] font-semibold">
        We’re thrilled to have you join Techrity Team!
      </p>
      <button className="flex items-center justify-center px-6 py-2.5 rounded-lg h-10 bg-white text-custom-954 text-base font-bold">
        Update Profile
      </button>
    </div>
  );
};
