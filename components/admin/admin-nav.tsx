"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FileText, Home, PenTool, Settings } from "lucide-react"

interface AdminNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AdminNav({ className, ...props }: AdminNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("grid items-start gap-2", className)} {...props}>
      <Button variant={pathname === "/admin" ? "secondary" : "ghost"} className="justify-start" asChild>
        <Link href="/admin">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Link>
      </Button>
      <Button variant={pathname.includes("/admin/blog") ? "secondary" : "ghost"} className="justify-start" asChild>
        <Link href="/admin/blog">
          <FileText className="mr-2 h-4 w-4" />
          Blog Posts
        </Link>
      </Button>
      <Button variant={pathname.includes("/admin/projects") ? "secondary" : "ghost"} className="justify-start" asChild>
        <Link href="/admin/projects">
          <PenTool className="mr-2 h-4 w-4" />
          Projects
        </Link>
      </Button>
      <Button variant={pathname === "/admin/settings" ? "secondary" : "ghost"} className="justify-start" asChild>
        <Link href="/admin/settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Link>
      </Button>
    </nav>
  )
}
