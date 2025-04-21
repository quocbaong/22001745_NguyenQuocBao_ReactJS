import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer,
  },
});