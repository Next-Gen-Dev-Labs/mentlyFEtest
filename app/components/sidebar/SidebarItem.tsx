import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarItemProps {
  icon: React.ReactNode;
  route: Url;
}

const SidebarItem: React.FC<Partial<SidebarItemProps>> = ({ icon, route }) => {
  const pathname = usePathname();
  const isActive = pathname === route;
  return (
    <Link
      href={route as Url}
      className={`rounded-lg py-4 px-8 flex items-center justify-center hover:bg-greyBg hover:active-icon ${
        isActive ? "bg-white active-icon" : ""
      } hover-icon`}
    >
      {icon}
    </Link>
  );
};

export default SidebarItem;
