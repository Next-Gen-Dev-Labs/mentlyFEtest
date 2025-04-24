import Image from "next/image";

export const ImageStack = ({ images }: { images: Array<string> }) => {
  return (
    <div className="flex h-[13px] -space-x-[5px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="image"
          width={13}
          height={13}
          className="rounded-full size-full object-center object-cover shadow-images"
          loading="lazy"
        />
      ))}
    </div>
  );
};
