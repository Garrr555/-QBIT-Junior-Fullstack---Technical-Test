import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 justify-center gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">
            <Link href={"/"}>
              UMKM <span className="text-yellow-400">Margasana</span>
            </Link>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Mendukung produk lokal berkualitas dari Desa Margasana. Dukung UMKM,
            cintai produk Indonesia ✨
          </p>
        </div>

        {/* Navigasi */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">
            Navigasi
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Kontak</h3>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            <Phone className="w-4 h-4" /> +62 812 3456 7890
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            <Mail className="w-4 h-4" /> info@umkm-margasana.com
          </p>
        </div>
      </div>
      <div className="py-4 border-t border-gray-700 text-center text-sm text-gray-400">
        © 2025 UMKM Margasana. All rights reserved.
      </div>
    </footer>
  );
}
