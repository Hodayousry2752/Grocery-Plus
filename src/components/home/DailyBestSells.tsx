import { useEffect, useState } from "react";

const bestSells = [
  {
    tag: "Save 10%",
    category: "Coffee & teas",
    name: "Coffee 1kg",
    brand: "By Mr.food",
    price: 20,
    oldPrice: 25,
    sold: 20,
    total: 50,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    tag: "Best deal",
    category: "Meat",
    name: "Hala Sausage 240g",
    brand: "By Mr.food",
    price: 100,
    oldPrice: 170,
    sold: 7,
    total: 20,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
  },
  {
    tag: "Save 10%",
    category: "Coffee & teas",
    name: "Green Tea 200g",
    brand: "By Mr.food",
    price: 30,
    oldPrice: 35,
    sold: 32,
    total: 50,
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca",
  },
  {
    tag: "Save 10%",
    category: "Vegetables",
    name: "Onions 1Kg",
    brand: "By Mr.food",
    price: 40,
    oldPrice: 50,
    sold: 2,
    total: 10,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
  },
];

export default function DailyBestSells() {
  const [time, setTime] = useState({ h: 10, m: 56, s: 21 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        if (p.s > 0) return { ...p, s: p.s - 1 };
        if (p.m > 0) return { h: p.h, m: p.m - 1, s: 59 };
        if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
        return p;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-primary)]">
          Daily Best Sells
        </h2>

        <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
          Expires in:
          <span className="ml-2">
            {String(time.h).padStart(2, "0")}:
            {String(time.m).padStart(2, "0")}:
            {String(time.s).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {bestSells.map((item, i) => {
          const percent = Math.round((item.sold / item.total) * 100);

          return (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-xl shadow-md relative"
            >
              {/* Tag */}
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded
                ${
                  item.tag === "Best deal"
                    ? "bg-blue-500 text-white"
                    : "bg-yellow-600 text-white"
                }`}
              >
                {item.tag}
              </span>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">{item.category}</p>

                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.brand}</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-[var(--color-primary)]">
                    £{item.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    £{item.oldPrice}
                  </span>
                </div>

                {/* Sold */}
                <div className="text-sm mb-1">
                  Sold: {item.sold}/{item.total}
                </div>

                {/* Progress */}
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-full bg-[var(--color-primary)] rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* Button */}
                <button className="w-full bg-[var(--color-primary-btns)] text-white py-2 rounded-lg hover:opacity-90 transition">
                  🛒 Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
