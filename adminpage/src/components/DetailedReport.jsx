// src/components/DetailedReport.js
import React from 'react';

function DetailedReport() {
  const data = [
    { name: 'Elizabeth Lee', company: 'AvatarSystems', orderValue: '$519', orderDate: '10/10/2023', status: 'New' },
    { name: 'Carlos Garcia', company: 'SnoozeShift', orderValue: '$747', orderDate: '24/10/2023', status: 'New' },
    { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: '$564', orderDate: '08/10/2023', status: 'In-progress' },
    { name: 'Ryan Brown', company: 'OmniTech Corporation', orderValue: '$541', orderDate: '31/10/2023', status: 'In-progress' },
    { name: 'Ryan Young', company: 'DataStream Inc.', orderValue: '$579', orderDate: '25/10/2023', status: 'Completed' },
    { name: 'Haley Adams', company: 'FlowRush', orderValue: '$922', orderDate: '25/10/2023', status: 'Completed' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">DETAILED REPORT</h2>
        <div className="space-x-2">
          <button className="border rounded-lg px-3 py-1">Import</button>
          <button className="border rounded-lg px-3 py-1">Export</button>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="py-2">CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 flex items-center space-x-2">
                <input type="checkbox" />
                <span>👤</span>
                <span>{row.name}</span>
              </td>
              <td>{row.company}</td>
              <td>{row.orderValue}</td>
              <td>{row.orderDate}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    row.status === 'New'
                      ? 'bg-blue-100 text-blue-600'
                      : row.status === 'In-progress'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td>⋮</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">1</button>
          <button className="px-3 py-1 border rounded-lg bg-pink-500 text-white">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
          <button className="px-3 py-1 border rounded-lg">4</button>
          <button className="px-3 py-1 border rounded-lg">5</button>
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;