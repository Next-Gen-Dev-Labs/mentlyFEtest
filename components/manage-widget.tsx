import Image from "next/image";
import ManageWidgetModal from "./modal";
import { useState } from "react";


const ManageWidget = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-end items-center p-4">
      <div className="flex gap-6 cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <Image
          src="/images/view-mirrored.png"
          alt="Logo"
          width={100}
          height={100}
          className="size-6"
        />
        <Image
          src="/images/gallery-thumbnail.png"
          alt="Logo"
          width={100}
          height={100}
          className="size-6"
        />
        <p className="text-[16px] font-bold text-[#1F0954] capitalize">
          manage widgets
        </p>
      </div>
      <ManageWidgetModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}

export default ManageWidget;