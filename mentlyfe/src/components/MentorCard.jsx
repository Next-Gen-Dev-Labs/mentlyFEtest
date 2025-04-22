export default function MentorCard({ mentor }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-xs">
          {mentor.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-sm">{mentor.name}</div>
          <div className="text-xs text-gray-500">{mentor.role}</div>
        </div>
      </div>

      <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200">
        Message
      </button>
    </div>
  );
}
