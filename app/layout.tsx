import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebuka Odini | Senior Full Stack Engineer",
  description: "Personal portfolio of Ebuka Odini, Senior Full Stack Engineer",
  generator: "v0.dev",
  icons: {
    icon: "/icon.jpeg", // or use "/favicon.svg"
  },
};

// {
//   metadataBase: new URL('https://example.com'),
//   title: { default: 'My Site', template: '%s | My Site' },
//   description: 'Welcome to My Site',
//   alternates: {
//     canonical: 'https://example.com',
//     languages: {
//       'en-US': 'https://example.com/en-US',
//       'de-DE': 'https://example.com/de-DE'
//     }
//   },
//   openGraph: {
//     title: 'My Site',
//     description: 'Welcome to My Site',
//     url: 'https://example.com',
//     siteName: 'My Site',
//     images: [{ url: 'https://example.com/og.png' }]
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="430d058a2203846f667caccc4cad06e9"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
