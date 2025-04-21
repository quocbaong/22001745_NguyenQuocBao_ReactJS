import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';
import cartReducer from '../features/cartSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
  },
});