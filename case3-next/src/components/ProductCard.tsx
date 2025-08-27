"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const buyProduct = () => {
    setLoading(true);
    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang 🛒`);
    setLoading(false);
  };

  return (
    <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-56 object-cover transition-transform duration-500  hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
        <p className="text-gray-700 font-medium">
          Rp {product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={buyProduct}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex items-center gap-2 transition-transform hover:scale-105"
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" /> Loading
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Beli Sekarang
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
