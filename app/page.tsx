import DashboardLayout from '@/components/layouts/dashboard-layout';
import Dashboard from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}