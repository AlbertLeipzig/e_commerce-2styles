import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { AboutPage } from '../pages/AboutPage';
import { AccountPage } from '../pages/AccountPage';
import { AuthPage } from '../pages/AuthPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ContactPage } from '../pages/ContactPage';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';
import { SingleProductPage } from '../pages/SingleProductPage';
import { WishListPage } from '../pages/WishListPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsOfUsePage } from '../pages/TermsOfUsePage';
import { FAQPage } from '../pages/FAQPage';
import { PasswordRecoverPage } from '../pages/PasswordRecoverPage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/product/:id',
        element: <SingleProductPage />,
      },
      {
        path: '/wishlist',
        element: <WishListPage />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: '/terms-of-use',
        element: <TermsOfUsePage />,
      },
      {
        path: '/faq',
        element: <FAQPage />,
      },
      {
        path: '/password-recover',
        element: <PasswordRecoverPage />,
      },
    ],
  },
]);
