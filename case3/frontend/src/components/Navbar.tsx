export default function Navbar() {
  return (
    <nav
      className="shadow-md sticky top-0 z-50"
      style={{
        background: "var(--primary)",
        color: "white",
        padding: "0px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h2 className="text-2xl font-extrabold tracking-wide">
          UMKM <span style={{ color: "var(--secondary)" }}>Margasana</span>
        </h2>

        {/* Menu */}
        <ul
          className="flex "
          style={{ listStyle: "none", gap: "20px", cursor: "pointer" }}
        >
          <li>
            <p className="relative transition duration-300 hover:text-[var(--secondary)]">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </li>
          <li>
            <p className="relative transition duration-300 hover:text-[var(--secondary)]">
              About
            </p>
          </li>
          <li>
            <p className="relative transition duration-300 hover:text-[var(--secondary)]">
              Contact
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
