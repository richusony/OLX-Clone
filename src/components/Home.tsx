import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 p-5">
      {products.map((item: any) => (
        <Link key={item.id} to={`/details/${item.id}`}>
          <div className="border border-spacing-1 p-2 ml-3 mt-3">
            <img className="object-cover w-60 h-48" src={item.image} alt="" />
            <h1 className="font-bold text-xl">$ {item?.price}</h1>
            <h1>{item?.title}</h1>
            <h1>{item?.category}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
