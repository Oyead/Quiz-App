import type { Metadata } from "next";
import { Geist, Geist_Mono,Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--roboto",
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Quiz Site",
  description: "Quiz site to test your knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
           <Navbar/>
        {children}
      </body>
    </html>
  );
}
