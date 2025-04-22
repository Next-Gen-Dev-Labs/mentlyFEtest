import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
});

export const metadata = {
  title: "MentlyFeTest",
  description: "Created By Oluwanimotele Mayowa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chivo.className}  antialiased`}>{children}</body>
    </html>
  );
}
