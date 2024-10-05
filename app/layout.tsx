import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "SharpLens",
  description: "AI Powered Image Processing",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
