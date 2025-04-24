import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mently Frontend Test",
  description: "Mently Fontend Test",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/SVGs/logo_icon.svg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
