import type { Metadata } from 'next';
import { Chivo } from 'next/font/google';
import './globals.css';

const chivo = Chivo({
  variable: '--font-chivo',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'MentlyFEtest Frontend Challenge',
  description: 'Frontend coding challenge built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} antialiased`}>{children}</body>
    </html>
  );
}
