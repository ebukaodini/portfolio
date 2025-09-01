"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostname = location.hostname;
  const pathname = usePathname();
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const paths = [
    { name: "About", href: "/about", external: false },
    { name: "Projects", href: "/projects", external: false },
    { name: "Blog", href: "https://dev.to/ebukaodini", external: true },
  ];

  return (
    <header className="border-b bg-background relative z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-60">
        <Link href="/" className="text-xl font-bold text-foreground">
          Home
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {paths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              target={path.external ? "_blank" : "_self"}
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname.startsWith(path.href)
                  ? "font-bold text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {path.name}
            </Link>
          ))}

          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Desktop theme toggle */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="xs" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <Button
            className="absolute top-5 right-4"
            variant="ghost"
            size="xs"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <X />
          </Button>
          <div className="container flex flex-col items-start justify-start py-5 space-y-6 text-xl font-medium">
            {paths.map((path) => (
              <Link
                key={path.name}
                href={path.href}
                target={path.external ? "_blank" : "_self"}
                onClick={toggleMenu}
                className={`w-full ${
                  pathname === path.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {path.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
