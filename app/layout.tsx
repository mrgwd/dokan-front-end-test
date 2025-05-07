import type { Metadata } from "next";
import { Figtree, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/nav/navbar";
import Footer from "@/components/layout/footer/footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Test | Dokan",
  description: "This is the result of the frontend test for Dokan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${jakarta.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
