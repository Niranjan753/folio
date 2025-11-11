"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useKeyboardNavigation();

  const navigation = [
    { label: "00. Company", href: "/" },
    { label: "01. Work", href: "/work" },
    { label: "02. Writing", href: "/writing" },
  ];

  return (
    <header className="border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[11px] sm:text-[12px] font-mono text-foreground hover:text-muted-foreground transition-colors">
            Berlin | Niranjan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12px] font-mono transition-all px-3 lg:px-4 py-1.5 rounded ${
                  pathname === item.href
                    ? "bg-muted/80 border border-border/60 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-border/30 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[12px] font-mono transition-all px-4 py-2 rounded ${
                  pathname === item.href
                    ? "bg-muted/80 border border-border/60 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

