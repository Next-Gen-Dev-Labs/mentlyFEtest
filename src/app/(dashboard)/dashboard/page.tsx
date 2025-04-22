import { Metadata } from "next";
import DashboardPage from "./_components";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return <DashboardPage />;
}
