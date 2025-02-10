import type { Metadata } from "next";
import { Chivo, Meow_Script } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const meowScript = Meow_Script({
  subsets: ["latin"],
  variable: "--font-meow-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mentlyfe Test",
    default: "Mentlyfe Test",
  },
  description: "FE Assessment Submission for Mentlyfe Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chivo.variable + " " + meowScript.variable}>
        {children}
      </body>
    </html>
  );
}
