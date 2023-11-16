import React from 'react';
import { IProduct } from '../utils/interfaces';
import { CiStar } from 'react-icons/ci';

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
      <h3>{title}</h3>
      <div className="product-card__price-container">
        <p>{price}</p>
        <p>{fullPrice}</p>
      </div>
      <p>
        {Array.from({ length: stars }).map((star, i) => (
          <CiStar key={i} />
        ))}
      </p>
      <p>{numberOfReviews}</p>
    </div>
  );
};
