// app/layout.tsx
// import "@/styles/globals.css";
import DashboardLayout from "../../components/layouts/DashboardLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
