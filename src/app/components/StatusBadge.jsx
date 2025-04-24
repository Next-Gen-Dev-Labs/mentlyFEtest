// components/StatusBadge.jsx
export default function StatusBadge({ circleColor, bgColor, textColor, status }) {
    return (
      <div className="flex items-center mt-1 z-10">
        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: circleColor }}></div>
        <span
          className="text-xs px-2 py-0.5 rounded ml-1"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          {status}
        </span>
      </div>
    );
  }
  