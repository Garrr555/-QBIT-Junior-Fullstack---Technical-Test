type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  imageLocal: string;
  imageFe: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ background: "white", borderRadius: "10px" }}
    >
      <img
        src={product.imageLocal}
        alt={product.name}
        loading="lazy"
        className="w-full object-cover transition-transform duration-500 hover:scale-105"
        style={{ height: "400px" }}
      />
      <div style={{ padding: "20px" }}>
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--primary)" }}
        >
          {product.name}
        </h3>
        <p
          className="font-medium text-gray-700"
          style={{ color: "var(--dark)" }}
        >
          Rp {product.price.toLocaleString()}
        </p>
        <button
          className="w-full transition duration-300 transform hover:scale-105 hover:brightness-90"
          style={{
            background: "var(--secondary)",
            marginTop: "12px",
            padding: "16px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            color: "white",
            
          }}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
