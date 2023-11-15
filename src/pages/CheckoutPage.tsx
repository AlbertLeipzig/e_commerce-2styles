import { IOrder } from '../utils/interfaces';
import appData from '../utils/fakeData.json';

const { orders }: { orders: IOrder[] } = appData;

const calculateCosts = () => {
  const subtotal = orders.reduce((acc, curr) => acc + curr.price, 0);
  const shipping = subtotal > 500 ? 0 : subtotal * 0.2;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
};

export const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h2>Billing Details</h2>
      <form action=""></form>
      <div className="cart-container">
        <div className="cart-container__products">
          {orders.map((product, index) => (
            <div key={index}>
              <img src={product.images[0]} alt={`${product.title} image`} />
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
            </div>
          ))}
        </div>
        <div className="cart-container__invoice">
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
        <div className="cart-container__payment-system">
          <div>
            <label htmlFor="">
              Bank
              <input type="checkbox" />
            </label>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <label htmlFor="">
            Cash on delivery
            <input type="checkbox" />
          </label>
          <div>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
        </div>
        <button>Place Order</button>
      </div>
    </div>
  );
};
