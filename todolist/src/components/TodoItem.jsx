import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
        />
        <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-700 hover:bg-gray-500 font-medium"
      >
        Xóa
      </button>
    </li>
  );
}

export default TodoItem;