import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "UMKM Margasana",
  description: "Produk unggulan UMKM Desa Margasana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-200">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
