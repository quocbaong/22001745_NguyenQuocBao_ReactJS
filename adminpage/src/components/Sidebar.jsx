import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/3_Data/Selection_Sidebar.jpg'
import imgLogo from '../assets/3_Data/Logo.jpg'


const Sidebar = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-5 py-4">
        <div className="text-pink-500 font-bold text-xl flex items-center gap-2">
          <img src={imgLogo} alt="" />
        </div>
      </div>
      
      <nav className="flex-1">
        <Link to="/" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📊</span> Dashboard
        </Link>
        <Link to="/projects" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📁</span> Projects
        </Link>
        <Link to="/teams" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">👥</span> Teams
        </Link>
        <Link to="/analytics" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📈</span> Analytics
        </Link>
        <Link to="/messages" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">✉️</span> Messages
        </Link>
        <Link to="/integrations" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">🔄</span> Integrations
        </Link>
      </nav>
      
      <div className="p-4 m-4 bg-blue-50 rounded-lg text-center mt-auto">
        <div className="mb-2">
          <img src={img} alt="" />
        </div>
        <div className="font-bold mb-2">v2.0 is available</div>
        <button className="w-full py-2 px-4 bg-white border border-gray-200 rounded hover:bg-gray-50">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;