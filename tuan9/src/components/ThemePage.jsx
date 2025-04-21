import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

const ThemePage = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto">
        <div 
          className={`p-8 rounded-lg shadow-lg transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700 text-white' 
              : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-6">
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
            <h2 className="text-xl font-semibold mb-6">
              Chế độ hiện tại: {theme === 'dark' ? 'Tối' : 'Sáng'}
            </h2>
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`py-2 px-4 rounded-lg ${
                theme === 'dark'
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-800'
                  : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              }`}
            >
              Chuyển sang chế độ {theme === 'dark' ? 'Sáng' : 'Tối'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;