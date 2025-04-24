import MainLayout from "./main-content";
import WelcomeAboard from "./welcome-aboard";
import ManageWidgit from "./widget";


export default function Home() {
  return (
   <div className="md:px-9 px-3">
     <ManageWidgit />
     <WelcomeAboard />
     <MainLayout />
   </div>
  );
}
