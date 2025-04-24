/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Students", "Mentors", "Programs", "Others"],
  datasets: [
    {
      label: "Users",
      data: [200, 8, 22, 10],
      backgroundColor: ["#5AAEFF", "#9FE5D1", "#F78FB3", "#FFB84D"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: any) => {
    const { width } = chart;
    const { height } = chart;
    const ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 100).toFixed(2);
    ctx.font = `${fontSize}em Chivo`;
    ctx.textBaseline = "middle";
    ctx.fontWeight = "bold";

    const text = "240";
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2 - 10;

    ctx.fillStyle = "#000";
    ctx.fillText(text, textX, textY);
    ctx.font = `0.8em sans-serif`;
    ctx.fillText("Users", width / 2 - 22, textY + 20);
    ctx.save();
  },
};

const UserChart = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-[180px] h-[180px]">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <div className="mt-6 space-y-2">
        {[
          { label: "Students", value: 200, color: "rgb(78, 169, 245)" },
          { label: "Mentors", value: 8, color: "rgb(152, 223, 175)" },
          { label: "Programs", value: 22, color: "rgb(255, 148, 148)" },
          { label: "Others", value: 10, color: "rgb(255, 183, 98)" },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[#595564] text-[10px]">{item.label}</span>
            </div>
            <span className="text-[#595564] text-xs font-bold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserChart;
