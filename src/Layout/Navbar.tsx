import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Login from "../pages/Login";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContexts";
import userContext from "../context/UserContexts";

const Navbar = () => {
  const [loginPopUp, setLoginPopUP] = useState(false);
  const [search, setSearch] = useState("");
  const { products, setProducts } = useContext(ProductContext);
  const { user } = useContext(userContext);

  const searchProducts = (str: string) => {
    if (str !== "") {
      const filtered = products.filter((item) => item.title.includes(str));
      setProducts(filtered);
    }
  };

  useEffect(() => {
    searchProducts(search);
  }, [search]);

  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-sm">
        <Link to="/">
          <h1 className="w-11 h-9 text-2xl font-extrabold cursor-pointer">
            Olx
          </h1>
        </Link>
        <div className="flex border w-64 border-spacing-1 p-2 border-black bg-white ml-5">
          <FaSearch className="w-6 h-5 my-auto mr-1" />
          <input className="outline-none" type="text" placeholder="Location" />
          <IoIosArrowDown className="w-8 h-7" />
        </div>
        <div className="flex h-12 ml-4 border border-black bg-white">
          <input
            type="text"
            placeholder="Find Cars, Moblie phones and more"
            className="ml-3 w-96 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="bg-black h-full text-white px-5">
            <FaSearch className="mt-2 text-3xl" />
          </div>
        </div>

        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <IoIosArrowDown className="w-8 h-7" />
        </div>

        {user.name ? (
          <Link
            to="/profile"
            className="flex justify-center items-center cursor-pointer underline hover:no-underline"
          >
            {user.profileUrl ? (
              <div className="mr-2 w-8">
                <img
                  className="w-full object-cover rounded-full"
                  src={user.profileUrl}
                  alt=""
                />
              </div>
            ) : null}{" "}
            <span className="text-sm text-nowrap">{user.name}</span>
          </Link>
        ) : (
          <div
            onClick={() => setLoginPopUP(!loginPopUp)}
            className="flex h-12 p-3 cursor-pointer underline hover:no-underline"
          >
            <h1 className="font-semibold h-fit text-xl flex justify-cente items-center">
              Login
            </h1>
          </div>
        )}
        <div className="w-28 flex h-12 p-2 ml-5 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-semibold text-xl ml-3">+ Sell</h1>
        </div>
      </div>
      {loginPopUp && <Login setLogin={setLoginPopUP} />}
    </>
  );
};

export default Navbar;
