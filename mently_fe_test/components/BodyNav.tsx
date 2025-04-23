import React from "react";

const BodyNav = () => {
  return (
    <div className="bg-[#6F01D0] flex items-center justify-center gap-2 p-2 rounded">
      <h2 className="text-[#FFFFFF] text-[26px] font-bold">
        Welcome Aboard, Blessing 👋
      </h2>
      <p className="text-[#BDBDBD] text-[20px] font-bold">
        We're thrilled to have you join Techrity Team!
      </p>
      <button className="bg-[#FFFFFF] text-[#1F0954] py-1 font-bold text-[16px] p-4 rounded">
        Update Profile
      </button>
    </div>
  );
};

export default BodyNav;
