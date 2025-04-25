import { Chivo } from "next/font/google";
import "@/css/globals.css";

const chivo = Chivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Mently",
    description: "just testing",
};

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <main className={`${chivo.className}`}>{children}</main>
        </body>
      </html>
    )
  }
