import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../components/language-provider";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Busem Aker — Techno DJ & Producer",
  description:
    "Busem Aker is a techno DJ and producer rooted in Turkey’s underground club culture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
