import { NavLink } from 'react-router-dom';
export const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Auth</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
      </ul>
    </nav>
  );
};
