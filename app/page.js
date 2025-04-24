import Dashboard from "./components/DashBoard";
import WelcomeBar from "./components/WelcomeBar";

import "./globals.css";


export default function Home() {
  return (
    <div className=" ">

      <WelcomeBar/>
      <Dashboard/>
      
    </div>
  );
}
