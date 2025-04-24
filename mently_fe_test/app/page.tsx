import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/dashboard"
      className="text-[#6F01D0] flex flex-col mx-auto items-center p-8 text-lg"
    >
      <h1>Welcome, is This is the entry point of the application</h1>
      <h2>
        Is not a good security practice to create the dashboard on the entry
        point so i created the route for the dashboard
      </h2>
      <button className="rounded bg-[#6F01D0] p-4 text-white">
        Click to procced to dashboard
      </button>
    </Link>
  );
}
