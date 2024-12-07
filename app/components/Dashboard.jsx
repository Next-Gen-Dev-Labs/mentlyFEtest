import React, { useState } from "react";
import { DASHBOARD } from "../constants";
import Image from "next/image";
import LocalDateTime from "./LocalTimeDate";
import { inter } from "../fonts";
import Stats from "./Stats";
import Submissions from "./Submissions";
import Leaderboard from "./Leaderboard";
import Schedule from "./Schedule";

const Dashboard = () => {
	const [alertVisible, setAlertVisible] = useState(true);
	const { alert, welcome, stats, program } = DASHBOARD;
	return (
		<div className="mt-[84px] h-[140vh]">
			{alertVisible && (
				<div className="bg-[#64B876] w-full px-8 lg:px-12 py-4 flex gap-4 justify-between items-center">
					<div className="flex gap-3 items-center">
						<Image
							src={alert.icon}
							width={1000}
							height={1000}
							alt="Rocket"
							quality={100}
							className="w-5 h-5 lg:w-7 lg:h-7"
						/>
						<p className="text-white font-bold text-xs lg:text-base">
							{alert.text}
						</p>
					</div>
					<button
						onClick={() => setAlertVisible(false)}
						aria-label="Close alert button"
					>
						<Image
							src={alert.close}
							width={1000}
							height={1000}
							quality={100}
							alt="Close alert"
							className="w-3 h-3"
						/>
					</button>
				</div>
			)}
			<div className="mt-8 flex flex-col mx-6 items-end">
				<LocalDateTime />
			</div>
			<div className="flex flex-col gap-1 my-9 mx-7 sm:mx-10 lg:mx-[4%]">
				<h1 className="text-[#06152B] text-[26px] sm:text-[32px] font-bold">
					{welcome.heading}
				</h1>
				<p
					className={`${inter.className} text-sm sm:text-base text-[#667085]`}
				>
					{welcome.text}
				</p>
			</div>
			<Stats stats={stats} />
			<button aria-label="Create Program" className="py-4 px-5 xl:px-8 bg-[#1F0954] rounded-lg flex items-center gap-2.5 my-9 mx-7 sm:mx-10 lg:mx-[4%]">
				<Image
					src={program.icon}
					width={1000}
					height={1000}
					alt="Plus Icon"
					quality={100}
					className="w-5 h-5"
				/>
				<p className="font-semibold text-white">{program.text}</p>
			</button>
			<div className="flex flex-col lg:flex-row gap-x-6 mt-16 mx-7 sm:mx-10 lg:mx-[4%]">
				<div className="lg:w-[65%]">
					<Submissions />
					<Leaderboard />
				</div>
				<Schedule />
			</div>
		</div>
	);
};

export default Dashboard;
