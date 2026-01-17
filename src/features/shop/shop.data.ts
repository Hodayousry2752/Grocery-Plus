import type { Product } from "./shop.types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Peach",
    image: "/assets/images/peach.png",
    price: 3.08,
    oldPrice: 3.5,
    rating: 4,
    category: "Fruits",
    brand: "Brand A",
    inStock: true,
    badges: ["In Stock", "Save 20%", "New"],
  },
  {
    id: 2,
    title: "Pineapple",
    image: "/assets/images/pineapple.png",
    price: 6.08,
    oldPrice: 6.85,
    rating: 5,
    category: "Fruits",
    brand: "Brand B",
    inStock: true,
    badges: ["In Stock", "Save 20%", "New"],
  },
];
