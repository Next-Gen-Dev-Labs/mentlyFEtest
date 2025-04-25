const applications = [
  {
    name: "Adesati Samuel",
    email: "adesati@email.com",
    tags: ["CV"],
    status: "pending",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@email.com",
    tags: ["CV", "Portfolio", "GitHub"],
    status: "pending",
  },
  {
    name: "Adesati Samuel",
    email: "adesati@email.com",
    tags: ["CV"],
    status: "pending",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@email.com",
    tags: ["CV", "Portfolio"],
    status: "pending",
  },
]

const ApplicationsCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Applications</h3>
        <a href="#" className="text-primary font-medium hover:underline">See all</a>
      </div>
      <div className="space-y-10">
        {applications.map((app, idx) => (
          <div key={idx} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{app.name}</p>
                <p className="text-sm text-gray-500">{app.email}</p>
              </div>
              <div className="space-x-2">
                <button className="text-sm bg-red-100 text-red-600 font-semibold px-3 py-1 rounded">Reject</button>
                <button className="text-sm bg-purple-600 text-white font-semibold px-3 py-1 rounded">Accept</button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {app.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApplicationsCard
