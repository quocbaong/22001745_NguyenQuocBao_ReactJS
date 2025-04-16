import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todos/todosSlice';

function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>📋 To-do List</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        dispatch(addTodo(text));
        setText('');
      }}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
