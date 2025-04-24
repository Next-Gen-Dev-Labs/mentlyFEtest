import { IoIosArrowDown } from "react-icons/io";
import { UserChart } from "../chart";
import { GoDotFill } from "react-icons/go";
// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const data = [
//   { name: "Students", value: 200 },
//   { name: "Mentors", value: 8 },
//   { name: "Programs", value: 22 },
//   { name: "Others", value: 10 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Users() {
  return (
    <div className="bg-[#e7ddff] row-start-6 md:row-auto border border-gray-300 rounded-xl col-start-1 col-span-1 h-fit">
      <div className="border-b border-gray-300 flex items-center justify-between py-3 px-5">
        <p className="font-bold text-lg text-[#595564]">Users</p>
        <div className="border border-gray-300 rounded flex items-center gap-x-3 py-1 px-3 cursor-pointer text-[#595564]">
          All
          <IoIosArrowDown />
        </div>
      </div>

      {/*charts */}
      <div className="flex items-center justify-center relative">
        <UserChart />

        {/* <div className="absolute top-1/2 left-[12%] -translate-y-1/2 bg-white rounded-full h-20 w-20 flex flex-col items-center justify-center">
          <p className="font-semibold text-xl">240</p>
          <p className="text-gray-500 text-xs">Users</p>
        </div> */}

        <ul className="space-y-2 px-3">
          <li className="flex items-center justify-between text-sm gap-x-3">
            <span className="flex items-center gap-x-[2px]">
              <GoDotFill size={13} color="#62b2fd" />
              <p className="text-gray-500">Students</p>
            </span>
            <p className="font-semibold text-gray-600">200</p>
          </li>
          <li className="flex items-center justify-between text-sm gap-x-3">
            <span className="flex items-center gap-x-[2px]">
              <GoDotFill size={13} color="#98df64" />
              <p className="text-gray-500">Mentors</p>
            </span>
            <p className="font-semibold text-gray-600">8</p>
          </li>
          <li className="flex items-center justify-between text-sm gap-x-3">
            <span className="flex items-center gap-x-[2px]">
              <GoDotFill size={13} color="#F99bab" />
              <p className="text-gray-500">Programs</p>
            </span>
            <p className="font-semibold text-gray-600">22</p>
          </li>
          <li className="flex items-center justify-between text-sm gap-x-3">
            <span className="flex items-center gap-x-[2px]">
              <GoDotFill size={13} color="#ffb44f" />
              <p className="text-gray-500">Others</p>
            </span>
            <p className="font-semibold text-gray-600">10</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Users;
