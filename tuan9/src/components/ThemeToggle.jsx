import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#222' : '#eee',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '20px'
    }}>
      <h2>🔁 Current Theme: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
