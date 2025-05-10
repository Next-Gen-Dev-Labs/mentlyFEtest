import Image from "next/image";
import React from "react";

const MentorsIcons = ({data,width,height}) => {
  return (
    <div className="flexStart ">
      {
        data.map((each, i) => (
          <Image
            width={width?width:13.91}
            height={height?height:13.19}
            className={` rounded-full ${i > 0 && "ms-[-4.18px]"} w-[${width?width:13.91}] h-[${height?height:13.91}] `}
            key={i}
            src={each}
            alt="mentors"
            loading="lazy"
            
          />
        ))}
    </div>
  );
};

export default MentorsIcons;
