import SideNav from '@/components/sidenav/SideNav';
import Overview from '@/components/Overview/Overview';

export default function Home() {
   return (
      <div className="flex">
         <SideNav />
         <Overview />
      </div>
   );
}
