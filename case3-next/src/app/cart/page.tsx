"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">🛒 Keranjang Belanja</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang masih kosong.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">
                      Rp {item.price.toLocaleString()} x {item.quantity}
                    </p>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Hapus
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total: Rp {total.toLocaleString()}
            </h2>
            <div className="flex gap-3">
              <Button variant="outline" onClick={clearCart}>
                Kosongkan
              </Button>
              <Button className="bg-green-600 hover:bg-green-500 text-white">
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
