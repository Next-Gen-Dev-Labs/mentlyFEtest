import { Icon } from "@iconify-icon/react";
import React from "react";

export default function Loading() {
	return (
		<Icon
			data-testid="suspense-fallback"
			icon="svg-spinners:block-scale"
			className="fixed text-5xl text-[#6f01d0]"
		/>
	);
}
