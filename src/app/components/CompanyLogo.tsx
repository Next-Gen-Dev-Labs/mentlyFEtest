import React from 'react';
import Image from 'next/image';

const CompanyLogo = ({className}: {className?: string}) => {
  return (
    <div className={`w-[47px] h-[32px] ${className}`}>
      <Image
        src="/images/Logomascot.png"
        alt=""
        className="h-auto w-full object-cover"
        width={47}
        height={47}
      />
    </div>
  );
};

export default CompanyLogo;
