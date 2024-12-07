import React from "react";
import { DASHBOARD } from "../constants";

const getOrdinalSuffix = (day) => {
	if (day % 100 >= 11 && day % 100 <= 13) return "th";
	switch (day % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};

export const getFormattedDate = () => {
	const { date, of } = DASHBOARD.schedule.date;
	const now = new Date();
	const day = now.getDate();
	const dayOfWeek = now.toLocaleString(undefined, { weekday: "long" });
	const month = now.toLocaleString(undefined, { month: "long" });
	const year = now.getFullYear();
	return `${date} ${dayOfWeek} ${day}${getOrdinalSuffix(
		day
	)} ${of} ${month}, ${year}.`;
};

const LocalDateTime = () => {
	const now = new Date();

	const day = now.getDate();
	const month = now.toLocaleString(undefined, { month: "long" });
	const year = now.getFullYear();
	const hours = now.getHours() % 12 || 12;
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const period = now.getHours() >= 12 ? "PM" : "AM";

	const formattedDateTime = `${day}${getOrdinalSuffix(
		day
	)} ${month} ${year}, ${hours}:${minutes} ${period}`;

	return (
		<div className="text-[#809FB8] text-sm sm:text-base">
			{formattedDateTime}{" "}
			<span className="text-xs">{DASHBOARD.time}</span>
		</div>
	);
};

export default LocalDateTime;
