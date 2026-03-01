import type { Metadata } from "next";
import { Geist, Geist_Mono, Allura, } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/layout/SideNav";
import Logo from "@/components/layout/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pape Bathily - Portfolio",
  description: "Portfolio de Pape Bathily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${allura.variable}
          antialiased
        `}
      >
        <Logo />
        <SideNav />
        {children}
      </body>
    </html>
  );
}