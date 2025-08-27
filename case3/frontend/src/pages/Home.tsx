import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  imageLocal: string;
  imageFe: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Bagian Header */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-extrabold mb-4 tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          Produk Unggulan UMKM Margasana
        </h1>
        <p
          className="text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--dark)" }}
        >
          Kami menghadirkan produk lokal berkualitas dari desa Margasana. Dukung
          UMKM, cintai produk Indonesia ✨
        </p>
        <div className="mt-6 flex justify-center">
          <div
            className="w-24 h-1 rounded-full"
            style={{ background: "var(--secondary)" }}
          ></div>
        </div>
      </div>

      {/* Grid Produk */}
      <div
        className="grid grid-cols-3 animate-fadeIn"
        style={{ gap: "20px", marginLeft: "50px", marginRight: "50px" }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
