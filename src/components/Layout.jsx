/* eslint-disable react-refresh/only-export-components */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "./CustomCursor";

const Layout = () => {

  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
        <CustomCursor />
      </div>
    </>
  );
};

export default Layout;
