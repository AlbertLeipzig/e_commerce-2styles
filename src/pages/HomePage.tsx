import { useState, useEffect } from 'react';
import { IDeadline, IRemainingTime, IProduct } from '../utils/interfaces';
import { NavLink } from 'react-router-dom';
import { ProductCardContainer } from '../components/ProductCardContainer';
import appData from '../utils/fakeData.json';

const { products }: { products: IProduct[] } = appData;

const [todayProducts, monthProducts, ourProducts] = [
  products.slice(0, 20),
  products.slice(30, 50),
  products.slice(80),
];

const categories = [
  {
    icon: '',
    path: '',
    text: 'phones',
  },
  {
    icon: '',
    path: '',
    text: 'computers',
  },
  {
    icon: '',
    path: '',
    text: 'smartWatch',
  },
  {
    icon: '',
    path: '',
    text: 'camera',
  },
  {
    icon: '',
    path: '',
    text: 'headPhones',
  },
  {
    icon: '',
    path: '',
    text: 'gaming',
  },
  {
    icon: '',
    path: '',
    text: 'screens',
  },
  {
    icon: '',
    path: '',
    text: 'notebooks',
  },
  {
    icon: '',
    path: '',
    text: 'Foto & Drohnen',
  },
  {
    icon: '',
    path: '',
    text: 'Haushalt & Wohnen',
  },
];

const deadline: IDeadline = {
  day: 11,
  month: 12,
  hour: 0,
  minute: 0,
};

const calculateTimeToDeadline = (): IRemainingTime => {
  const now: Date = new Date();

  const deadlineDate: Date = new Date(
    now.getFullYear(),
    deadline.month - 1,
    deadline.day,
    deadline.hour,
    deadline.minute
  );
  const timeDifference: number = deadlineDate.getTime() - now.getTime();

  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes: number = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds: number = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const HomePage = () => {
  const [timeRemaining, setTimeRemaining] = useState<IRemainingTime>(() =>
    calculateTimeToDeadline()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeToDeadline());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <nav className="secondary-navigation">
          <ul>
            <li>
              <a href="">
                Woman's Fashion
                <ul>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="">
                Man's Fashion
                <ul>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Home & Lifestyle</a>
            </li>
            <li>
              <a href="">Medicine</a>
            </li>
            <li>
              <a href="">Sports & Outdoor</a>
            </li>
            <li>
              <a href="">Baby's & Toys</a>
            </li>
            <li>
              <a href="">Groceries & Pets</a>
            </li>
            <li>
              <a href="">Hearht & Beauty</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Up to 10% Voucher</h2>
        </div>
      </div>
      <ProductCardContainer
        button={{
          text: 'View All Products',
          action: () => console.log('test'),
        }}
        cardsData={todayProducts}
      />
      <div className="categories-navigation">
        {categories.map((category) => (
          <NavLink to="">
            <img src={category.path} alt={`${category.text} icon`} />
            <p>{category.text}</p>
          </NavLink>
        ))}
      </div>
      <ProductCardContainer
        button={{
          text: 'View All Products',
          action: () => console.log('test'),
        }}
        cardsData={monthProducts}
      />
      <div className="selected-product">
        <h3>Categories</h3>
        <h2>Enhance Your Music Experience</h2>
        <div>
          <p>
            <span>{timeRemaining.days}</span>Days
          </p>
          <p>
            <span>{timeRemaining.hours}</span>Hours
          </p>
          <p>
            <span>{timeRemaining.minutes}</span>Minutes
          </p>
          <p>
            <span>{timeRemaining.seconds}</span>Seconds
          </p>
        </div>
        <button>Buy Now!</button>
      </div>
      <ProductCardContainer
        button={{
          text: 'View All Products',
          action: () => console.log('test'),
        }}
        cardsData={ourProducts}
      />{' '}
      <div className="featured">
        <h2>New Arrival</h2>
        <div>
          <h3>PlayStation 5</h3>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <NavLink to="">Shop Now</NavLink>
        </div>
        <div>
          <h3>Women's Collections</h3>
          <p>Featured woman collections that give you another vibe.</p>
          <NavLink to="">Shop Now</NavLink>
        </div>
        <div>
          <h3>Speakers</h3>
          <p>Amazon wireless speakers</p>
          <NavLink to="">Shop Now</NavLink>
        </div>
        <div>
          <h3>Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>
          <NavLink to="">Shop Now</NavLink>
        </div>
      </div>
    </div>
  );
};
