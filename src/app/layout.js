import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // adjust if your path is different
import { BoardProvider } from './components/controller'; // named import

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
