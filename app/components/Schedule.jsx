import React from "react";
import { DASHBOARD } from "../constants";
import Image from "next/image";
import { getFormattedDate } from "./LocalTimeDate";
import { poppins } from "../fonts";

const Schedule = () => {
	const { schedule, more } = DASHBOARD;
	const formattedDate = getFormattedDate();
	return (
		<div className="mb-5 max-h-max shadow-stat py-3 px-4 rounded-xl">
			<div className="flex justify-between items-center mb-2">
				<h1 className="text-[#374557] text-xl xl:text-2xl font-bold">
					{schedule.heading}
				</h1>
				<Image
					src={more}
					aria-label="More options"
					width={1000}
					height={1000}
					alt="More Options"
					quality={100}
					className="w-6 h-6"
				/>
			</div>
			<p className="text-xs text-[#A098AE] mb-6 md:mb-10">
				{formattedDate}
			</p>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[337px] hide-scrollbar">
				{schedule.items.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-[76px] rounded-2xl border-l-[16px] border-[#DCDCE5] px-4 py-2"
					>
						<div className="flex flex-col gap-2">
							<p className="text-[#374557] text-sm">
								{item.name}
							</p>
							<div className="flex flex-wrap gap-y-2 gap-3 justify-between text-[10px] text-[#A098AE]">
								{item.details.map((item, index) => (
									<div className="flex gap-2" key={index}>
										<Image
											src={item.icon}
											width={1000}
											height={1000}
											alt={item.iconName}
											quality={100}
											className="w-3 h-3"
										/>
										<p className={poppins.className}>
											{item.datetime}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="flex items-center relative mb-3">
							{item.attendees.map((attendee, index) => (
								<Image
									key={index}
									src={attendee}
									width={32}
									height={32}
									alt="Attendee"
									quality={100}
									className="rounded-full border-2 border-white w-6 h-6"
									style={{
										position: "absolute",
										left: `${index * 15}px`,
										zIndex: index,
									}}
								/>
							))}
							<span
								className="absolute text-[9px] text-[#D25B68] w-6 h-6 rounded-full bg-[#F4D7DA] border-[0.6px] border-[#FFFFFF] flex items-center justify-center"
								style={{
									left: `${item.attendees.length * 15}px`,
									zIndex: item.attendees.length,
								}}
							>
								{item.others}
							</span>
							<p
								className="absolute text-[#A098AE] text-[10px]"
								style={{
									left: `${
										(item.attendees.length + 2) * 15
									}px`,
								}}
							>
								{item.attending}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Schedule;
