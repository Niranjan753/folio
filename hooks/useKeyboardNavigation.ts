"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useKeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = event.key.toLowerCase();

      // Number navigation
      switch (key) {
        case "0":
          router.push("/");
          break;
        case "1":
          router.push("/work");
          break;
        case "2":
          router.push("/writing");
          break;
        case "m":
          window.location.href = "mailto:niranjanr753@gmail.com";
          break;
        case "h":
        case "arrowleft":
          // Navigate to previous page
          if (pathname === "/work") router.push("/");
          if (pathname === "/writing") router.push("/work");
          break;
        case "l":
        case "arrowright":
          // Navigate to next page
          if (pathname === "/") router.push("/work");
          if (pathname === "/work") router.push("/writing");
          break;
        case "arrowup":
          // Scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "arrowdown":
          // Scroll to bottom
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router, pathname]);
}

