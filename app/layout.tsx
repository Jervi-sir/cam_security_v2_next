import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
//import "./globals.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.min.css";
import "../public/assets/css/magnific-popup.min.css";
import "../public/assets/css/style.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vigilens",
  description: "Vigilens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
