import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-4 mb-10 bg-gray-900 text-center">
      <Link className="font-mono text-2xl font-medium mx-4 text-gray-100 hover:text-red-500" to={"/"}>Home</Link>
      <Link className="font-mono text-2xl font-medium mx-4 text-gray-100 hover:text-red-500" to={"/users"}>Users</Link>
      <Link className="font-mono text-2xl font-medium mx-4 text-gray-100 hover:text-red-500" to={"/about"}>About</Link>
    </nav>
  );
};

export default Header;
