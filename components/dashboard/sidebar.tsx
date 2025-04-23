"use client";
import {
  BarChart2,
  Receipt,
  Book,
  Building2,
  CreditCard,
  Folder,
  Wallet,
  // Users2,
  // Shield,
  // MessagesSquare,
  // Video,
  Settings,
  HelpCircle,
  Menu,
  Shirt,
  Home,
  Ungroup,
  User,
  Clipboard,
  Medal,
  ChartLine,
  LogOut,
  UserSquareIcon,
  PanelRight,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { Switch } from "../ui/switch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleNavigation() {
    setIsMobileMenuOpen(false);
  }

  function NavItem({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: any;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className="flex items-center gap-4 px-8 py-4 text-sm rounded-md transition-colors font-bold text- dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-purple dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-64 bg-[#340260] dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="h-full flex flex-col">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-6 flex items-center justify-items-normal border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <img
                  src="/logo.png"
                  alt="Acme"
                  width={116}
                  height={27}
                  className="flex-shrink-0 hidden dark:block"
                />
                <img
                  src="/logo.png"
                  alt="Acme"
                  width={116}
                  height={27}
                  className="flex-shrink-0 block dark:hidden"
                />
              </div>
              <span className="text-lg font-semibold hover:cursor-pointer ">
                <PanelRight />
              </span>
            </div>
          </Link>

          <div className="flex-1 overflow-y-auto  px-4">
            <div className="space-y-6 pt-8">
              <div>
                <div className="space-y-1">
                  <NavItem href="/dashboard" icon={Home}>
                    Dashboard
                  </NavItem>
                  <NavItem href="/dashboard/programs" icon={Book}>
                    Programs
                  </NavItem>
                  <NavItem href="/dashboard/activities" icon={Ungroup}>
                    Activities
                  </NavItem>
                  <NavItem href="/dashboard/users" icon={User}>
                    Users
                  </NavItem>
                  <NavItem href="/forums" icon={Clipboard}>
                    Forums
                  </NavItem>
                  <NavItem href="/finances" icon={Wallet}>
                    Finances
                  </NavItem>
                  <NavItem href="/rewards" icon={Medal}>
                    Rewards
                  </NavItem>
                  <NavItem href="/analytics" icon={ChartLine}>
                    Analytics
                  </NavItem>
                  <NavItem href="/settings" icon={Settings}>
                    Settings
                  </NavItem>
                  <NavItem href="/logout" icon={LogOut}>
                    Log Out
                  </NavItem>
                </div>
                <div>
                  <Card className="bg-[#6F01D0]">
                    <CardHeader>
                      <CardTitle>
                        <UserSquareIcon />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Got some questions, enquiries or need help?</p>
                    </CardContent>
                    <CardFooter>
                      <p className="underline text-[#F0C074]">
                        Visit Monthly Help Desk here
                      </p>
                    </CardFooter>
                  </Card>
                </div>
                <p className=" pt-4 font-bold">
                  Switch to Classic Mode <Switch />
                </p>
              </div>

              {/* <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider dark:text-gray-400">
                  Finance
                </div>
                <div className="space-y-1">
                  <NavItem href="/dashboard/transactions" icon={Wallet}>
                    Transactions
                  </NavItem>
                  <NavItem href="/dashboard/invoices" icon={Receipt}>
                    Invoices
                  </NavItem>
                  <NavItem href="/dashboard/payments" icon={CreditCard}>
                    Payments
                  </NavItem>
                </div>
              </div> */}

              {/* <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider dark:text-gray-400">
                  Team
                </div>
                <div className="space-y-1">
                  <NavItem href="#" icon={Users2}>
                    Members
                  </NavItem>
                  <NavItem href="#" icon={Shield}>
                    Permissions
                  </NavItem>
                  <NavItem href="#" icon={MessagesSquare}>
                    Chat
                  </NavItem>
                  <NavItem href="#" icon={Video}>
                    Meetings
                  </NavItem>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              <NavItem href="/dashboard/settings" icon={Settings}>
                Settings
              </NavItem>
              <NavItem href="#" icon={HelpCircle}>
                Help
              </NavItem>
            </div>
          </div> */}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
