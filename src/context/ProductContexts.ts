import { createContext, Dispatch, SetStateAction } from 'react';
interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: { rate: number; count: number };
  title: string;
};

interface ProductContextType {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}


const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

export default ProductContext;
