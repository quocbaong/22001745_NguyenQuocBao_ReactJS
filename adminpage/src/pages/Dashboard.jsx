import React, { useState, useEffect } from "react";
import Overview from "../components/Overview";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [stats, setStats] = useState({
    turnover: { value: 0, change: 5.33 },
    profit: { value: 0, change: 5.33 },
    newCustomers: { value: 0, change: 6.84 },
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openAddModal = () => {
    setSelectedOrder(null); 
    setModalOpen(true);
  };

  const openEditModal = (order) => {
    setSelectedOrder(order); 
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = async (newOrder) => {
    try {
      let response;
      if (newOrder.id) {
        response = await fetch(
          `https://67ec9394aa794fb3222e224b.mockapi.io/report/${newOrder.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrder),
          }
        );
      } else {
        response = await fetch(
          "https://67ec9394aa794fb3222e224b.mockapi.io/report",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrder),
          }
        );
      }

      if (!response.ok) throw new Error("Failed to save order");

      const savedOrder = await response.json();

      const updatedOrders = newOrder.id
        ? orders.map((order) =>
            order.id === savedOrder.id ? { ...order, ...savedOrder } : order
          )
        : [...orders, savedOrder];

      setOrders(updatedOrders);

      const totalTurnover = updatedOrders.reduce(
        (sum, item) => sum + (parseFloat(item.orderValue) || 0),
        0
      );
      const totalProfit = totalTurnover * 0.35;

      setStats({
        turnover: { value: totalTurnover, change: 5.33 },
        profit: { value: totalProfit, change: 3.21 },
        newCustomers: { value: updatedOrders.filter(order => order.status === "New").length, change: 6.84 },
      });

      setModalOpen(false);
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to save order");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67ec9394aa794fb3222e224b.mockapi.io/report"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setOrders(data);

        const totalTurnover = data.reduce(
          (sum, item) => sum + (parseFloat(item.orderValue) || 0),
          0
        );
        const profit = totalTurnover * 0.35;

        const newCustomersCount = data.filter((item) => item.status === "New").length;

        setStats({
          turnover: { value: totalTurnover, change: 5.33 },
          profit: { value: profit, change: 3.21 },
          newCustomers: { value: newCustomersCount, change: 6.84 },
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 border-b">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 border border-gray-200 rounded-md w-48"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            🔔
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            ?
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <Overview stats={stats} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Detailed report</h2>
          <div className="flex gap-2">
            <button
              onClick={openAddModal}
              className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded"
            >
              <span className="mr-2">➕</span> Add
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬆️</span> Import
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬇️</span> Export
            </button>
          </div>
        </div>
        <DataTable
          data={orders}
          loading={loading}
          setOrders={setOrders}
          setStats={setStats}
          openEditModal={openEditModal}
        />
      </section>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        order={selectedOrder}
        onSave={handleSave}
      />
    </div>
  );
};

export default Dashboard;
