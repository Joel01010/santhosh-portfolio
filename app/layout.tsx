import { Geist, Geist_Mono } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Santhosh V — AI/ML Engineer & Researcher",
    template: "%s · Santhosh V",
  },
  description:
    "Portfolio of Santhosh V, a Computer Science Engineering student focused on Machine Learning, Reinforcement Learning, Graph Neural Networks, Robotics, and intelligent systems.",
  keywords: [
    "Machine Learning",
    "Reinforcement Learning",
    "Graph Neural Networks",
    "Robotics",
    "Computer Science",
    "VIT Chennai",
  ],
  authors: [{ name: "Santhosh V" }],
  openGraph: {
    title: "Santhosh V — AI/ML Engineer & Researcher",
    description:
      "Portfolio of Santhosh V, a Computer Science Engineering student focused on Machine Learning, Reinforcement Learning, Graph Neural Networks, Robotics, and intelligent systems.",
    type: "website",
    locale: "en_US",
    siteName: "Santhosh V — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh V — AI/ML Engineer & Researcher",
    description:
      "Portfolio of Santhosh V, a Computer Science Engineering student focused on Machine Learning, Reinforcement Learning, Graph Neural Networks, Robotics, and intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
