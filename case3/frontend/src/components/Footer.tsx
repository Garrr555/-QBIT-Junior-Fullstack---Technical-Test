export default function Footer() {
  return (
    <footer
      className=""
      style={{ background: "var(--dark)", color: "white", marginTop: "50px" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">
            UMKM <span style={{ color: "var(--secondary)" }}>Margasana</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Mendukung produk lokal berkualitas dari desa Margasana. Dukung UMKM,
            cintai produk Indonesia ✨
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3
            className="text-lg font-semibold mb-3 "
            style={{
              color: "var(--secondary)",
            }}
          >
            Navigasi
          </h3>
          <ul className="" style={{ listStyle: "none", cursor: "pointer" }}>
            <li>
              <p className="hover:text-[var(--secondary)] transition ">Home</p>
            </li>
            <li>
              <p className="hover:text-[var(--secondary)] transition">About</p>
            </li>
            <li>
              <p className="hover:text-[var(--secondary)] transition">
                Contact
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: "var(--secondary)" }}
          >
            Kontak
          </h3>
          <p className="text-gray-300 text-sm">
            Jl. Raya Margasana No. 10, Banyumas
          </p>
          <p className="text-gray-300 text-sm">
            Email: info@umkm-margasana.com
          </p>
          <p className="text-gray-300 text-sm">Telp: +62 812 3456 7890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className=" border-t border-gray-700 text-center "
        style={{ padding: "20px" }}
      >
        © 2025 UMKM Margasana. All rights reserved.
      </div>
    </footer>
  );
}
