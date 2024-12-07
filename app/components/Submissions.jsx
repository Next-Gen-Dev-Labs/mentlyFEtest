import React from "react";
import { DASHBOARD } from "../constants";
import Image from "next/image";

const Submissions = () => {
	const { assessments, more } = DASHBOARD;

	return (
		<div className="shadow-stat py-3 px-3 sm:px-7 h-[200px] rounded-xl">
			<div className="flex justify-between items-center mb-3 sm:mb-7">
				<h1 className="text-[#374557] text-[19px] sm:text-xl xl:text-2xl font-bold">
					{assessments.heading}
				</h1>
				<Image
					src={more}
					width={1000}
					height={1000}
					aria-label="More options"
					alt="More options icon"
					quality={100}
					className="w-4 h-4 sm:w-6 sm:h-6"
				/>
			</div>
			<div className="flex flex-col gap-4 sm:gap-7 overflow-y-auto h-[126px] sm:h-[120px] hide-scrollbar">
				{assessments.submissions.map((item, index) => (
					<div
						key={index}
						className="flex justify-between text-xs border-b-[0.5px] border-[#E0E0E0]"
					>
						<div className="font-semibold">
							{item.name}{" "}
							<span className="text-[#A3A3A3] font-normal">
								{item.week}
							</span>
						</div>
						<div className="text-[#C2C2C2] font-semibold text-left w-[80px]">
							{item.time}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Submissions;
