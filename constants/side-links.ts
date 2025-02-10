import { Icons } from "./icons";
import { paths } from "./paths";

const routes = paths.private;

export const sidebarItems = [
  { icon: Icons.home, path: routes.home, label: "Home" },
  { icon: Icons.programs, path: routes.programs, label: "Programs" },
  { icon: Icons.activties, path: routes.activities, label: "Activities" },
  { icon: Icons.forms, path: routes.forms, label: "Forms" },
  { icon: Icons.finances, path: routes.finances, label: "Finances" },
  { icon: Icons.badges, path: routes.badges, label: "Badges" },
  { icon: Icons.analytics, path: routes.analytics, label: "Analytics" },
  { icon: Icons.settings, path: routes.settings, label: "Settings" },
  { icon: Icons.logout, path: paths.auth.login, label: "Logout" },
];
