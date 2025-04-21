import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateBMI } from '../features/bmiSlice';

function BMICalculator() {
  const { height, weight, bmi } = useSelector((state) => state.bmi);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">BMI Calculator</h2>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) =>
            dispatch(updateInput({ field: 'height', value: Number(e.target.value) }))
          }
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) =>
            dispatch(updateInput({ field: 'weight', value: Number(e.target.value) }))
          }
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <button
        onClick={() => dispatch(calculateBMI())}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate BMI
      </button>
      {bmi && <p className="mt-4 dark:text-white">Your BMI: {bmi}</p>}
    </div>
  );
}

export default BMICalculator;