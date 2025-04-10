import React, { useState } from "react";

const DataTable = ({ data, loading, setOrders, setStats }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {loading ? (
        <div className="p-8 text-center">Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Customer Name</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Company</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Order Value</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Order Date</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-3">

                    </td>
                    
                    <td className="px-4 py-3">
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-4 py-3 border-t flex justify-between items-center">
            <span className="text-sm text-gray-600">{data.length} results</span>
            <div className="flex gap-1">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center border rounded ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                &lt;
              </button>
              
              {[...Array(Math.min(5, Math.ceil(data.length / rowsPerPage))).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${currentPage === number + 1 ? 'bg-pink-500 text-white border-pink-500' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {number + 1}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
                className={`w-8 h-8 flex items-center justify-center border rounded ${currentPage === Math.ceil(data.length / rowsPerPage) ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default DataTable;

