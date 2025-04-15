import React, { useState } from 'react';
import imgLogo from '../assets/3_Data/Lab_01/Group 9.png';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center text-pink-500 mr-4">
            <img src={imgLogo} alt="" />
          </div>
          
          <div className="relative ml-4 hidden md:block">
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-md w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-pink-500">What to cook</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Recipes</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Ingredients</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">Occasions</a>
          <a href="#" className="text-gray-600 hover:text-pink-500">About Us</a>
          <button href="#" className="bg-pink-100 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-600">Login</button>
          <button href="#" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Subscribe</button>
        </nav>
      </div>
    </header>
  );
}