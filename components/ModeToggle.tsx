"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <Sun className="h-[18px] w-[18px]" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-full h-full transition-transform duration-200 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun className="h-[18px] w-[18px] absolute scale-100 rotate-0 transition-all duration-500 ease-in-out dark:scale-0 dark:rotate-180 opacity-100 dark:opacity-0" />
      <Moon className="h-[18px] w-[18px] absolute scale-0 -rotate-180 transition-all duration-500 ease-in-out dark:scale-100 dark:rotate-0 opacity-0 dark:opacity-100" />
    </button>
  )
}

