import type { Metadata } from "next";
import "./globals.css";
import { Wrapper } from "./components/layout/wrapper";



export const metadata: Metadata = {
  title: "Mently-FETest",
  description: "an assessment dashboard for Mently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg`}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
