"use client";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure correct theme detection on hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={() =>
        setTheme((prev) => {
          switch (prev) {
            case "light":
              return "dark";
            case "dark":
              return "light";
            default:
              return "light";
          }
        })
      }
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "light" ? "block" : "hidden"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
    </Button>
  );
}
