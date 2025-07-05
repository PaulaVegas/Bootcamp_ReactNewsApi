import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''}>New Article</NavLink></li>
          <li><NavLink to="/list" className={({ isActive }) => isActive ? 'active' : ''}>Article List</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
