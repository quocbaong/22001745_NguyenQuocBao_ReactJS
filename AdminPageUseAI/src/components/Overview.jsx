import { ShoppingCart, DollarSign, User } from 'lucide-react';

function Overview() {
  const statCards = [
    {
      title: 'Turnover',
      value: '$92,405',
      changePercentage: '5.39',
      bgColor: 'bg-pink-50',
      icon: <ShoppingCart size={20} />,
      iconColor: 'text-pink-500'
    },
    {
      title: 'Profit',
      value: '$32,218',
      changePercentage: '5.39',
      bgColor: 'bg-blue-50',
      icon: <DollarSign size={20} />,
      iconColor: 'text-blue-500'
    },
    {
      title: 'New customer',
      value: '298',
      changePercentage: '6.84',
      bgColor: 'bg-green-50',
      icon: <User size={20} />,
      iconColor: 'text-blue-500'
    }
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
                  <span className="text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    {stat.changePercentage}%
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