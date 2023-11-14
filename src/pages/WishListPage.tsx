import React from 'react';
import { ProductCardContainer } from '../components/ProductCardContainer';

interface IProps {
  id: string;
  title: string;
  price: number;
  fullPrice: number;
  stars: number;
  reviews: number;
}

const wishlistData: IProps[] = [];
const userRecommendationsData: IProps[] = [];

export const WishListPage: React.FC = () => {
  return (
    <div className="wishlist">
      <div className="user-wishlist">
        <ProductCardContainer
          button={{
            text: 'Move All To Bag',
            action: () => console.log('test'),
          }}
          cardsData={wishlistData}
        />
      </div>
      <div className="user-recommendations">
        <ProductCardContainer
          button={{ text: 'See All', action: () => console.log('test') }}
          cardsData={userRecommendationsData}
        />
      </div>
    </div>
  );
};
