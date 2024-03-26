import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";

const Details = () => {
  type productType = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating?: { rate: number; count: number };
    title: string;
  };
  const { id } = useParams();
  const [product, setproduct] = useState<productType>();

  const getproduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  useEffect(() => {
    getproduct();
  }, []);
  return (
    <>
      <div className="min-h-screen">
        <div className="pt-10 flex justify-evenly">
          <div className="w-96 h-96">
            <img
              className="object-cover w-full h-full"
              src={product?.image}
              alt=""
            />
          </div>

          <div className="px-2 w-1/2 ">
            <h1 className="text-3xl font-semibold">{product?.title}</h1>
            <h2 className="mt-2 text-lg text-gray-800">
              Category : {product?.category}
            </h2>
            <h2 className="mt-2 text-gray-500">{product?.description}</h2>
            <div className="flex items-center">
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                Price : ${product?.price}
              </h2>
              <h2 className="mt-2 ml-10 text-gray-800 w-fit flex items-center">
                Rating : {product?.rating?.rate} <FaStar className="ml-1" />
              </h2>
            </div>

            <div className="mt-5">
                <button className="px-4 py-2 border-2 border-black rounded">Learn more</button>
                <button className="ml-5 px-9 py-2 bg-gray-800 text-white rounded shadow-md">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
