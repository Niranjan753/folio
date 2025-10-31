import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const codeSaver = localFont({
  src: "../public/fonts/CodeSaver-Regular.otf",
  variable: "--font-codesaver",
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
    <html lang="en" className="dark">
      <body
        className={`${codeSaver.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
