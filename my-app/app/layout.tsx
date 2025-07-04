import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import { Inter, Roboto_Condensed } from 'next/font/google';
import AOSWrapper from "./components/AOSWrapper";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['400', '700'],
  display: 'swap',
}) 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-App",
  description: "Made by Rajesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      ><AOSWrapper/>
        {children}
      </body>
    </html>
  );
}
