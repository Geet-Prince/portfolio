import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "../src/components/ThemeProvider";
import { ThemeSynchronizer } from "../src/components/ThemeSynchronizer";
import SchemaRenderer from "../src/components/SchemaRenderer";
import BackToTop from "../src/components/BackToTop";

import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";

export async function generateViewport(): Promise<Viewport> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";
  const isDark = theme === "dark";
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: isDark ? "#111111" : "#ffffff",
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";
  const isDark = theme === "dark";

  return {
    metadataBase: new URL("https://geetprince.me/"),
    title: "Prince Raj | Software Engineer & Data Scientist",
    description: "Portfolio of Prince Raj (geetprince, geet-prince), a Backend and Full Stack Software Engineer specializing in scalable architecture and modern web experiences.",
    keywords: ["Prince Raj", "geetprince", "geet-prince", "Software Engineer", "Data Scientist", "Backend Engineer", "Full Stack Developer"],
    authors: [{ name: "Prince Raj", url: "https://geetprince.me/" }],
    creator: "Prince Raj",
    publisher: "Prince Raj",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: "Prince Raj (geetprince) | Software Engineer & Data Scientist",
      description: "Portfolio of Prince Raj (geetprince). Discover scalable backend engineering solutions and modern web applications.",
      url: "https://geetprince.me/",
      siteName: "Prince Raj",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Prince Raj - Software Engineer & Data Scientist"
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Prince Raj (geetprince) | Software Engineer & Data Scientist",
      description: "Portfolio of Prince Raj (geetprince), Software Engineer based in India.",
      images: ["/og-image.webp"],
    },
    alternates: {
      canonical: "https://geetprince.me/",
    },
    icons: {
      icon: [
        { url: isDark ? '/favicon-dark.svg' : '/favicon-light.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <SchemaRenderer />
      </head>
      <body className={`${inter.className} bg-(--bg) text-(--fg) min-h-screen font-sans selection:bg-(--accent)/30 selection:text-(--accent)`}>
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false} disableTransitionOnChange>
          <ThemeSynchronizer />
          {children}
          <BackToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
