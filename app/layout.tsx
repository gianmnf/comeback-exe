import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMEBACK.exe | Gian Michel",
  description:
    "Gian Michel — Fullstack developer building useful digital products and reliable software.",
  applicationName: "COMEBACK.exe"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
