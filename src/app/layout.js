import { Chivo } from 'next/font/google';
import "./globals.css";

export const chivo = Chivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
});

export const metadata = {
  title: "Techrity Dashboard",
  description: "Techrity Dashboard - Empowering tech talent",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={chivo.className}
      >
        {children}
      </body>
    </html>
  );
}
