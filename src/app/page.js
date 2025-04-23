import Activities from "./components/Activities";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Programs from "./components/Programs";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Dashboard />
      <Programs />
      <Activities />
    </>
  );
}


export default Home;