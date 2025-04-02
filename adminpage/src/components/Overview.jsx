import React, { useEffect, useState } from 'react';

function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://67ec9394aa794fb3222e224b.mockapi.io/report')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const totalTurnover = 679;
  const totalProfit = 237.65;
  const totalNewCustomers = 15;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold flex items-center space-x-2">
        <span className="text-pink-500">▍</span> <span>Overview</span>
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-4 text-black">
        <div className="p-6 rounded-lg shadow-md bg-red-200">
          <h3 className="text-gray-500">TURNOVER</h3>
          <p className="text-3xl font-bold">${totalTurnover}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-green-200">
          <h3 className="text-gray-500">PROFIT</h3>
          <p className="text-3xl font-bold">${totalProfit}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-blue-200">
          <h3 className="text-gray-500">NEW CUSTOMERS</h3>
          <p className="text-3xl font-bold">{totalNewCustomers}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
