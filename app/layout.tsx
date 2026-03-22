import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Palombo Architectural Design",
    template: "%s | Palombo Architectural Design",
  },
  description:
    "Palombo Architectural Design creates timeless residential and commercial architecture with a measured, detail-driven approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
