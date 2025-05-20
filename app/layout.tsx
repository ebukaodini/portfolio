import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ebuka Odini | Senior Full Stack Engineer",
  description: "Personal portfolio of Ebuka Odini, Senior Full Stack Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
              <Link href="/" className="text-xl font-bold">
                Ebuka Odini
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                  About
                </Link>
                <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
                  Projects
                </Link>
                <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
                  Blog
                </Link>
                <Link href="/uses" className="text-sm font-medium hover:underline underline-offset-4">
                  Uses
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t bg-background">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
              <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Ebuka Odini. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
