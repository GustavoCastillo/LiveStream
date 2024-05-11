import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Cart from "../components/Cart";
const Layout = () => {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 shadow">
        <div className="flex items-center">
          <a href="#" className="text-2xl text-white-800 no-underline hover:text-blue-dark">
            My Film
          </a>
          <nav className="ml-4 flex space-x-4">
            <Link to={"/"} className="text-lg text-white-800 no-underline hover:text-blue-dark">
              Home
            </Link>
            {/* <Link to={"/movie/845111"} className="text-lg text-gray-800 no-underline hover:text-blue-dark">
              Movie
            </Link>
            <Link to={"/search"} className="text-lg text-gray-800 no-underline hover:text-blue-dark">
              Search
            </Link> */}
          </nav>
        </div>
        <SearchBox />
        <Cart/>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
