import { useState, useContext, useEffect } from 'react';
import { IRemainingTime, IProduct } from '../utils/interfaces';
import { calculateTimeToDeadline } from '../utils/tools';
import { NavLink } from 'react-router-dom';
import { ProductCardContainer } from '../components/ProductCardContainer';
import appData from '../utils/fakeData.json';
import { AppContext } from '../utils/AppContext';
import { Button } from '../components/Button';
import { MdOutlineSmartphone, MdComputer } from 'react-icons/md';
import { BsSmartwatch } from 'react-icons/bs';
import { CiCamera, CiHeadphones, CiLaptop } from 'react-icons/ci';
import { SiYoutubegaming } from 'react-icons/si';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import { TbDroneOff } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';

const categories = [
  {
    icon: <MdOutlineSmartphone />,
    text: 'phones',
  },
  {
    icon: <MdComputer />,
    text: 'computers',
  },
  {
    icon: <BsSmartwatch />,
    text: 'smartWatch',
  },
  {
    icon: <CiCamera />,
    text: 'camera',
  },
  {
    icon: <CiHeadphones />,
    text: 'headPhones',
  },
  {
    icon: <SiYoutubegaming />,
    text: 'gaming',
  },
  {
    icon: <MdOutlineScreenshotMonitor />,
    text: 'screens',
  },
  {
    icon: <CiLaptop />,
    text: 'notebooks',
  },
  {
    icon: <TbDroneOff />,
    text: 'Foto & Drohnen',
  },
  {
    icon: <FaHome />,
    text: 'Haushalt & Wohnen',
  },
];

export const HomePage = () => {
  const [timeRemaining, setTimeRemaining] = useState<IRemainingTime>(() =>
    calculateTimeToDeadline()
  );

  const { products }: { products: IProduct[] } = useContext(AppContext);

  const [todayProducts, monthProducts, ourProducts] = [
    products.slice(0, 4),
    products.slice(50, 54),
    products.slice(96, 100),
  ];

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
              <NavLink to="">Woman's Fashion</NavLink>
            </li>
            <li>
              <NavLink to="">Man's Fashion</NavLink>
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
          text: 'Shop Now',
          action: () => console.log('test'),
        }}
        cardsData={todayProducts}
      />
      <div className="categories-navigation">
        {categories.map((category, i) => (
          <NavLink to="" key={i}>
            {category.icon}

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
        <Button text="Buy Now!" action={() => console.log('test')} />
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
