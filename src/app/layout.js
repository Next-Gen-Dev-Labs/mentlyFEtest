import "../styles/globals.css";
import { SidebarProvider } from "../context/SidebarContext";

export const metadata = {
  title: "Techrity Platform",
  description: "Techrity learning and mentorship platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
