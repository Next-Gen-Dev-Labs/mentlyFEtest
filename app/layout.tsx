import { ToastProvider } from "@/components/ui/notify-provider";
import { images } from "@/constants/image";
import { siteConfig } from "@/constants/site-config";
import type { Metadata } from "next";
import { Chivo, Inter } from "next/font/google";
import "./globals.css";

export const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo-serif",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.title}`,
    default: siteConfig.title,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    // images: [
    //   {
    //     // url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: `@${siteConfig.title.toLocaleLowerCase()}`,
  },
  icons: {
    icon: images.logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${inter.variable} antialiased`}>
        <ToastProvider duration={3000} position={"top-right"}>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
