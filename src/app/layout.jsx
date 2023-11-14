import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/head";
import Nav from "@/components/Nav";
import { CartProvider } from "@/components/context/CartContext";
import { AuthProvider } from "@/components/context/AuthContext";

export const metadata = {
  title: "Akumal Uniformes",
  description: "tienda de uniformes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="overflow-hidden">
        <AuthProvider>
          <CartProvider>
            <Nav />
            <div className="prueba h-[calc(100vh-3.5rem)] overflow-y-auto z-0">
              {children}
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
