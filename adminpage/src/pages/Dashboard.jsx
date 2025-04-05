import React, { useState, useEffect } from "react";
import Overview from "../components/Overview";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const [stats, setStats] = useState({
    turnover: { value: 92405, change: 5.33 },
    profit: { value: 32218, change: 5.33 },
    newCustomers: { value: 298, change: 6.84 },
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬆️</span> Import
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬇️</span> Export
            </button>
          </div>
        </div>
        <DataTable data={orders} loading={loading} />
      </section>
    </div>
  );
};

export default Dashboard;
