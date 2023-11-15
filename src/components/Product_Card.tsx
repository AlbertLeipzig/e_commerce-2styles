import React from 'react';
import { IProduct } from '../utils/interfaces';

export const ProductCard: React.FC<IProduct> = ({
  title,
  price,
  fullPrice,
  stars,
  numberOfReviews,
}) => {
  return (
    <div className="product-card">
      <img src="" alt="" />
      <h3>{title}</h3>
      <div className="product-card__price-container">
        <p>{price}</p>
        <p>{fullPrice}</p>
      </div>
      <p>{Array.from({ length: stars }, () => '*').join('')}</p>
      <p>{numberOfReviews}</p>
    </div>
  );
};
