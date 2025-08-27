"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in">
          Produk Unggulan UMKM Margasana
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami menghadirkan produk lokal berkualitas dari Desa Margasana. Dukung
          UMKM, cintai produk Indonesia ✨
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-1 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p, idx) => (
          <div
            key={p.id}
            className="animate-slide-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
