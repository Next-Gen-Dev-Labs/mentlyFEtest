import { Geist, Geist_Mono, Chivo } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import RootLayoutClient from "./RootLayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techrify Dashboard",
  description: "Admin Dashboard for Techrify",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
