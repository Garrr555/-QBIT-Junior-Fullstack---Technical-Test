import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Keripik Singkong",
      price: 15000,
      image: "/images/keripik.jpg",
    },
    { id: 2, name: "Sambal Roa", price: 25000, image: "/images/sambal.jpg" },
    { id: 3, name: "Kopi Bubuk", price: 30000, image: "/images/kopi.jpg" },
  ];

  return NextResponse.json(products);
}
