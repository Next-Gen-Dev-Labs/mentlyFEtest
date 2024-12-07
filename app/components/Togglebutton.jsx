import React, { useState } from "react";

const ToggleButton = () => {
	const [isToggled, setIsToggled] = useState(true);

	return (
		<div
			className="relative w-7 h-[14px] bg-white rounded-full cursor-pointer transition-colors duration-300"
			onClick={() => setIsToggled(!isToggled)}
			aria-label="Toggle Mode"
		>
			<div
				className={`absolute w-2.5 h-2.5 bg-[#1F0954] rounded-full top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
					isToggled ? "right-0.5 " : "left-0.5"
				}`}
			/>
		</div>
	);
};

export default ToggleButton;
