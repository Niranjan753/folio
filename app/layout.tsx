import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const approachMono = localFont({
  src: "../public/fonts/ApproachMonoTRIAL-Md.otf",
  variable: "--font-approach-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berlin | Niranjan",
  description: "Builder designing for clarity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${approachMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
