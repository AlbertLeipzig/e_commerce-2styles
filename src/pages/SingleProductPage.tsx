import { useState } from 'react';
import { IProduct } from '../utils/interfaces';
import { Button } from '../components/Button';
import appData from '../utils/fakeData.json';

const singleProductData: IProduct = appData.orders[0];

export const SingleProductPage: React.FC = () => {
  const [orderQuantity, setOrderQuantity] = useState(0);

/*   const handleOrderQuantityChange = () => {
    setOrderQuantity(orderQuantity < 1 ? 0 : orderQuantity - 1);
  }; */

  return (
    <div className="single-product-page">
      <div className="images-container">
        {singleProductData.images.map((img, index) => (
          <img key={index} src={img} alt={`${singleProductData.title} image`} />
        ))}
      </div>
      <div className="info-container">
        <h1>{singleProductData.title}</h1>
        <p>
          {singleProductData.stars}{' '}
          <span>{singleProductData.numberOfReviews} reviews</span>
        </p>
        <p>${singleProductData.price}</p>
        <p>{singleProductData.description}</p>
        <div className="info-container__separation-lane"></div>
        <div>
          <h2>Colors :</h2>
          {singleProductData.colors.map((color, index) => (
            <input type="checkbox" key={index} value={color}></input>
          ))}
        </div>
        <div className="info-container__action-container">
          <div>
            <Button text="-" action={() => console.log('test')} />
            <input type="text" placeholder={`${orderQuantity}`} />
            <Button text="+" action={() => console.log('test')} />
          </div>
          <Button text="Buy Now" action={() => console.log('test')} />
          <button onClick={() => console.log('add to wishlist')}>
            <img src="" alt="add to wishlist icon" />
          </button>
        </div>
        <div className="info-container__deliver-info">
          <div>
            <img src="" alt="deliver icon" />
            <h3>Free Delivery</h3>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div>
            <img src="" alt="return icon" />
            <h3>Return Delivery</h3>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};
