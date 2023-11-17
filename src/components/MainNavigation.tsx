import { NavLink } from 'react-router-dom';
export const MainNavigation = () => {
  return (
    <nav className='main-navigation'>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};
