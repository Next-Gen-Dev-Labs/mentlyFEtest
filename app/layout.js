import { Chivo } from 'next/font/google';
import "./globals.css";

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});


export const metadata = {
  title: "Techrity Dashboard",
  description: "A dashboard for managing Techrity programs and activities",
};

export default function RootLayout({ children }) {
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
