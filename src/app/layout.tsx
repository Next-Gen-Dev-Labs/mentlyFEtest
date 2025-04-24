import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techrity",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster position="top-right" />
        <div className="flex">
          <Sidebar />
          <div className="w-full ml-[72px] sm:ml-[88px] xl:ml-[240px] relative">
            <div className="w-full bg-[#FDFDFD] shadow-sm shadow-black/[6.22%]">
              <Header />
            </div>
            <div className="w-full bg-[#F4F5FA]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
