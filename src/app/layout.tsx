import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./component/Header";
import Footer from "./component/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shivmada | Construction Company",
  description: "Shivmada",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header />
        {children}
        <div className="size-12 rounded-full fixed bottom-5 right-5 bg-slate-200 cursor-pointer shadow-2xl flex items-center justify-center"><FaWhatsapp size={28} color="green" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
