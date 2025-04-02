import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white shadow-md flex flex-col p-6 w-64 min-h-screen">
      <div className="text-2xl font-bold text-pink-500 mb-8 flex items-center space-x-2">
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 w-3 h-3 rounded-full"></span>
        <span>Logo</span>
      </div>
      
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📁</span>
          <span>Projects</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>👥</span>
          <span>Teams</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📊</span>
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>💬</span>
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>🔗</span>
          <span>Integrations</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;