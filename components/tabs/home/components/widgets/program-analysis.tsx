import React, { CSSProperties } from "react";
import WidgetBase from "./base";

export default function ProgramAnalysis({ style }: { style?: CSSProperties }) {
	return <WidgetBase title="Program Analysis" style={style}></WidgetBase>;
}
