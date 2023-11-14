import React from 'react';

interface IProps {
  id: string;
  title: string;
  price: number;
  fullPrice: number;
  stars: number;
  reviews: number;
}

export const ProductCard: React.FC<IProps> = ({
  id,
  title,
  price,
  fullPrice,
  stars,
  reviews,
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
      <p>{reviews}</p>
    </div>
  );
};
