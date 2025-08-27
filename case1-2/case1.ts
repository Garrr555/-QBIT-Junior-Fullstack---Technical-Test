// case1.ts
type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 6, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 7, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

// 1. Buah apa saja yang dimiliki Andi?
function getFruitNames() {
  return fruits.map((f) => f.fruitName);
}

function getName() {
  const sameName = Array.from(
    new Set(fruits.map((f) => f.fruitName.toLowerCase()))
  );

  return sameName.sort((a, b) => a.localeCompare(b));
}

// 2. Pisahkan buah ke dalam wadah berdasarkan tipe
function groupByFruitType() {
  const result: Record<string, string[]> = {};
  for (const fruit of fruits) {
    if (!result[fruit.fruitType]) {
      result[fruit.fruitType] = [];
    }
    result[fruit.fruitType].push(fruit.fruitName);
  }
  return result;
}

// 3. Hitung total stok di masing-masing wadah
function stockByFruitType() {
  const result: Record<string, number> = {};
  for (const fruit of fruits) {
    if (!result[fruit.fruitType]) {
      result[fruit.fruitType] = 0;
    }
    result[fruit.fruitType] += fruit.stock;
  }
  return result;
}

// 4. Komentar terkait kasus
function commentCase1() {
  return (
    "Ada duplikasi fruitId dan nama buah yang berbeda kapitalisasi ('Apel', 'apel', 'KURMA'). " +
    "Hal ini bisa menimbulkan inkonsistensi data. " +
    "Sebaiknya distandardisasi agar tidak dianggap sebagai buah berbeda."
  );
}

//run kode
console.log("1. Buah Andi:", getFruitNames());
console.log("2. Group by tipe:", groupByFruitType());
console.log("3. Total stock:", stockByFruitType());
console.log("4. Komentar:", commentCase1());

console.log("5. test:", getName());
