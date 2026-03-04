import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aware One — One partner. Every advantage.",
    template: "%s | Aware One",
  },
  description:
    "B2B consultancy helping NZ SMBs modernise — smarter operations, global supply chains, and custom technology — without the enterprise price tag.",
  metadataBase: new URL("https://awareone.co.nz"),
  openGraph: {
    siteName: "Aware One",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.variable}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
