import type { Metadata } from "next";
import { Chivo, Chivo_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";

const chivoSans = Chivo({
  variable: "--font-chivo-sans",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Techrity | Dashboard",
    template: "%s | Techrity",
    absolute: "Techrity | Dashboard",
  },
  description:
    "Techrity is a platform dedicated to connecting aspiring individuals with experienced mentors across various fields.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivoSans.variable} ${chivoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
