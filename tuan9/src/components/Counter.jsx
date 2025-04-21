import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Counter</h2>
      <p className="text-xl mb-4 dark:text-white">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;