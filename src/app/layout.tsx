import type { Metadata } from "next";
import { Geist, Inter, Syne, Urbanist } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
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

const SITE_URL = "https://www.arabianpaws.ae";
const BRAND_ICON = "https://www.arabianpaws.ae/icons/logo-paw.svg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arabian Paws Veterinary Clinic | Dubai",
  description:
    "Where every paw finds expert care. Arabian Paws Veterinary Clinic in Majan, Dubai — 24/7 emergency service, veterinary care and specialised dental care.",
  icons: {
    icon: [{ url: BRAND_ICON, type: "image/svg+xml" }],
    shortcut: BRAND_ICON,
    apple: BRAND_ICON,
  },
  openGraph: {
    title: "Arabian Paws Veterinary Clinic | Dubai",
    description:
      "Where every paw finds expert care. Arabian Paws Veterinary Clinic in Majan, Dubai — 24/7 emergency service, veterinary care and specialised dental care.",
    url: SITE_URL,
    siteName: "Arabian Paws",
    images: [
      {
        url: BRAND_ICON,
        alt: "Arabian Paws",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arabian Paws Veterinary Clinic | Dubai",
    description:
      "Where every paw finds expert care. Arabian Paws Veterinary Clinic in Majan, Dubai — 24/7 emergency service, veterinary care and specialised dental care.",
    images: [BRAND_ICON],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} ${urbanist.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-full bg-white text-olive">
        <Header />
        {children}
        <Reveal>
          <Footer />
        </Reveal>
        <FloatingActions />
      </body>
    </html>
  );
}
