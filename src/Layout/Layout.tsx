import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar";
import ProductContext from "../context/ProductContexts.ts";
import UserContext, { UserType } from "../context/UserContexts.ts";
import { productUrl } from "../constanst.ts";

interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: { rate: number; count: number };
  title: string;
}

const Layout = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user, setUser] = useState<UserType>({
  name:"",
  email:"",
  profileUrl:""
})

  const getProducts = () => {
    fetch(productUrl)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Failed to fetch products:", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <UserContext.Provider
        value={{ user, setUser}}
      >
        <Navbar />
        <Menubar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </ProductContext.Provider>
  );
};

export default Layout;
