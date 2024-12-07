import React, { useState } from "react";
import { DASHBOARD } from "../constants";
import Image from "next/image";

const Leaderboard = () => {
	const { leaderboard, more } = DASHBOARD;
	const [activeTab, setActiveTab] = useState(leaderboard.tab[0]);

	const participants =
		activeTab === "Custom"
			? leaderboard.participants
			: leaderboard.participants.filter((item) => item.tab === activeTab);

	const changeTab = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="my-7 lg:my-10 shadow-stat py-3 px-3 sm:px-7 h-[200px] rounded-xl">
			<div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-7 gap-y-2 sm:items-center">
				<h1 className="text-[#374557] text-xl xl:text-2xl font-bold">
					{leaderboard.heading}
				</h1>
				<div className="flex gap-1 sm:gap-2 xl:gap-5 sm:justify-normal justify-between items-center">
					<div className="flex rounded-lg border border-[#DCDCE5] overflow-hidden">
						{leaderboard.tab.map((item, index) => (
							<div
								key={index}
								onClick={() => changeTab(item)}
								className={`px-2 py-1 text-xs cursor-pointer ${
									activeTab === item
										? "bg-[#1F0954] text-white"
										: "bg-white text-[#4F4F4F]"
								}`}
							>
								{item}
							</div>
						))}
					</div>
					<Image
						src={more}
						aria-label="More options"
						width={1000}
						height={1000}
						alt="More options"
						quality={100}
						className="w-4 h-4 sm:w-6 sm:h-6"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2 overflow-y-auto h-[90px] sm:h-[120px] hide-scrollbar">
				{participants.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-between"
					>
						<div className="flex gap-3 sm:gap-6 items-center">
							<div>
								{index === 0 ? (
									<Image
										src={leaderboard.leadericon}
										alt={index + 1}
										width={40}
										height={40}
										className="w-4 h-4 sm:w-6 sm:h-6"
									/>
								) : (
									<div className="px-1 sm:px-[7px]">
										{index + 1}
									</div>
								)}
							</div>
							<div className="flex text-xs sm:text-sm items-center gap-4">
								<Image
									src={item.image}
									alt={item.name}
									width={40}
									height={40}
									className="rounded-full object-cover w-8 h-8"
								/>
								<span className="font-semibold text-[#374557]">
									{item.name}
								</span>
							</div>
						</div>
						<div className="text-[#374557] text-xs sm:text-sm font-medium">
							{item.points}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Leaderboard;
