import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BoardProvider } from './components/controller';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MentlyFEtest Frontend Coding Challenge",
  description: "Learn more about our challenge",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BoardProvider>
          {children}
        </BoardProvider>
      </body>
    </html>
  );
}
