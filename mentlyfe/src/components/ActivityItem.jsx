import Image from "next/image";

export default function ActivityItem({ activity }) {
  const getIconColor = (type) => {
    if (type.includes("KYC")) return "bg-yellow-500";
    if (type.includes("Sign Up")) return "bg-purple-500";
    if (type.includes("Withdrawal")) return "bg-green-500";
    return "bg-blue-500";
  };

  return (
    <div className="flex items-start">
      <div
        className={`w-10 h-10 rounded-full bg-gray-200 ${getIconColor(
          activity.type
        )} mr-3 flex items-center justify-center text-white`}
      >
        <Image
          src={activity.image}
          alt={activity.name}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>

      <div>
        <div className="font-medium text-sm">{activity.type}</div>
        <div className="text-xs text-gray-600">{activity.description}</div>
        <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
      </div>
    </div>
  );
}
