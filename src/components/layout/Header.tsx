export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Company Name</h2>
          </div>
          <div className="flex items-center">
            {/* Add profile menu, notifications, etc. */}
          </div>
        </div>
      </div>
    </header>
  )
} 