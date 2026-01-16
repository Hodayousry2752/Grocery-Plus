import ProductCard from "../../../components/common/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  products: any[];
}

export default function CategorySection({
  title,
  products,
}: CategorySectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-6 text-black">{title}</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2">
          <ChevronLeft />
        </button>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
