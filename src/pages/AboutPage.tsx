import { IEmployee } from '../utils/interfaces';
const employeesData: IEmployee[] = [
  {
    id: '1',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image1.jpg',
    firstName: 'John',
    lastName: 'Doe',
    role: 'Software Engineer',
    socialMedia: {
      tw: 'twitter.com/johndoe',
      ig: 'instagram.com/johndoe',
      li: 'linkedin.com/in/johndoe',
    },
  },
  {
    id: '2',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image2.jpg',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'UX Designer',
    socialMedia: {
      tw: 'twitter.com/janesmith',
      ig: 'instagram.com/janesmith',
      li: 'linkedin.com/in/janesmith',
    },
  },
  {
    id: '16',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image16.jpg',
    firstName: 'Sam',
    lastName: 'Williams',
    role: 'Data Analyst',
    socialMedia: {
      tw: 'twitter.com/samwilliams',
      ig: 'instagram.com/samwilliams',
      li: 'linkedin.com/in/samwilliams',
    },
  },
  {
    id: '17',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image17.jpg',
    firstName: 'Olivia',
    lastName: 'Anderson',
    role: 'Project Manager',
    socialMedia: {
      tw: 'twitter.com/oliviaanderson',
      ig: 'instagram.com/oliviaanderson',
      li: 'linkedin.com/in/oliviaanderson',
    },
  },
  {
    id: '14',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image14.jpg',
    firstName: 'Alex',
    lastName: 'Turner',
    role: 'Graphic Designer',
    socialMedia: {
      tw: 'twitter.com/alexturner',
      ig: 'instagram.com/alexturner',
      li: 'linkedin.com/in/alexturner',
    },
  },
  {
    id: '15',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image15.jpg',
    firstName: 'Emma',
    lastName: 'Johnson',
    role: 'Marketing Specialist',
    socialMedia: {
      tw: 'twitter.com/emmajohnson',
      ig: 'instagram.com/emmajohnson',
      li: 'linkedin.com/in/emmajohnson',
    },
  },
  {
    id: '16',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image16.jpg',
    firstName: 'Sam',
    lastName: 'Williams',
    role: 'Data Analyst',
    socialMedia: {
      tw: 'twitter.com/samwilliams',
      ig: 'instagram.com/samwilliams',
      li: 'linkedin.com/in/samwilliams',
    },
  },
  {
    id: '17',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image17.jpg',
    firstName: 'Olivia',
    lastName: 'Anderson',
    role: 'Project Manager',
    socialMedia: {
      tw: 'twitter.com/oliviaanderson',
      ig: 'instagram.com/oliviaanderson',
      li: 'linkedin.com/in/oliviaanderson',
    },
  },
  {
    id: '18',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image18.jpg',
    firstName: 'Max',
    lastName: 'Miller',
    role: 'Sales Representative',
    socialMedia: {
      tw: 'twitter.com/maxmiller',
      ig: 'instagram.com/maxmiller',
      li: 'linkedin.com/in/maxmiller',
    },
  },
  {
    id: '19',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image19.jpg',
    firstName: 'Sophie',
    lastName: 'Clark',
    role: 'Customer Support Specialist',
    socialMedia: {
      tw: 'twitter.com/sophieclark',
      ig: 'instagram.com/sophieclark',
      li: 'linkedin.com/in/sophieclark',
    },
  },
  {
    id: '20',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image20.jpg',
    firstName: 'Ryan',
    lastName: 'Taylor',
    role: 'Web Developer',
    socialMedia: {
      tw: 'twitter.com/ryantaylor',
      ig: 'instagram.com/ryantaylor',
      li: 'linkedin.com/in/ryantaylor',
    },
  },
  {
    id: '21',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image21.jpg',
    firstName: 'Ella',
    lastName: 'White',
    role: 'Content Writer',
    socialMedia: {
      tw: 'twitter.com/ellawhite',
      ig: 'instagram.com/ellawhite',
      li: 'linkedin.com/in/ellawhite',
    },
  },
  {
    id: '22',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image22.jpg',
    firstName: 'Chris',
    lastName: 'Brown',
    role: 'UI/UX Designer',
    socialMedia: {
      tw: 'twitter.com/chrisbrown',
      ig: 'instagram.com/chrisbrown',
      li: 'linkedin.com/in/chrisbrown',
    },
  },
  {
    id: '23',
    email: 'test@mail.com',
    address: 'test address',
    img: 'path/to/image23.jpg',
    firstName: 'Mia',
    lastName: 'Robinson',
    role: 'Marketing Coordinator',
    socialMedia: {
      tw: 'twitter.com/miarobinson',
      ig: 'instagram.com/miarobinson',
      li: 'linkedin.com/in/miarobinson',
    },
  },
];

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
        <img src="" alt="two happy customers" />
      </section>
      <section className="about-page__testimonial">
        <div className="testimonial-card">
          <img src="" alt="store icon" />
          <p>10.5k</p>
          <h3>Sallers active our site</h3>
        </div>
        <div className="testimonial-card">
          <img src="" alt="dollar icon" />
          <p>33k</p>
          <h3>Mopnthly Produduct Sale</h3>
        </div>
        <div className="testimonial-card">
          <img src="" alt="shopping bag icon" />
          <p>45.5k</p>
          <h3>Customer active in our site</h3>
        </div>
        <div className="testimonial-card">
          <img src="" alt="money bag icon" />
          <p>25k</p>
          <h3>Anual gross sale in our site</h3>
        </div>
      </section>
      <section className="employees">
        {employeesData.map((employee) => (
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
          <img src="" alt="fast vehicle icon" />
          <h3>free and fast delivery</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <img src="" alt="headphones icon" />
          <h3>24/7 customer service</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <img src="" alt="approved shield icon" />
          <h3>money back guarantee</h3>
          <p>we return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};
