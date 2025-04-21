import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSlice';

function UserList() {
  const { users, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">User List</h2>
      {status === 'loading' && <p className="dark:text-white">Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="dark:text-white">
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;