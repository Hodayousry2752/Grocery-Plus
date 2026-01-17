export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  category: string;
  brand: string;
  inStock: boolean;
  badges?: string[];
}
