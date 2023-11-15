import React from 'react';
import { Button } from './Button';
import { ProductCard } from './Product_Card';
import { IButton, IProduct } from '../utils/interfaces';

interface ProductCardContainerProps {
  button: IButton;
  cardsData: IProduct[];
}

export const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  button,
  cardsData,
}) => {
  return (
    <div className="product-card-container">
      {cardsData.length > 4 && (
        <Button text={button.text} action={button.action} />
      )}
      {cardsData.map((card) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ProductCardContainer;
