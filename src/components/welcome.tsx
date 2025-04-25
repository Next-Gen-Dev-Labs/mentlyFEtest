import React from "react";
import Image from 'next/image';

import Menu from "../../public/svg/menu.svg"
import ImgMenu from "../../public/svg/img-1.svg"

export default function Welcome() {
	return (
		<>
			<div className="flex justify-between items-center px-6 py-3">
				<div></div>
				<div className="flex items-center">
					<button className="p-2 rounded-l cursor-pointer">
						<Image src={Menu} alt="img-menu" width={25} height={25} unoptimized />
					</button>
					<button className="p-2 rounded-r cursor-pointer">
						<Image src={ImgMenu} alt="menu" width={25} height={25} unoptimized />
					</button>
					<button className="ml-4 px-4 text-[#1F0954] flex items-center font-bold">
						<span>Manage Widgets</span>
					</button>
				</div>
			</div>

			<div className="mx-6 px-8 mb-6 bg-[#6F01D0] rounded-lg p-4 text-white flex justify-between items-center">
				<div className="flex gap-x-15">
					<h1 className="text-[27px] font-bold flex items-center inline">
						Welcome Aboard, Blessing <span className="ml-2">
						<Image src="/img/waving-hand.png" alt="waving emoji" className="inline-block" width={30} height={30}/>
						</span>
					</h1>

					<p className="mt-1 inline text-[#BDBDBD] text-[20px]">We&apos;re thrilled to have you join Techrity Team!</p>
				</div>

				<button className="bg-white text-purple-800 px-4 py-2 border border-white rounded font-medium cursor-pointer hover:bg-transparent hover:text-white transition delay-100 duration-300">
					Update Profile
				</button>
			</div>
		</>
	);
}
