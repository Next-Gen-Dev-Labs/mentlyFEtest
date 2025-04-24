import DashboardPage from '@/app/components/pages/dashboard';
import Loading from '@/app/components/ui/loading';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardPage />
    </Suspense>
  );
};

export default Page;
