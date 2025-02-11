
import Sidebar from "../component/SideBar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" w-full max-md:w-auto">{children}</main>
    </div>
  );
}
