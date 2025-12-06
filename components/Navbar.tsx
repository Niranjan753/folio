"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Me", href: "/me" },
    { label: "products", href: "/products" },
  ];

  return (
    <nav className="flex items-center px-6 py-4">
      {/* Main navigation bar container - dark gray rounded pill */}
      <div className="flex items-center gap-1 bg-muted/30 dark:bg-muted/20 px-2 py-1.5 rounded-full border border-border/20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-muted dark:bg-muted/80 text-foreground" // Active: white text on darker gray pill
                    : "text-muted-foreground hover:text-foreground" // Inactive: light gray text
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Dark mode toggle on the right, outside the main bar */}
      <div className="ml-4 w-9 h-9 flex items-center justify-center">
        <ModeToggle />
      </div>
    </nav>
  );
}