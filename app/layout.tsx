import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Header from "@/app/header";
import Footer from "@/app/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrossFit Potrero Hill",
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
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
