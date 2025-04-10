import React, { useState } from "react";
import imgCreate from "../assets/3_Data/Lab_05/Create.png";
import Modal from "./Modal";

const DataTable = ({ data, loading, setOrders, setStats }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = async (updatedOrder) => {
    try {
      const response = await fetch(
        `https://67ec9394aa794fb3222e224b.mockapi.io/report/${updatedOrder.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedOrder),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      const updatedData = await response.json();

      const updatedOrders = data.map((order) =>
        order.id === updatedData.id ? { ...order, ...updatedData } : order
      );

      setOrders(updatedOrders);

      const totalTurnover = updatedOrders.reduce(
        (sum, item) => sum + (parseFloat(item.orderValue) || 0),
        0
      );
      const totalProfit = totalTurnover * 0.35;

      const newCustomersCount = updatedOrders.filter(
        (order) => order.status === "New"
      ).length;

      setStats({
        turnover: { value: totalTurnover, change: 5.33 },
        profit: { value: totalProfit, change: 3.21 },
        newCustomers: { value: newCustomersCount, change: 6.84 },
      });

      closeModal();
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order");
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-600";
      case "In-progress":
        return "bg-yellow-100 text-yellow-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100";
    }
  };
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
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Customer Name
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Company
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Order Value
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Order Date
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Status
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                          <img
                            src={order.avatar || "/path/to/default-avatar.jpg"}
                            alt={order.customerName || "No Name"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{order.customerName || "Unknown Customer"}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{order.company}</td>
                    <td className="px-4 py-3">${order.orderValue}</td>
                    <td className="px-4 py-3">
                      {new Date(order.oderDate * 1000).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => openModal(order)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <img src={imgCreate} alt="" />
                      </button>
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
                className={`w-8 h-8 flex items-center justify-center border rounded ${
                  currentPage === 1
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                &lt;
              </button>

              {[
                ...Array(
                  Math.min(5, Math.ceil(data.length / rowsPerPage))
                ).keys(),
              ].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    currentPage === number + 1
                      ? "bg-pink-500 text-white border-pink-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {number + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
                className={`w-8 h-8 flex items-center justify-center border rounded ${
                  currentPage === Math.ceil(data.length / rowsPerPage)
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      )}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        order={selectedOrder}
        onSave={handleSave}
      />
    </div>
  );
};

export default DataTable;
