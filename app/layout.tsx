import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "../src/components/ThemeProvider";
import { ThemeSynchronizer } from "../src/components/ThemeSynchronizer";

import { cookies } from "next/headers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";
  const isDark = theme === "dark";

  return {
    title: "Prince Raj (Geet Prince) | Backend & Full Stack Software Engineer",
    description: "Portfolio of Prince Raj (Geet Prince), a Backend and Full Stack Software Engineer based in Greater Noida, India.",
    keywords: ["Prince Raj", "Geet Prince", "Software Engineer", "Backend Engineer"],
    authors: [{ name: "Prince Raj" }],
    themeColor: isDark ? "#111111" : "#ffffff",
    openGraph: {
      title: "Prince Raj | Backend & Full Stack Software Engineer",
      description: "Portfolio of Prince Raj (Geet Prince). Discover scalable backend engineering solutions.",
      url: "https://geetprince.me/",
      siteName: "Prince Raj Portfolio",
      images: [
        {
          url: "https://geetprince.me/og-image.jpg",
          width: 1200,
          height: 630,
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Prince Raj | Backend Engineer",
      description: "Portfolio of Prince Raj (Geet Prince), Backend Engineer based in India.",
      images: ["https://geetprince.me/og-image.jpg"],
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
      <head />
      <body className={`${inter.className} bg-(--bg) text-(--fg) min-h-screen font-sans selection:bg-(--accent)/30 selection:text-(--accent)`}>
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false} disableTransitionOnChange>
          <ThemeSynchronizer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
