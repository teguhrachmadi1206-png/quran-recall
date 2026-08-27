import type { Metadata } from "next";
import { MenuProvider } from "./context/MenuContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quran Recall",
    template: "%s | Quran Recall",
  },
  description: "A simple tool for Qur'an memorization and murajaah practice.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </MenuProvider>
    </html>
  );
}
