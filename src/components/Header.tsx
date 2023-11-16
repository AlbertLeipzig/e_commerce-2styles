import { NavLink } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { CiHeart, CiShoppingCart, CiSearch } from 'react-icons/ci';
export const Header = () => {
  return (
    <header style={{ backgroundColor: 'hsl(0 0% 30%' }}>
      <div className="header__top">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="">ShopNow</a>
        <div>
          <select name="" id="">
            <option value="en-en">English</option>
            <option value="ge-de">Deutsch</option>
            <option value="sp-sp">Español</option>
          </select>
        </div>
      </div>
      <div className="header__bottom">
        <h2>Exclusive</h2>
        <MainNavigation />
        <div>
          <input type="text" placeholder="What are you looking for?" />
          <CiSearch />
          <NavLink to="/cart">
            <CiShoppingCart />
          </NavLink>
          <NavLink to="/wishlist">
            <CiHeart />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
