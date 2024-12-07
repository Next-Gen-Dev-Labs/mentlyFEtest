import Image from "next/image";
import React, { useState } from "react";
import { SIDENAV } from "../constants";
import ToggleButton from "./Togglebutton";

const Sidenav = ({ isOpen, toggleSidenav }) => {
	const [hovered, setHovered] = useState(null);
	const { mascot, logo, sidebar, navitems, help, mode } = SIDENAV;

	return (
		<div
			className={`bg-[#1F0954] w-56 fixed top-0 h-full z-50 transform transition-transform duration-300 
			${isOpen ? "translate-x-0" : "-translate-x-56"}`}
		>
			<div className="flex pl-6 pr-4 pt-5 pb-7 items-center justify-between">
				<div className="flex gap-2">
					<Image
						src={mascot}
						width={1000}
						height={1000}
						alt="Mascot"
						quality={100}
						className="w-auto"
					/>
					<Image
						src={logo}
						width={1000}
						height={1000}
						alt="Logo"
						quality={100}
						className="w-auto"
					/>
				</div>
				<Image
					src={sidebar}
					width={1000}
					height={1000}
					alt="Toggle Sidebar Icon"
					quality={100}
					className="w-5 h-5 cursor-pointer"
					onClick={toggleSidenav}
				/>
			</div>
			<div className="flex flex-col px-5 w-full gap-1.5 text-[#C2C2C2]">
				{navitems.map((item, index) => (
					<div
						key={index}
						onMouseEnter={() => setHovered(index)}
						onMouseLeave={() => setHovered(null)}
						className={`flex flex-col py-2.5 items-center px-8 rounded-lg text-sm hover:bg-white hover:text-[#1F0954] ${
							index === 0
								? "bg-white text-[#1F0954] font-medium"
								: ""
						} ${index === 7 ? "mt-6" : ""} ${
							item.tag ? "relative" : ""
						}`}
					>
						{item.tag && (
							<p className="text-[9px] text-[#EFEFF8] absolute top-0.5 right-0.5 bg-[#0214BD38] rounded-2xl leading-[15px] py-0 px-1">
								{item.tag}
							</p>
						)}
						<div
							className={`flex gap-8 w-full items-center ${
								item.tag ? "mt-1" : ""
							}`}
						>
							<Image
								src={
									hovered === index && item.activeicon
										? item.activeicon
										: item.icon
								}
								width={1000}
								height={1000}
								alt={`${item.name} Icon`}
								quality={100}
								className="w-4 h-4"
							/>
							<p>{item.name}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mx-2.5 mt-5">
				<div className="p-3 rounded-lg w-full flex flex-col gap-4 bg-[#FFFFFF1F]">
					<Image
						src={help.icon}
						width={1000}
						height={1000}
						alt="Help Icon"
						quality={100}
						className="w-4 h-4"
					/>
					<p className="text-white font-bold text-[11px] leading-[13px]">
						{help.text}
					</p>
					<p className="text-[#F0C074] cursor-pointer underline text-[10px] leading-[11px]">
						{help.link}
					</p>
				</div>
			</div>
			<div className="flex justify-between mx-3 mt-7">
				<p className="text-white font-bold text-[11px] leading-[13px]">
					{mode}
				</p>
				<ToggleButton />
			</div>
		</div>
	);
};

export default Sidenav;
