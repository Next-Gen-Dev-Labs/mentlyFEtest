
import { PieChart, Pie, Tooltip } from "recharts";

const DonutChart = () => {
  // Sample data
  const data = [
      { name: "Geeksforgeeks", students: 400 },
      { name: "Technical scripter", students: 700 },
      { name: "Geek-i-knack", students: 200 },
      { name: "Geek-o-mania", students: 1000 },
  ];

  return (
      <div className=""
      >
          <h1 style={{ color: "green" }}>
              GeeksforGeeks
          </h1>
          
          <PieChart>
              <Tooltip />
              <Pie
                  data={data}
                  dataKey="students"
                  outerRadius={250}
                  innerRadius={150}
                  fill="green"
                  label={({ name, students }) =>
                      `${name}: ${students}`
                  }
              />
          </PieChart>
      </div>
  );
};

export default DonutChart;