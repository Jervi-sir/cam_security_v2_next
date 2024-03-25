import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
//import "./globals.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.min.css";
import "../public/assets/css/magnific-popup.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/custom.css";
import AnimatedCursor from "react-animated-cursor";


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

        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='62,102,243'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.cursor',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              }
            }
          ]}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
