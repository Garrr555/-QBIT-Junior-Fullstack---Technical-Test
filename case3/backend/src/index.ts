import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static images
app.use("/images", express.static("public/images"));

// route produk
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
  console.log(
    `📸 Gambar tersedia di http://localhost:${PORT}/images/keripik.jpg`
  );
});
