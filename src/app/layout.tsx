import type { Metadata } from "next";
import { MenuProvider } from "./context/MenuContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quran Recall",
  description: "Test your memorization, one ayah at a time.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
