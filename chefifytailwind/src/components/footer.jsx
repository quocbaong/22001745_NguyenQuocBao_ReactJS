import React from "react";
import logo from "../assets/3_Data/Lab02/Group 16.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-2/3 border border-gray-600 rounded-l-md focus:outline-none focus:ring focus:ring-pink-500 text-gray-900"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
              Send
            </button>
          </div>
        </div>

        {/* Learn More & Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Learn More</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-pink-500">Our Cooks</a></li>
            <li><a href="#" className="hover:text-pink-500">See Our Features</a></li>
            <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">Shop</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-pink-500">Gift Subscription</a></li>
            <li><a href="#" className="hover:text-pink-500">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-pink-500">What to Cook This Week</a></li>
            <li><a href="#" className="hover:text-pink-500">Pasta</a></li>
            <li><a href="#" className="hover:text-pink-500">Dinner</a></li>
            <li><a href="#" className="hover:text-pink-500">Healthy</a></li>
            <li><a href="#" className="hover:text-pink-500">Vegetarian</a></li>
            <li><a href="#" className="hover:text-pink-500">Vegan</a></li>
            <li><a href="#" className="hover:text-pink-500">Christmas</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Chefify Logo" className="w-36" />
        </div>
        <p className="text-sm text-gray-500">
          © 2023 Chefify Company &nbsp; | &nbsp;
          <a href="#" className="hover:text-white">Terms of Service</a> &nbsp; | &nbsp;
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
