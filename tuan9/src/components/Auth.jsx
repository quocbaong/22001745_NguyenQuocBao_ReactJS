import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from '../features/authSlice';

function Auth() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
    }
  };

  const handleUpdateInfo = () => {
    if (email.trim()) {
      dispatch(setUserInfo({ email }));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Authentication</h2>
      {isLoggedIn ? (
        <div>
          <p className="mb-4 dark:text-white">Welcome, {user.username}!</p>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded mr-2 dark:bg-gray-700 dark:text-white"
              placeholder="Update email"
            />
            <button
              onClick={handleUpdateInfo}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Email
            </button>
          </div>
          <p className="mb-4 dark:text-white">Email: {user.email || 'Not set'}</p>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded mr-2 dark:bg-gray-700 dark:text-white"
            placeholder="Enter username"
          />
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Auth;