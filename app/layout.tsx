import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odini's website",
  description: "Personal portfolio of Ebuka Odini, Senior Full Stack Engineer.",
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
  abstract: "Odini's website",
  keywords: [
    "Ebuka Odini",
    "Odini",
    "Portfolio",
    "Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "Programmer",
    "Tech Enthusiast",
  ],
};

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
