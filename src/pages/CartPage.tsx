import { NavLink } from 'react-router-dom';
import { IOrder } from '../utils/interfaces';
import appData from '../utils/fakeData.json';

const { orders }: { orders: IOrder[] } = appData;

const calculateCosts = () => {
  const singleProductSubtotal = orders.map(
    (product) => product.price * product.quantity
  );
  const subtotal = singleProductSubtotal.reduce((acc, curr) => acc + curr, 0);
  const shipping = subtotal > 500 ? 0 : subtotal * 0.2;
  const total = subtotal + shipping;

  return { singleProductSubtotal, subtotal, shipping, total };
};

export const CartPage = () => {
  return (
    <div className="cart-page">
      <table>
        <th>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </th>
        {orders.map((product) => (
          <tr>
            <td>{product.images[0]}</td>
            <td>${product.price}</td>
            <td>
              <select name="" id="">
                <option value="" defaultValue={product.quantity}></option>
              </select>
            </td>
            <td>{calculateCosts().singleProductSubtotal}</td>
          </tr>
        ))}
      </table>
      <button>
        <NavLink to="/">Return To Shop</NavLink>
      </button>
      <button>Update Cart</button>
      <fieldset>
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </fieldset>
      <div>
        <h3>Cart Total</h3>
        <div>
          {' '}
          <div>
            <p>Subtotal:</p>
            <p>{calculateCosts().subtotal} $</p>
          </div>
          <div>
            <p>Shipping:</p>
            <p>
              {calculateCosts().shipping === 0
                ? 'Free'
                : `${calculateCosts().shipping} $`}
            </p>
          </div>
          <div>
            <p>Total:</p>
            <p>{calculateCosts().total} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};
