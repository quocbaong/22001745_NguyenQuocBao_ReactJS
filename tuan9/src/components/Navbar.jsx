import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { path: '/', label: 'Counter' },
    { path: '/todo', label: 'Todo List' },
    { path: '/theme', label: 'Theme Toggle' },
    { path: '/cart', label: 'Shopping Cart' },
    { path: '/auth', label: 'Auth' },
    { path: '/users', label: 'User List' },
    { path: '/advanced-counter', label: 'Advanced Counter' },
    { path: '/bmi', label: 'BMI Calculator' },
    { path: '/events', label: 'Event Management' },
  ];

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex space-x-4 text-white">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'font-bold underline' : 'hover:underline'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;