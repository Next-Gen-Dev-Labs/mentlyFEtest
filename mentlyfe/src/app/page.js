import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}
