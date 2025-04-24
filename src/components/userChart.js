"use client";
import { PieChart, Pie, Cell } from "recharts";
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const data = [
  { name: "Students", value: 200, color: "#62B2FD" }, // Blue
  { name: "Mentors", value: 8, color: "#9BDFC4" },    // Purple
  { name: "Programs", value: 22, color: "#F99BAB" },  // Red
  { name: "Others", value: 10, color: "#FFB44F" },    // Yellow
];

export default function UsersChart() {
  const total = data.reduce((acc, item) => acc + item.value, 0);
// Media queries for different screen sizes
const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" }); // xl
const isMediumScreen = useMediaQuery({ query: "(min-width: 1024px)" }); // lg

// Set radius values based on screen size
const innerRadius = isLargeScreen ? 40 : isMediumScreen ? 40 : 40;
const outerRadius = isLargeScreen ? 80 : isMediumScreen ? 70 : 80;
  return (
    <div className="bg-[#E7DDFF4D] rounded-xl w-full lg:w-[300px] xl:w-[329px] border border-[#E1E7EC]">
      <div className="flex justify-between items-center py-3 px-6 border-b border-[#E1E7EC]">
        <h2 className="text-lg font-semibold text-[#595564]">Users</h2>
        <button className="border text-sm px-3 py-2 rounded-md text-[#595564] border-[#E1E7EC] flex items-center gap-3 font-medium">
          All <IoIosArrowDown size={20} className=""/>
        </button>
      </div>

      <div className="flex items-center justify-between py-4 lg:py-9"> 
      <div className="w-[180px] h-[180px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] flex items-center justify-center relative mb-4 ">
  <PieChart width={200} height={200}>
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      paddingAngle={0}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
  <div className="absolute text-center">
    <p className="text-2xl font-bold">{total}</p>
    <p className="text-sm text-gray-500">Users</p>
  </div>
</div>
    

      <div className="space-y-2 w-[121px] lg:w-[111px] mx-2 md:mx-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between text-gray-700 items-center">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full text-xs"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </div>
            <span className="font-bold text-sm">{item.value}</span>
          </div>
        ))}
      </div>
      </div>
      </div> 
  );
}
