import DesktopSidebar from "./desktopSidebar";
import MobileSidebar from "./mobileSidebar";

interface SidebarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  return (
    <div>
      <div className="">
        <DesktopSidebar />
      </div>
      <div className="">
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
}
