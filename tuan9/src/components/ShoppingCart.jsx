import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cart/cartSlice';

function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <button onClick={() =>
        dispatch(addItem({ id: 1, name: 'Product A', price: 100 }))
      }>Add Product A</button>

      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))}
              style={{ width: '50px', marginLeft: '10px' }}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>❌</button>
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default ShoppingCart;
