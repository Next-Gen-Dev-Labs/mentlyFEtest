import React from 'react';

const AddSection = () => {
  return (
    <div className="hover:text-white hover:bg-mentlyBlue transition-all duration-600 cursor-pointer border border-mentlyBlue w-full h-[64px] rounded-[8px] flex flex-col justify-center items-center text-[#494A71] mb-2">
      <p className="font-[500] flex gap-[1.5rem]">
        <span>+</span>Add new section
      </p>
      <p className="text-[12px] text-[#777795] font-[500]">
        (maximum number of sections to add is 3)
      </p>
    </div>
  );
};

export default AddSection;
