import React from "react";

const Stats = ({ stats }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-y-6 flex-wrap sm:justify-between my-9 mx-7 sm:mx-10 lg:mx-[4%]">
			{stats.map((item, index) => (
				<div
					key={index}
					className="flex flex-col gap-12 p-3 xl:p-4 rounded-xl bg-white shadow-stat sm:w-[48%] lg:w-[23.5%] transform transition-transform duration-300 hover:scale-110"
				>
					<p className="text-[#494A71] 2xl:text-base xl:text-sm lg:text-[12px]">
						{item.type}
					</p>
					<p className="text-[#06152B] text-[55px] sm:text-[48px] md:text-[44px] lg:text-[34px] xl:text-[44px] 2xl:text-[48px] font-bold">
						{item.value}{" "}
						<span className="text-[20px] lg:text-xs xl:text-sm font-medium">
							{item.unit}
						</span>
					</p>
				</div>
			))}
		</div>
	);
};

export default Stats;
