import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButtonWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mandtech",
  description: "App for the sales of Air compressor products, lubricants, and spare parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header>
          <Navbar />
        </header> */}
        {/* <div className="md:mt-0 mt-[9rem]"></div> */}
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
