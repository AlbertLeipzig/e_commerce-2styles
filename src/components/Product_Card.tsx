import React from 'react';
import { IProduct } from '../utils/interfaces';
import { CiStar } from 'react-icons/ci';
import { Button } from './Button';

// the button addToCart only appears in Wishlist
// it's display does NOT depend on js, but in css

// in case the component is inside the class .wishlist it will get display : none

export const ProductCard: React.FC<IProduct> = ({
  title,
  images,
  price,
  fullPrice,
  stars,
  numberOfReviews,
}) => {
  return (
    <div className="product-card">
      <img src={images[0]} alt="" />
      <Button text="Add To Card" action={() => console.log('test')} />
      <h3>{title}</h3>
      <div className="product-card__price-container">
        <p>{price}</p>
        <p>{fullPrice}</p>
      </div>
      <div className="product-card__reviews">
        <div>
          {Array.from({ length: stars }).map((star, i) => (
            <CiStar key={i} />
          ))}
        </div>
        <p>{numberOfReviews}</p>
      </div>
    </div>
  );
};
