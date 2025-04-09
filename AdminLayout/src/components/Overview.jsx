import React from 'react';
import imgTurnover from '../assets/3_Data/Lab_05/Button 1509.png';
import imgProfit from '../assets/3_Data/Lab_05/Button 1529.png';
import imgIconCus from '../assets/3_Data/Lab_05/Button 1530.png';


const Overview = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-red-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-gray-600 mb-3">Turnover</h3>
          <div className="text-3xl font-bold mb-2">
            ${stats.turnover?.value.toLocaleString() || 0}
          </div>
          <div className="text-green-600 text-sm">
            ↑ {stats.turnover?.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <img src={imgTurnover} alt="" />
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-gray-600 mb-3">Profit</h3>
          <div className="text-3xl font-bold mb-2">
            ${stats.profit?.value.toLocaleString() || 0}
          </div>
          <div className="text-green-600 text-sm">
            ↑ {stats.profit?.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <img src={imgProfit} alt="" />
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-gray-600 mb-3">New customer</h3>
          <div className="text-3xl font-bold mb-2">{stats.newCustomers?.value || 0}</div>
          <div className="text-green-600 text-sm">
            ↑ {stats.newCustomers?.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <img src={imgIconCus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
