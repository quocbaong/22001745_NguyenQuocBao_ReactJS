import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';
import cartReducer from '../features/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer,
    cart: cartReducer,
  },
});