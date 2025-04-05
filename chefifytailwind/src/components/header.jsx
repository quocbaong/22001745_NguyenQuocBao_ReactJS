import { Search } from "lucide-react";
import logo from "../assets/3_Data/Lab01/Group 9.png";
import avatar from "../assets/3_Data/Lab02/Avatar 35.png";
import './style.css';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-32 h-6" />
        <span className="text-xl font-bold text-pink-500">Cheffiy</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-pink-500 transition-colors">What to cook</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Recipes</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Ingredients</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Occasions</a>
        <a href="#" className="hover:text-pink-500 transition-colors">About Us</a>
      </nav>

      {/* Search Bar */}
      <div className="relative flex items-center w-64 bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent pl-2 text-sm text-gray-700 focus:outline-none"
        />
      </div>

      {/* Recipe Box & Profile */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 text-sm rounded-full hover:bg-pink-600 transition-colors">
          <Search className="text-white" size={16} /> Your Recipe Box
        </button>
        <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full border-2 border-pink-300" />
      </div>
    </header>
  );
}

export default Header;