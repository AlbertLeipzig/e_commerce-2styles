import { NavLink } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Exclusive</h3>
        <p>Subscriber</p>
        <p>Get 10% off your first order</p>
        <input type="Enter your email " />
      </div>
      <div>
        <h3>Support</h3>
        <address>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
        </address>
      </div>
      <div>
        <h3>Account</h3>
        <NavLink to="/account">My Account</NavLink>
        <NavLink to="/auth">Login / Register</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/">Shop</NavLink>
      </div>
      <div>
        <h3>Quick Link</h3>
        <NavLink to="/privacy-policy">Privary Policy</NavLink>
        <NavLink to="/terms-of-use">Terms Of Use</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>
        <h3>Download App</h3>
        <p>Save $3 with App New User Only</p>
        <img src="" alt="" />
        <a href="" target="_blank">
          <img src="" alt="google play link" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="app store link" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="fb link" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="tw link" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="ig link" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="li link" />
        </a>
      </div>
      <div>
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};
