'use client';

import React from 'react';

const ClientInput = () => {
  return (
    <input
      className="w-full h-full border border-mentlyBlue rounded-[5px] pl-[3rem] md:pl-[6rem] outline-none text-[12px] md:text-[14px] placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-mentlyGray2 placeholder:font-[400]"
      placeholder="Describe Section Title e.g what you stand to learn"
    />
  );
};

export default ClientInput;
