import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quran Recall",
  description: "Test your memorization, one ayah at a time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
