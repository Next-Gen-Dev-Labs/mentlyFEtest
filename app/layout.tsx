import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppHeader } from "@/components/app-header";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Techrity",
    template: "%s | Techrity",
  },
  description: "Welcome to techrity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-background text-foreground ${chivo.variable} font-sans antialiased`}
      >
        <SidebarProvider>
          {/* <AppSidebar /> {children} */}
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            <div className="flex-1">{children}</div>
          </SidebarInset>
        </SidebarProvider>
        {/* <Toaster position="top-right" visibleToasts={2} /> */}
      </body>
    </html>
  );
}
