import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import FooterContact from "../components/FooterContact";

const approachMono = localFont({
  src: "../public/fonts/ApproachMonoTRIAL-Md.otf",
  variable: "--font-approach-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berlin",
  description: "about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${approachMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <FooterContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
