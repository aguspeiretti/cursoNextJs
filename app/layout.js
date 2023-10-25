import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akumal Uniformes",
  description: "tienda de uniformes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/8bac4a8dea.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
