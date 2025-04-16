import React from 'react';
import CounterApp from './components/CounterApp';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import AuthApp from './components/AuthApp';

function App() {
  return (
    <div>
      <CounterApp />
      <hr />
      <TodoList />
      <hr />
      <ThemeToggle />
      <hr />
      <ShoppingCart />
      <hr />
      <AuthApp />
    </div>
  );
}

export default App;
