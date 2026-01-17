import ProductCard from "../../../components/common/ProductCard";
import type { Product } from "../shop.types";

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
          badges={product.badges}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
