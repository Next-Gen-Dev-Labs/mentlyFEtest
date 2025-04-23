const userStats = [
  { label: "Students", value: 200, color: "bg-[#62B2FD]" },
  { label: "Mentors", value: 8, color: "bg-[#9BDFC4]" },
  { label: "Programs", value: 22, color: "bg-[#F99BAB]" },
  { label: "Others", value: 10, color: "bg-[#FFB44F]" },
];

export function UserStats() {
  return (
    <div className="pb-4 flex flex-col gap-4">
      {userStats.map((e, index) => (
        <div key={index} className="flex items-center gap-8">
          <div className="flex gap-2">
            <div className={`w-3 h-3 rounded-full ${e.color}`}></div>
            <span className="text-[10px] text-[#595564]">{e.label}</span>
          </div>
          <span className="ml-auto font-bold text-[12px] self-end text-[#595564]">
            {e.value}
          </span>
        </div>
      ))}
    </div>
  );
}
