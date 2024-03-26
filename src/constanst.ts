export const productUrl = "https://fakestoreapi.com/products/";

export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: { rate: number; count: number };
  title: string;
};
