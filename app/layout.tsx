import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Barekegn Asefa - Full-Stack Systems Engineer",
    template: "%s | Barekegn Asefa",
  },
  description:
    "Production-grade systems engineer building complex platforms with admin dashboards, analytics systems, and scalable backend architectures.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barekegn.dev",
    siteName: "Barekegn Asefa Portfolio",
    title: "Barekegn Asefa - Full-Stack Systems Engineer",
    description:
      "Production-grade systems engineer building complex platforms with admin dashboards, analytics systems, and scalable backend architectures.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`} suppressHydrationWarning>
        <GoogleAnalytics />
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
