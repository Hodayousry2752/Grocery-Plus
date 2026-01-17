import type { Product } from "./shop.types";

export const filterProducts = (
  products: Product[],
  filters: any
): Product[] => {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.inStock && !product.inStock) return false;
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    )
      return false;

    return true;
  });
};
