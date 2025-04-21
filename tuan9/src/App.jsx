import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';
import UserList from './components/UserList';
import AdvancedCounter from './components/AdvancedCounter';
import BMICalculator from './components/BMICalculator';
import EventManagement from './components/EventManagement';
import ThemePage from './components/ThemePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo" element={<TodoList />}/>
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/advanced-counter" element={<AdvancedCounter />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/events" element={<EventManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;