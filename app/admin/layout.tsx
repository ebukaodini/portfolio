import type React from "react"
import Link from "next/link"
import { Laptop, Menu } from "lucide-react"
import { AdminNav } from "@/components/admin/admin-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-none">
            <div className="flex h-16 items-center border-b">
              <Link href="/admin" className="flex items-center gap-2 font-semibold">
                <Laptop className="h-6 w-6" />
                <span>Portfolio Admin</span>
              </Link>
            </div>
            <AdminNav className="px-2" />
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-2 md:ml-0 md:gap-4">
          <Link href="/admin" className="hidden items-center gap-2 font-semibold md:flex">
            <Laptop className="h-6 w-6" />
            <span>Portfolio Admin</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/" target="_blank">
                View Site
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <AdminNav className="px-2" />
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
