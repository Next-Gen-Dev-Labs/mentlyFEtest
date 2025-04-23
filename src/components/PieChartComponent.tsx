"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 200, label: "Students" },
  { value: 8, label: "Mentors" },
  { value: 22, label: "Programs" },
  { value: 10, label: "Others" },
];

const size = {
  width: 250,
  height: 250,
};

const StyledValueText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 24,
  fontWeight: 700,
}));

const StyledLabelText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.secondary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

function PieCenterLabel() {
  const { width, height, left, top } = useDrawingArea();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  return (
    <React.Fragment>
      <StyledValueText x={centerX} y={centerY - 10}>
        240
      </StyledValueText>
      <StyledLabelText x={centerX} y={centerY + 15}>
        Users
      </StyledLabelText>
    </React.Fragment>
  );
}

export default function PieChartComponent() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel />
    </PieChart>
  );
}
