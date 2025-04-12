import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Datatable from '../components/Datatable';
import { Search } from 'lucide-react';
import imgMessage from '../assets/3_Data/Lab_05/Bell 1.png'
import imgMQuestion from '../assets/3_Data/Lab_05/Question 1.png'
import imgAvatar from '../assets/3_Data/Lab_05/Avatar (1).png'

function Dashboard() {
  const [customers] = useState([
    { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <img src={imgMessage} alt="" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <img src={imgMQuestion} alt="" />
            </button>
            <div className="h-8 w-8 bg-pink-100 rounded-full overflow-hidden">
              <img src={imgAvatar} alt="User avatar" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>
        
        <div className="p-6">
          <Overview />
          <Datatable customers={customers} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;