import type { Metadata } from "next";
import { Chivo, Chivo_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import GlobalProvider from "./context/Provider";
import PreventScroll from "./components/PreventScroll";
import PageWrapper from "./components/PageWrapper";

const chivoFont = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MentlyFEtest Frontend Coding Challenge",
  description:
    "This challenge is designed to assess your Frontend development skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivoFont.variable} ${chivoMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-chivo), sans-serif" }}
      >
        <GlobalProvider>
          <Navbar />
          <Sidebar />
          <PreventScroll />
          <PageWrapper>
            <main className="lg:ml-[10%] mt-20 bg-white">{children}</main>
          </PageWrapper>
        </GlobalProvider>
      </body>
    </html>
  );
}
