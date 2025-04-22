import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
