import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { data } from "@/constants";

export default function UsersSection() {


  const COLORS = ["#62B2FD", "#9F97F7", "#FFB44F", "#F99BAB"];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:max-w-[329px] w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-semibold text-gray-700">Users</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-16 text-xs">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="students">Students</SelectItem>
              <SelectItem value="mentors">Mentors</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-row items-center">
          <div className="h-48 w-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold">240</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
          </div>

          <div className="flex flex-col gap-[13px] w-full max-w-[111px] mt-4">
            {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2 flex-sh
              ">
                <div
                  className="h-[7px] w-[8px] rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs text-gray-600">{item.name}</span>
                  <span className="text-xs font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
