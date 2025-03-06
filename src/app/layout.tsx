import type { Metadata, Viewport } from "next";
import { Comfortaa, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-comfortaa",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-bricolage",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  themeColor: '#FF913B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Softune - Turning ideas into digital success stories",
  description: "Your trusted software development partner specializing in creating innovative digital solutions, web applications, and mobile apps.",
  keywords: "software development, web development, mobile apps, digital solutions, React, Next.js",
  authors: [{ name: "Softune" }],
  creator: "Softune",
  publisher: "Softune",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softune.com",
    siteName: "Softune",
    title: "Softune - Turning ideas into digital success stories",
    description: "Your trusted software development partner specializing in creating innovative digital solutions.",
    images: [
      {
        url: "/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Softune - Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softune - Turning ideas into digital success stories",
    description: "Your trusted software development partner specializing in creating innovative digital solutions.",
    images: ["/branding/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#FF913B",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Softune",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#FF913B" />
        <meta name="msapplication-TileColor" content="#FF913B" />
        <meta name="theme-color" content="#FF913B" />
      </head>
      <body
        className={`${comfortaa.variable} ${bricolage.variable} ${dmSans.variable} antialiased bg-[#FFF8E7] overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
