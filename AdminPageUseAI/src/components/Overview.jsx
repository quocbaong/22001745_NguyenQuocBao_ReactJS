import { ShoppingCart, DollarSign, User } from 'lucide-react';
import { useRef, useEffect } from 'react';

function Overview({ customers = [], orders = [] }) {
  const previousTurnover = useRef(0);
  const previousProfit = useRef(0);
  const previousNewCustomerCount = useRef(0);

  const turnover = orders.reduce((total, order) => total + (order.amount || 0), 0);
  const profit = turnover * 0.35;
  const newCustomerCount = customers.filter(c => c.status && c.status.toLowerCase().includes('new')).length;

  const turnoverChange = previousTurnover.current > 0 ? ((turnover - previousTurnover.current) / previousTurnover.current * 100).toFixed(2) : 0;
  const profitChange = previousProfit.current > 0 ? ((profit - previousProfit.current) / previousProfit.current * 100).toFixed(2) : 0;
  const newCustomerChange = previousNewCustomerCount.current > 0 ? ((newCustomerCount - previousNewCustomerCount.current) / previousNewCustomerCount.current * 100).toFixed(2) : 0;

  useEffect(() => {
    previousTurnover.current = turnover;
    previousProfit.current = profit;
    previousNewCustomerCount.current = newCustomerCount;
    console.log("Overview updated - Turnover:", turnover, "Profit:", profit, "New Customers:", newCustomerCount);
  }, [turnover, profit, newCustomerCount]);

  const statCards = [
    {
      title: 'Turnover',
      value: `$${turnover.toLocaleString()}`,
      changePercentage: `${turnoverChange}%`,
      bgColor: 'bg-pink-50',
      icon: <ShoppingCart size={20} />,
      iconColor: 'text-pink-500',
    },
    {
      title: 'Profit',
      value: `$${profit.toLocaleString()}`,
      changePercentage: `${profitChange}%`,
      bgColor: 'bg-blue-50',
      icon: <DollarSign size={20} />,
      iconColor: 'text-blue-500',
    },
    {
      title: 'New customer',
      value: newCustomerCount.toString(),
      changePercentage: `${newCustomerChange}%`,
      bgColor: 'bg-green-50',
      icon: <User size={20} />,
      iconColor: 'text-green-500',
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold flex items-center text-gray-800 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Overview
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-lg p-6 relative`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-700 font-medium mb-1">{stat.title}</h3>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center mt-2">
                  <span className={`flex items-center ${parseFloat(stat.changePercentage) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={parseFloat(stat.changePercentage) >= 0 ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                    {stat.changePercentage}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">period of change</span>
                </div>
              </div>
              <button className={`p-2 bg-white rounded-md shadow-sm ${stat.iconColor}`}>
                {stat.icon}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Overview;