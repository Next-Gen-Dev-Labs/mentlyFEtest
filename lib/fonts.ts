import { Inter, Chivo } from "next/font/google";

export const chivo = Chivo({
  variable: "--font-chivo",
  display: "swap",
  subsets: ["latin"],
  preload: false,
});

export const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  preload: false,
});
