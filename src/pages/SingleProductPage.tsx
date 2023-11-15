import React from 'react';
import { IOrder } from '../utils/interfaces';

const singleProductData: IOrder = {
  images: ['', '', '', '', ''],
  title: 'Product Title',
  stars: 4,
  numberOfReviews: 150,
  price: 195.0,
  colors: ['red', 'blue'],
  description:
    'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  id: '',
  fullPrice: 0,
  quantity: 2,
};

export const SingleProductPage: React.FC = () => {
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
            <button>-</button>
            <input type="text" placeholder={singleProductData.quantity.toString()} />
            <button>+</button>
          </div>
          <button>Buy Now</button>
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
