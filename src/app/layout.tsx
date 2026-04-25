import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Pixels from "./components/Pixels";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "NoorUSB - المكتبة الذكية لطفلك",
  description: "أروع هدية لطفلك في 2026: مكتبة ذكية في جيبك. أكثر من 2000 فيديو تعليمي إسلامي وتربوي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="scroll-smooth" dir="rtl">
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans min-h-screen bg-slate-50 antialiased`}>
        <Pixels />
        {children}
      </body>
    </html>
  );
}
