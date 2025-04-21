import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const CounterPage = () => {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        1. Ứng dụng đếm số đơn giản
      </h1>
      <div className={`max-w-md mx-auto ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md`}>
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold mb-6">{count}</div>
          <div className="flex space-x-4">
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-medium"
            >
              Giảm
            </button>
            <button
              onClick={() => dispatch(increment())}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-medium"
            >
              Tăng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;