import CategorySection from "../categories/sections/CategorySections";
import PromoBanner from "../categories/sections/PromoBanner";

const MEATS = [
  {
    id: 1,
    title: "Meat Packet",
    image: "/assets/images/meat.png",
    price: 78.8,
    oldPrice: 80,
    rating: 4,
    badges: ["In Stock", "Save 20%", "New"],
  },
  {
    id: 2,
    title: "Minced Meat",
    image: "/assets/images/minced.png",
    price: 67,
    rating: 4,
    badges: ["In Stock"],
  },
];

const POULTRY = [
  {
    id: 1,
    title: "Chicken Drumstick",
    image: "/assets/images/chicken.png",
    price: 55.8,
    oldPrice: 60,
    rating: 4,
    badges: ["In Stock", "Save 20%", "New"],
  },
];

const SEAFOOD = [
  {
    id: 1,
    title: "Salmon",
    image: "/assets/images/salmon.png",
    price: 79.8,
    rating: 5,
    badges: ["In Stock"],
  },
];

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <CategorySection title="Meats" products={MEATS} />
      <CategorySection title="Poultry" products={POULTRY} />
      <CategorySection title="Seafood" products={SEAFOOD} />

      <div className="mt-20">
        <PromoBanner />
      </div>
    </div>
  );
}
