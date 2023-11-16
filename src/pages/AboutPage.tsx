import { IEmployee } from '../utils/interfaces';
import { CiShop } from 'react-icons/ci';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { TbMoneybag } from 'react-icons/tb';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';

import appData from '../utils/fakeData.json';

const { employees }: { employees: IEmployee[] } = appData;

export const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-page__story">
        <h2>Our Story</h2>
        <p>
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{' '}
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1658506871173-7498f5371ed1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXJzfGVufDB8fDB8fHww"
          alt="three happy customers"
        />
      </section>
      <section className="about-page__testimonial">
        <div className="testimonial-card">
          <CiShop />
          <p>10.5k</p>
          <h3>Sallers active our site</h3>
        </div>
        <div className="testimonial-card">
          <HiOutlineCurrencyDollar />
          <p>33k</p>
          <h3>Mopnthly Produduct Sale</h3>
        </div>
        <div className="testimonial-card">
          <BiSolidShoppingBagAlt />
          <p>45.5k</p>
          <h3>Customer active in our site</h3>
        </div>
        <div className="testimonial-card">
          <TbMoneybag />
          <p>25k</p>
          <h3>Anual gross sale in our site</h3>
        </div>
      </section>
      <section className="employees">
        {employees.map((employee: IEmployee) => (
          <div className="employee-card" key={employee.id}>
            <img
              src={employee.img}
              alt={`${employee.firstName} ${employee.lastName}`}
            />
            <h3>
              {employee.firstName} {employee.lastName}
            </h3>
            <p>{employee.role}</p>
            <div>
              <a
                href={employee.socialMedia.tw}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="path/to/your/twitter-icon.png" alt="tw link icon" />
              </a>
              <a
                href={employee.socialMedia.ig}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="path/to/your/instagram-icon.png" alt="ig link icon" />
              </a>
              <a
                href={employee.socialMedia.li}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="path/to/your/linkedin-icon.png" alt="li link icon" />
              </a>
            </div>
          </div>
        ))}
        <nav>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </nav>
      </section>
      <section className="main-proposition">
        <div>
          <FaPhoneAlt />
          <h3>free and fast delivery</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <FaEnvelope />
          <h3>24/7 customer service</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <IoShieldCheckmark />
          <h3>money back guarantee</h3>
          <p>we return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};
