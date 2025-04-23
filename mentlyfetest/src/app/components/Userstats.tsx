"use client";

import { useEffect, useRef } from "react";

export default function UsersPieChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const size = 240;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;

    // Data for the pie chart
    const data = [
      { label: "Students", value: 200, color: "#3B82F6" },
      { label: "Mentors", value: 8, color: "#F59E0B" },
      { label: "Programs", value: 22, color: "#10B981" },
      { label: "Others", value: 10, color: "#6366F1" },
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Draw the pie chart
    let startAngle = 0;
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total;

      ctx.beginPath();
      ctx.fillStyle = item.color;
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, 100, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      startAngle += sliceAngle;
    });

    // Draw center circle (white)
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI);
    ctx.fill();

    // Draw text in center
    ctx.fillStyle = "#111827";
    ctx.font = "bold 24px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("240", centerX, centerY - 10);

    ctx.fillStyle = "#6B7280";
    ctx.font = "14px Inter, sans-serif";
    ctx.fillText("Users", centerX, centerY + 15);
  }, []);

  return (
    <div className="w-[329px] h-[320px] bg-white shadow-lg rounded-lg p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E1E7EC]">
        <h1 className="text-base font-semibold text-gray-800">Users</h1>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500">Filter</span>

          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-md px-2 py-1 pr-6 bg-white text-sm text-gray-700 w-24">
              <option>Active</option>
              <option>Inactive</option>
              <option>All</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <svg
                className="w-3 h-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Legend Section */}
      <div className="flex items-start mt-3 gap-3">
        <canvas
          ref={canvasRef}
          aria-label="Users distribution pie chart"
          role="img"
          className="w-[150px] h-[150px] flex-shrink-0"
        ></canvas>

        {/* Legends */}
        <div className="flex flex-col gap-1 w-full">
          {[
            { color: "bg-blue-500", label: "Students", value: 200 },
            { color: "bg-amber-500", label: "Mentors", value: 8 },
            { color: "bg-emerald-500", label: "Programs", value: 22 },
            { color: "bg-indigo-500", label: "Others", value: 10 },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 space-y-4 mt-6">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
              <span className="text-xs text-gray-700">{item.label}</span>
              <span className="ml-auto text-xs font-semibold text-gray-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
