"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {boxes} from "@/data/dashboard.json"

const data = [
    { "id": 0, "value": 200,"color": "#62B2FD", "label": "Students" },
    { "id": 1, "value": 8,"color": "#9BDFC4", "label": "Mentors" },
    { "id": 2, "value": 22,"color": "#F99BAB", "label": "Programs" },
    { "id": 3, "value": 10,"color": "#FFB44F", "label": "Others " }
  ]


export default function UserBox() {
  const [radius, setRadius] = React.useState(50);

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);


  const totalValue = React.useMemo(() => {
    return data.reduce((sum, item) => sum + item.value, 0);
  }, [data]);


  if (!hasMounted) return null;

  return (
    <>
      {/* filter */}
      <fieldset className="flexBetween gap-x-[11px] mt-[20.46px] border-b-[1px] border-[#E1E7EC] pb-[19px] mb-[36px] ">
        <label
          className="font-Chivo font-[500] text-[11.26px] text-neutral-600 "
          htmlFor="filter"
        >
          {" "}
          {boxes.users.filter.label}{" "}
        </label>
        <select
          className="outline-none border-[0.8px] border-gray-903 py-[6.43px] px-[9.65px] rounded-[3.22px] font-Chivo font-[500] text-[11.26px] text-gray-800 "
          name="filter"
          id="filter"
        >
          {boxes.users.filter.selects.map((each, i) => (
            <option
              key={i}
              className="border-none outline-none font-Chivo font-[500] text-[11.26px] text-gray-800 "
              value={each}
            >
              {" "}
              {each}{" "}
            </option>
          ))}
        </select>
      </fieldset>
      <div className="relative ">
      <PieChart
        series={[
          {
            data: data,
            innerRadius: radius,
            arcLabel: (params) => "",
            arcLabelMinAngle: 20,
          },
        ]}
        width={200}
        height={200}
      />
      <div className="absolute top-[68.34px] left-[77.5px] flexCol justify-center w-[45px] gap-[4.63px] ">
        <span className="font-Chivo font-[700] text-[24px] text-[#222529] "> {totalValue} </span>
        <span className="font-Chivo font-[400] text-[12px] text-[#595564] "> Users </span>
      </div>
      </div>
    </>
  );
}
