"use client";
import React from "react";
import Image from "next/image";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "@/context/modal-context";
import WidgetModal from "../modals/widget-modal";

function Header() {
  return (
    <header className="bg-white shadow w-full sticky top-0 left-0 z-1000">
      <div className="flex gap-x-3 py-2 px-3 md:px-6 lg:px-10 items-center justify-end">
        {/*notification */}
        <div className="relative mr-4">
          {/* <span className="absolute bg-red-500 h-2 w-2 rounded-full -top-[2px] right-[1px]" /> */}
          <span className="absolute bottom-0 h-2 w-2 bg-red-500 rounded-full -top-[2px] right-[1px]">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red-400"></span>
          </span>
          <GoBell size={18} />
        </div>
        {/*user details */}
        <div className="flex gap-x-2 items-center">
          <span className="bg-[#8b72fc] h-10 w-10 rounded-full grid place-items-center">
            <Image
              src="./user2.svg"
              className="rounded-full object-cover "
              alt="user"
              width={32}
              height={32}
            />
          </span>
          <div className="text-sm max-w-[106px]">
            <p className="text-[#404040] text-sm md:text-base truncate">
              Techrity Foundation
            </p>
            <p className="text-[#53547b] text-xs">Member</p>
          </div>
        </div>
        {/* dropdown */}
        <Modal>
          <Modal.Open opens="widget">
            <button className="bg-[#6f01d0] h-5 w-6 rounded-md grid place-items-center text-white cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out">
              <IoIosArrowDown className="text-[#c2c2c2]" />
            </button>
          </Modal.Open>
          <Modal.Window name="widget" allowOutsideClick showCloseBtn>
            <WidgetModal />
          </Modal.Window>
        </Modal>
      </div>
    </header>
  );
}

export default Header;
