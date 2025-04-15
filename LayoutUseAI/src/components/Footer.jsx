import React from "react";
import imgLogo from "../assets/3_Data/Lab_02/chefifywhite.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white  px-4 py-2 rounded-xl w-400 text-gray-900"
              />
              <button className="ml-2 bg-pink-500 text-white px-5 py-2 rounded-r-md">
                Send
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 ml-10">Learn More</h3>
            <ul className="space-y-2 ml-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <h3 className="text-lg font-semibold mb-4 mt-10">Shop</h3>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recipes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Christmas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={imgLogo} alt="" />
            <span className="text-gray-400 ml-10 text-sm">© 2025 Chefify Company</span>
            <div className="text-sm text-gray-400 ml-10">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
