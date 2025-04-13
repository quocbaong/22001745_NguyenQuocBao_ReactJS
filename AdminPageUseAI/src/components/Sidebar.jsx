import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, FileText, Users, LineChart, 
  MessageSquare, Link as LinkIcon 
} from 'lucide-react';
import imgLogo from '../assets/3_Data/Lab_05/Image 1858.png';
import imgGroup from '../assets/3_Data/Lab_05/Group.png';

function Sidebar() {
  const navItems = [
    { icon: <LayoutGrid size={20} />, title: 'Dashboard', path: '/', active: true },
    { icon: <FileText size={20} />, title: 'Projects', path: '/projects', active: false },
    { icon: <Users size={20} />, title: 'Teams', path: '/teams', active: false },
    { icon: <LineChart size={20} />, title: 'Analytics', path: '/analytics', active: false },
    { icon: <MessageSquare size={20} />, title: 'Messages', path: '/messages', active: false },
    { icon: <LinkIcon size={20} />, title: 'Integrations', path: '/integrations', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center ">
          <img src={imgLogo} alt="" />
        </div>
      </div>
      
      <nav className="mt-6 px-4">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className={`flex items-center justify-start w-full px-4 py-3 mt-2 rounded-lg ${
              item.active ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="mr-3 w-6 h-6 flex items-center justify-center">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      
      <div className="mt-50 p-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-center ">
            <img src={imgGroup} alt="Dashboard illustration" className="h-32" />
          </div>
          <h3 className="text-center font-bold mt-2">V2.0 is available</h3>
          <button className="mt-3 w-full py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;