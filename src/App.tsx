import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

useEffect(()=>{
  getProducts();
},[])

  return (
    <>
      <Home products={products} />
    </>
  );
}

export default App;
