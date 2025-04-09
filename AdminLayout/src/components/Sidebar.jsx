import React from 'react';
import { Link } from 'react-router-dom';
import imgGroup from '../assets/3_Data/Lab_05/Group.png'
import imgLogo from '../assets/3_Data/Lab_05/Image 1858.png'
import imgDashboard from '../assets/3_Data/Lab_05/Squares four 1.png'
import imgProjects from '../assets/3_Data/Lab_05/Folder.png'
import imgGroups from '../assets/3_Data/Lab_05/Groups.png'
import imgMessages from '../assets/3_Data/Lab_05/Chat.png'

const Sidebar = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-7 py-10">
        <div className="text-pink-500 font-bold text-xl flex items-center gap-2">
          <img src={imgLogo} alt="" />
        </div>
      </div>

      <nav className="flex-1">
        <Link to="/" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">
            <img src={imgDashboard} alt="" />
          </span> Dashboard
        </Link>
        <Link to="/projects" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">
            <img src={imgProjects} alt="" />
            </span> Projects
        </Link>
        <Link to="/teams" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">
            <img src={imgGroups} alt="" />
            </span> Teams
        </Link>
        <Link to="/analytics" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📈</span> Analytics
        </Link>
        <Link to="/messages" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">
            <img src={imgMessages} alt="" />
            </span> Messages
        </Link>
        <Link to="/integrations" className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">🔄</span> Integrations
        </Link>
      </nav>

      <div className="p-4 m-4 bg-blue-50 rounded-lg text-center mt-auto">
        <div className="mb-2">
          <img src={imgGroup} alt="" />
        </div>
        <div className="font-bold mb-2 text-black">v2.0 is available</div>
        <button className="w-full py-2 px-4 bg-white tetx-blue-700 border border-gray-200 rounded hover:bg-gray-50">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;