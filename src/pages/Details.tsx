import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import ProductContext from "../context/ProductContexts";

const Details = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const filteredData = products.filter((item) => item.id.toString() === id);
  console.log(products);
  return (
    <>
      <div className="min-h-screen">
        <div className="pt-10 flex justify-evenly">
          <div className="w-96 h-96">
            <img
              className="object-cover w-full h-full"
              src={filteredData[0]?.image}
              alt=""
            />
          </div>

          <div className="px-2 w-1/2 ">
            <h1 className="text-3xl font-semibold">{filteredData[0]?.title}</h1>
            <h2 className="mt-2 text-lg text-gray-800">
              Category : {filteredData[0]?.category}
            </h2>
            <h2 className="mt-2 text-gray-500">
              {filteredData[0]?.description}
            </h2>
            <div className="flex items-center">
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                Price : ${filteredData[0]?.price}
              </h2>
              <h2 className="mt-2 ml-10 text-gray-800 w-fit flex items-center">
                Rating : {filteredData[0]?.rating?.rate}{" "}
                <FaStar className="ml-1" />
              </h2>
            </div>

            <div className="mt-5">
              <button className="px-4 py-2 border-2 border-black rounded">
                Learn more
              </button>
              <button className="ml-5 px-9 py-2 bg-gray-800 text-white rounded shadow-md">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
