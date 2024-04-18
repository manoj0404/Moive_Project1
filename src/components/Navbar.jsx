import React from "react";
import Logo from "../assets/moive.png"; // Assuming your image path is correct
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex border space-x-8 item-center pl-3 py-4">
            <img className="w-[50px]" src={Logo} alt="no image" /> {/* Use Logo instead of logo */}
            <Link to="/" className="text-blue-400 text-2xl font-bold" >Movies</Link>
            <Link to="/watchList" className="text-blue-400 text-2xl font-bold" >WatchList</Link>
        </div>
    );
};

export default Navbar;


