import React, { CSSProperties } from "react";
import WidgetBase from "./base";

export default function Forum({ style }: { style?: CSSProperties }) {
	return <WidgetBase title="Forum" style={style}></WidgetBase>;
}
