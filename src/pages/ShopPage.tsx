import { useState } from "react";
import ShopHero from "../features/shop/components/ShopHero";
import FiltersSidebar from "../features/shop/components/FiltersSidebar";
import ProductsGrid from "../features/shop/components/ProductsGrid";
import DiscountBanner from "../features/shop/components/DiscountBanner";
import  { PRODUCTS } from "../features/shop/shop.data";
import { filterProducts } from "../features/shop/shop.utils";

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    inStock: false,
    priceRange: [0, 100],
  });

  const filteredProducts = filterProducts(PRODUCTS, filters);

  return (
    <>
      <ShopHero />

      <div className="container mx-auto flex gap-6 py-10">
        <FiltersSidebar filters={filters} setFilters={setFilters} />
        <ProductsGrid products={filteredProducts} />
      </div>

      <DiscountBanner />
    </>
  );
};

export default ShopPage;
