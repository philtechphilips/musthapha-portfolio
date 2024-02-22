import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'remixicon/fonts/remixicon.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Engineer",
  description: "Musthapha Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
