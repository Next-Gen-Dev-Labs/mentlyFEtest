import React, { CSSProperties } from "react";
import WidgetBase from "./base";

export default function Earnings({ style }: { style?: CSSProperties }) {
	return <WidgetBase title="Earnings" style={style}></WidgetBase>;
}
