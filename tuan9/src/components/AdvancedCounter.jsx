import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, setStep } from '../features/advancedCounterSlice';

function AdvancedCounter() {
  const { count, step } = useSelector((state) => state.advancedCounter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Advanced Counter</h2>
      <p className="text-xl mb-4 dark:text-white">Count: {count}</p>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => dispatch(setStep(Number(e.target.value)))}
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Increment by Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded mr-2 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Amount
        </button>
      </div>
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
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default AdvancedCounter;