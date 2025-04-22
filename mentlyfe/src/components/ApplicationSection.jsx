export default function ApplicationSection() {
  const applications = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      status: "pending"
    },
    {
      id: 2,
      name: "Adeati Samuel",
      email: "adeatisamuel@gmail.com",
      role: "Product Designer",
      status: "pending"
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      status: "pending"
    },
    {
      id: 4,
      name: "Adeati Samuel",
      email: "adeatisamuel@gmail.com",
      role: "Product Designer",
      status: "pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Applications</h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
          >
            <input type="checkbox" className="mr-3" />

            <div className="flex items-center flex-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-xs">
                {app.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-sm">{app.name}</div>
                <div className="text-xs text-gray-500">{app.email}</div>
              </div>
            </div>

            <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {app.role}
            </div>

            <div className="flex space-x-2 ml-4">
              <button className="px-3 py-1 text-xs border border-red-600 text-red-600 rounded hover:bg-red-50 transition-colors duration-200">
                Reject
              </button>
              <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200">
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
