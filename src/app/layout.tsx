import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

export const metadata: Metadata = {
  title: 'Mently FE Test',
  description: 'Frontend challenge for Mently FE role',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          <div className="flex flex-col flex-1">
            {/* Top Navigation */}
            <TopNav />

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
