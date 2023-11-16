import { NavLink } from 'react-router-dom';
import { IOrder } from '../utils/interfaces';
import appData from '../utils/fakeData.json';

const { orders }: { orders: IOrder[] } = appData;

const calculateCosts = (userOrders: IOrder[]) => {
  const singleProductSubtotal = userOrders.map(
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
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>
              <img src={order.images[0]} alt={`${order.title} image`} />
            </td>
            <td>${order.price}</td>
            <td>
              <select name="" id="" value={order.quantity}>
                {[...Array(10).keys()].map((num) => (
                  <option value={num + 1} key={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </td>
            <td>${calculateCosts([order]).singleProductSubtotal}</td>
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
            <p>${calculateCosts(orders).subtotal}</p>
          </div>
          <div>
            <p>Shipping:</p>
            <p>
              {calculateCosts(orders).shipping === 0
                ? 'Free'
                : `$${calculateCosts(orders).shipping}`}
            </p>
          </div>
          <div>
            <p>Total:</p>
            <p>{calculateCosts(orders).total} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};
