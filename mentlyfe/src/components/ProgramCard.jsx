export default function ProgramCard({ program }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative">
        <div className="h-40 bg-gray-200 w-full">
          {/* Program image would go here */}
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          {program.badges &&
            program.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                {badge}
              </span>
            ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium mb-2">{program.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{program.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[...Array(program.mentors)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gray-300 border border-white flex items-center justify-center text-xs"
                >
                  M
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">Mentors</span>
          </div>

          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition-colors duration-200">
              View Details
            </button>
            <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200">
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
