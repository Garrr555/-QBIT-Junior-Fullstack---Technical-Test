"use client";

import Link from "next/link";
import { Home, Info, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-7 flex justify-between items-center">
        <Link href={"/"}>
          <h2 className="text-3xl font-extrabold tracking-wide">
            UMKM <span className="text-yellow-400">Margasana</span>
          </h2>
        </Link>
        <ul className="flex gap-8 font-medium text-lg items-center">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 flex items-center gap-1"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-400 flex items-center gap-1"
            >
              <Info className="w-4 h-4" /> About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-400 flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> Contact
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/cart"
              className="hover:text-yellow-400 flex items-center gap-1"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-xs text-black font-bold rounded-full px-2 py-0.5">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
