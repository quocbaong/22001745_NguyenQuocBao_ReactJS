import { useEffect, useState } from "react";
import Overview from "../components/Overview";
import Datatable from "../components/Datatable";
import { Search } from "lucide-react";
import imgMessage from "../assets/3_Data/Lab_05/Bell 1.png";
import imgMQuestion from "../assets/3_Data/Lab_05/Question 1.png";
import imgAvatar from "../assets/3_Data/Lab_05/Avatar (1).png";

const randomAvatar = () => {
  const genders = ["male", "female"];
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const id = Math.floor(Math.random() * 100); // từ 0 đến 99
  return `https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/${gender}/512/${id}.jpg`;
};

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://67ec9394aa794fb3222e224b.mockapi.io/report")
      .then((res) => res.json())
      .then((data) => {
        const formattedCustomers = data.map((item) => ({
          id: item.id,
          name: item.customerName || item.name,
          company: item.company || item.companyName,
          value: `${parseInt(item.orderValue || 0)}`,
          date: item.oderDate || "January",
          status: item.status,
          avatar: item.avatar,
        }));

        const formattedOrders = data.map((item) => ({
          id: item.id,
          amount: parseInt(item.orderValue || 0),
        }));

        setCustomers(formattedCustomers);
        setOrders(formattedOrders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching initial data:", err);
        setLoading(false);
      });
  }, []);

  const handleCustomerUpdate = async (updatedCustomer) => {
    try {
      let response;

      const customerData = {
        customerName: updatedCustomer.name,
        company: updatedCustomer.company,
        orderValue: parseFloat(updatedCustomer.value) || 0,
        oderDate: updatedCustomer.date || "January",
        status: updatedCustomer.status || "New",
        avatar: updatedCustomer.avatar || randomAvatar(),
      };

      if (!updatedCustomer.id) {
        response = await fetch("https://67ec9394aa794fb3222e224b.mockapi.io/report", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customerData),
        });

        if (!response.ok) throw new Error(`Failed to add customer: ${await response.text()}`);

        const newCustomer = await response.json();

        setCustomers((prev) => [
          ...prev,
          {
            id: newCustomer.id,
            name: newCustomer.customerName,
            company: newCustomer.company,
            value: `${parseFloat(newCustomer.orderValue)}`,
            date: newCustomer.oderDate,
            status: newCustomer.status,
            avatar: newCustomer.avatar,
          },
        ]);

        setOrders((prev) => [
          ...prev,
          {
            id: newCustomer.id,
            amount: parseFloat(newCustomer.orderValue),
          },
        ]);

        return true;
      } else {
        response = await fetch(`https://67ec9394aa794fb3222e224b.mockapi.io/report/${updatedCustomer.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customerData),
        });

        if (!response.ok) throw new Error(`Failed to update customer: ${await response.text()}`);

        const updatedData = await response.json();

        setCustomers((prev) =>
          prev.map((c) =>
            c.id === updatedCustomer.id
              ? {
                  ...c,
                  name: updatedData.customerName,
                  company: updatedData.company,
                  value: `${parseFloat(updatedData.orderValue)}`,
                  date: updatedData.oderDate,
                  status: updatedData.status,
                  avatar: updatedData.avatar,
                }
              : c
          )
        );

        setOrders((prev) =>
          prev.map((o) =>
            o.id === updatedCustomer.id
              ? { ...o, amount: parseFloat(updatedData.orderValue) }
              : o
          )
        );

        return true;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
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

        <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
          <div className="px-6 py-4">
            <Overview customers={customers} orders={orders} />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-1">
            <Datatable customers={customers} loading={loading} onCustomerUpdate={handleCustomerUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
