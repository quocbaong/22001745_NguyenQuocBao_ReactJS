import { useState } from 'react';
import { ChevronLeft, ChevronRight, Edit } from 'lucide-react';

function Datatable({ customers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 63;

  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case 'New':
        return 'text-blue-500 bg-blue-100';
      case 'In-progress':
        return 'text-yellow-600 bg-yellow-50';
      case 'Completed':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Detailed report
        </h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 border border-pink-200 text-pink-500 rounded-lg hover:bg-pink-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Import
          </button>
          <button className="flex items-center px-4 py-2 border border-pink-200 text-pink-500 rounded-lg hover:bg-pink-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Export
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 p-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order Value
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img src={`/api/placeholder/${customer.id}/80`} alt={customer.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                  {customer.company}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-900">
                  {customer.value}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                  {customer.date}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-blue-500">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {totalResults} results
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-2 rounded hover:bg-gray-200 text-gray-500">
              <ChevronLeft size={18} />
            </button>
            
            {[1, 2, 3, 4, '...', 10, 11].map((page, index) => (
              <button 
                key={index} 
                className={`w-8 h-8 flex items-center justify-center rounded ${currentPage === page ? 'bg-pink-500 text-white' : 'hover:bg-gray-200 text-gray-600'}`}
              >
                {page}
              </button>
            ))}
            
            <button className="p-2 rounded hover:bg-gray-200 text-gray-500">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datatable;
