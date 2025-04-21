import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cartSlice';

function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const sampleProducts = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
  ];

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Shopping Cart</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Add Products:</h3>
        {sampleProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => dispatch(addItem(product))}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
          >
            Add {product.name}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center dark:text-white">
            <span>
              {item.name} (${item.price}) x {item.quantity}
            </span>
            <div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
                className="w-16 border p-1 rounded mr-2 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 dark:text-white">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;