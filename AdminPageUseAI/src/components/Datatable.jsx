import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Edit } from "lucide-react";

function Datatable({ customers, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [displayedCustomers, setDisplayedCustomers] = useState([]);
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  useEffect(() => {
    if (customers.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setDisplayedCustomers(customers.slice(startIndex, endIndex));
    }
  }, [customers, currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStatusBadgeClasses = (status) => {
    if (status && status.toLowerCase().includes("new")) {
      return "text-blue-500 bg-blue-100";
    }
    
    switch (status) {
      case "In-progress":
      case "status 2":
      case "status 3":
        return "text-yellow-600 bg-yellow-50";
      case "Completed":
      case "status 4":
      case "status 5":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Detailed report
        </h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 border border-pink-200 text-pink-500 rounded-lg hover:bg-pink-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            Import
          </button>
          <button className="flex items-center px-4 py-2 border border-pink-200 text-pink-500 rounded-lg hover:bg-pink-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-105 overflow-y-auto relative">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-12 p-4 bg-gray-50">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Customer Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Order Value
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Order Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="min-h-full"> 
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">Loading...</td>
                  </tr>
                ) : displayedCustomers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No data available</td>
                  </tr>
                ) : (
                  displayedCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-3">
                            <img
                              src={customer.avatar || `/api/placeholder/${customer.id}/80`}
                              alt={customer.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-gray-900">
                            {customer.name}
                          </span>
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
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(
                            customer.status
                          )}`}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button className="text-gray-400 hover:text-blue-500">
                          <Edit size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">{customers.length} results</div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className={`p-2 rounded ${currentPage === 1 ? 'text-gray-300' : 'hover:bg-gray-200 text-gray-500'}`}
            >
              <ChevronLeft size={18} />
            </button>

            {getPaginationNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === page
                    ? "bg-pink-500 text-white"
                    : page === "..."
                    ? "text-gray-600"
                    : "hover:bg-gray-200 text-gray-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={`p-2 rounded ${currentPage === totalPages ? 'text-gray-300' : 'hover:bg-gray-200 text-gray-500'}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datatable;