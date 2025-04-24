"use client";
import Header from "@/components/header";
import Image from "next/image";
import SideModal from "@/components/widgets-sidebar";
import { useState } from "react";

export default function Home() {
  const [isWidgetModalOpen, setWidgetModalOpen] = useState(false);
  const user = {
    name: "Blessing",
  };
  return (
    <>
      {isWidgetModalOpen ? (
        <SideModal
          isModalOpen={isWidgetModalOpen}
          setModalOpen={setWidgetModalOpen}
        />
      ) : (
        ""
      )}
      <Header />
      <div className="px-7 pb-7 bg-gray-100">
        <div className="flex flex-row justify-center lg:justify-end text-[#1F0954] py-5">
          <button
            className="cursor-pointer flex flex-row item-center gap-x-4"
            onClick={() => setWidgetModalOpen(true)}
          >
            <Image
              src="/icons/manage-widgets-button.png"
              alt="Manage Widgets Button"
              width={78}
              height={26}
            />
            <p className="font-semibold">Manage Widgets</p>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#6F01D0] text-white rounded-md py-4 lg:py-2 px-5 gap-y-2 lg:gap-0 mb-3">
          <h1 className="text-xl">Welcome Aboard, {user.name} 👋</h1>
          <h2 className="text-lg text-[#BDBDBD]">
            We're thrilled to have you join Techrity Team!
          </h2>
          <button className="cursor-pointer font-semibold text-sm bg-white text-[#1F0954] px-5 py-2 rounded-md">
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}
