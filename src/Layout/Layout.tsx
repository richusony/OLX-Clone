import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
