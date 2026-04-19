import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insecto Fumigation | Certified Pest Control in Pakistan",
  description:
    "Safe, certified fumigation and pest control services across Pakistan. Same-day inspections, expert technicians, eco-conscious treatments.",
  openGraph: {
    title: "Insecto Fumigation | Certified Pest Control in Pakistan",
    description:
      "Safe, certified fumigation and pest control services across Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-gray-50 font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
