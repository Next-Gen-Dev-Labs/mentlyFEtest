// src/app/layout.js
import '../styles/globals.css';
import '../lib/fontawesome';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Techarity Dashboard',
  description: 'Dashboard layout with Sidebar and Header',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} bg-gray-100 font-sans`}>{children}</body>
    </html>
  );
}
