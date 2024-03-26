import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Login from "../pages/Login";
import { useState } from "react";

const Navbar = () => {
  const [loginPopUp, setLoginPopUP] = useState(false);
  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-sm">
        <h1 className="w-11 h-9 text-2xl font-extrabold cursor-pointer">Olx</h1>
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
          />
          <div className="bg-black h-full text-white px-5">
            <FaSearch className="mt-2 text-3xl" />
          </div>
        </div>

        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <IoIosArrowDown className="w-8 h-7" />
        </div>
        <div
          onClick={() => setLoginPopUP(!loginPopUp)}
          className="flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline"
        >
          <h1 className="font-semibold text-xl">Login</h1>
        </div>
        <div className="w-28 flex h-12 p-2 ml-10 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-semibold text-xl ml-3">+ Sell</h1>
        </div>
      </div>
      {loginPopUp && <Login setLogin={setLoginPopUP} />}
    </>
  );
};

export default Navbar;
