import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badges?: string[];
}

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  badges = [],
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl border p-4 w-[250px] shrink-0">
      {/* Badges */}
      <div className="flex gap-2 mb-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="text-xs px-2 py-1 rounded-full bg-[var(--color-primary)] text-white"
          >
            {badge}
          </span>
        ))}
      </div>

      <img src={image} alt={title} className="h-36 mx-auto mb-4" />

      <h3 className="text-sm font-medium text-black mb-1">{title}</h3>

      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-black">£ {price}</span>
        {oldPrice && (
          <span className="line-through text-sm text-gray-400">
            £ {oldPrice}
          </span>
        )}
      </div>

      <div className="text-yellow-400 mb-3">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary-btns)] text-white py-2 rounded-lg text-sm">
        <ShoppingCart size={16} />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
