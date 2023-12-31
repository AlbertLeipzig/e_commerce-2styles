import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Button } from '../components/Button';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div>
        <div>
          <span>
            <FaPhoneAlt />
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week</p>
            <p>Phone : +8801311112222</p>
          </span>
        </div>
        <div>
          <FaEnvelope />
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <form action="">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Phone" />
        <textarea placeholder="Your Message"></textarea>
        <Button text="Send Message" action={() => console.log('test')} />
      </form>
    </div>
  );
};
