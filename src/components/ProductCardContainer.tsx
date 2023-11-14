import React from 'react';
import { Button } from './Button';
import { ProductCard } from './Product_Card';

interface CardData {
  id: string;
  title: string;
  price: number;
  fullPrice: number;
  stars: number;
  reviews: number;
}

interface ProductCardContainerProps {
  button: {
    text: string;
    action: () => void;
  };
  cardsData: CardData[];
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
