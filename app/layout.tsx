import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import SideBarNavigation from "@/components/shared/SideBarNavigation";
import NavBar from "@/components/shared/NavBar";


const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["400", "500", "700"], // You can customize weights here
});

export const metadata: Metadata = {
  title: "Techrity",
  description: "Mentors dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} font-chivo antialiased`}>
          <div className="w-full  ">
          <div className=" grid grid-cols-1 h-full items-stretch lg:grid-cols-[15rem_1fr]   ">
              <div className="hidden h-full lg:block"><SideBarNavigation/></div>
              <div className="w-full ">
              <NavBar/>
                {children}
              </div>
          </div>

          </div>
      </body>
    </html>
  );
}
