import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

function AuthApp() {
  const [username, setUsername] = useState('');
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🔐 Auth System</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input value={username} onChange={e => setUsername(e.target.value)} />
          <button onClick={() => dispatch(login(username))}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AuthApp;
