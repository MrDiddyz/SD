import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MurMur Council",
  description: "Visual multi-agent voting dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
