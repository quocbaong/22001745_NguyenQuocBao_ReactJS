import { useState } from "react";
import logo from "../assets/3_Data/Lab01/Group 9.png";
import avatar from "../assets/3_Data/Lab02/Avatar 35.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-36 h-8" />
      </div>

      {/* Search Bar */}
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-5">
        <a href="#" className="text-black text-sm hover:text-pink-500">
          What to cook
        </a>
        <a href="#" className="text-black text-sm hover:text-pink-500">
          Recipes
        </a>
        <a href="#" className="text-black text-sm hover:text-pink-500">
          Ingredients
        </a>
        <a href="#" className="text-black text-sm hover:text-pink-500">
          Occasions
        </a>
        <a href="#" className="text-black text-sm hover:text-pink-500">
          About us
        </a>
      </nav>

      {/* Recipe Box & Profile */}
      <div className="flex items-center gap-3">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600">
          Your Recipe Box
        </button>
        <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}

export default Header;
