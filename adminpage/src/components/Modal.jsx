import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, order, onSave }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    orderValue: '',  
    status: 'New',
  });

  useEffect(() => {
    if (order) {
      setFormData({
        customerName: order.customerName || '',  
        company: order.company || '',            
        orderValue: order.orderValue || '',       
        status: order.status || 'New',           
      });
    }
  }, [order]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      ...formData,
      id: order ? order.id : undefined, 
      orderValue: !isNaN(parseFloat(formData.orderValue)) ? parseFloat(formData.orderValue) : 0,
    };

    onSave(updatedOrder);
  };

  return (
    <div className="fixed bg-opacity-30 inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-bold">{order ? 'Edit Order' : 'Add Order'}</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName} 
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Order Value
              </label>
              <input
                type="number"
                name="orderValue"  
                value={formData.orderValue}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 border-t px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md"
            >
              {order ? 'Save Changes' : 'Add Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
