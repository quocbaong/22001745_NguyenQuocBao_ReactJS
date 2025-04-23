import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  // State cho danh sách công việc, lấy từ localStorage hoặc API
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lấy danh sách công việc từ API khi mount
  useEffect(() => {
    fetch('https://67ec9394aa794fb3222e224b.mockapi.io/todolist')
      .then(response => {
        if (!response.ok) throw new Error('Không thể lấy dữ liệu');
        return response.json();
      })
      .then(data => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Lưu todos vào localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Hàm thêm công việc mới
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTodoItem = { title: newTodo, completed: false };
    fetch('https://67ec9394aa794fb3222e224b.mockapi.io/todolist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodoItem),
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]);
        setNewTodo('');
      })
      .catch(error => setError('Không thể thêm công việc'));
  };

  // Hàm xóa công việc
  const deleteTodo = (id) => {
    fetch(`https://67ec9394aa794fb3222e224b.mockapi.io/todolist/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => setError('Không thể xóa công việc'));
  };

  // Hàm đánh dấu hoàn thành/chưa hoàn thành
  const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    fetch(`https://67ec9394aa794fb3222e224b.mockapi.io/todolist/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    })
      .then(response => response.json())
      .then(data => {
        setTodos(todos.map(todo => (todo.id === id ? data : todo)));
      })
      .catch(error => setError('Không thể cập nhật công việc'));
  };

  // Lọc danh sách công việc
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  // Tính tổng số công việc và số công việc hoàn thành
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  // Trạng thái tải
  if (isLoading) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Quản lý công việc</h1>
        <p className="text-center text-gray-500">Đang tải...</p>
      </div>
    );
  }

  // Trạng thái lỗi
  if (error) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Quản lý công việc</h1>
        <p className="text-center text-red-500">Lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Quản lý công việc</h1>

      {/* Ô input và nút Thêm */}
      <div className="flex mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nhập công việc mới..."
          className="flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-3 bg-blue-600 text-white font-medium rounded-r hover:bg-blue-700 transition"
        >
          Thêm
        </button>
      </div>

      {/*Nút lọc */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
        >
          Chưa hoàn thành
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
        >
          Đã hoàn thành
        </button>
      </div>

      {/*Sử dụng component TodoItem */}
      <ul className="space-y-2">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {/*Hiển thị thống kê */}
      <div className="mt-6 text-gray-600">
        <p>Tổng: {totalTodos} | Hoàn thành: {completedTodos}</p>
      </div>
    </div>
  );
}

export default App;