import type { Metadata } from "next";
import { Geist, Inter, Syne, Urbanist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arabian Paws Veterinary Clinic | Dubai",
  description:
    "Arabian Paws Vet Clinic is a premier multidisciplinary veterinary hospital in Majan, Dubai, offering 24/7 emergency care and a full range of pet services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} ${urbanist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-olive">
        <Header />
        {children}
        <Reveal>
          <Footer />
        </Reveal>
      </body>
    </html>
  );
}
