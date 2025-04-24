import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "~/_components/layout";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mently FE Test",
  description: "Mently FE Test built by webdevtolu",
  icons: "/images/profile.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.className} antialiased w-full h-screen flex items-start overflow-hidden`}
      >
        <Sidebar />
        <div className="w-full flex-1 h-full self-start flex flex-col items-start overflow-y-scroll">
          <Header />
          <main className="w-full flex flex-col items-start px-10 py-4 bg-[#F4F5FA]">
            {children}
          </main>
        </div>
        <div id="sidebar"></div>
      </body>
    </html>
  );
}
