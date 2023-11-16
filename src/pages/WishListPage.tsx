import React from 'react';
import { IProduct } from '../utils/interfaces';
import { ProductCardContainer } from '../components/ProductCardContainer';
import fakeData from '../utils/fakeData.json';

const wishlistData: IProduct[] = fakeData.products.slice(25, 27);
const userRecommendationsData: IProduct[] = fakeData.products.slice(54, 58);

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
