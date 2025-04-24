import React from "react";
import Image from "next/image";

const images = [
  {
    img: "/1.png",
  },
  {
    img: "/2.png",
  },
  {
    img: "/3.png",
  },
];

const EclipseImage = () => {
  return (
    <div className="flex -space-x-2">
      {images.map((i) => (
        <div key={i.img} className="inline-block h-8 w-8 rounded-full overflow-hidden">
          <Image
            src={i.img}
            alt="Client"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default EclipseImage;
