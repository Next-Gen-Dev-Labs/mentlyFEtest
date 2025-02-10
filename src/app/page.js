
export default function Home() {
  return (
    <div className="space-y-6 text-primary dark:text-white p-6">
      <div>
        <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Welcome to your dashboard. Here’s your profile information:
        </p>

        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Mentor Info
          </h2>
          <p className="text-gray-700 dark:text-gray-300">Name: John Doe</p>
          <p className="text-gray-700 dark:text-gray-300">Email: johndoe@example.com</p>
        </div>
      </div>
    </div>
  );
}

