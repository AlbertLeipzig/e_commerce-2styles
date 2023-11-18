import { useNavigate, NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>º{' '}
        <div className="error-page__buttons">
          <button>
            <NavLink to="/">Go To Home Page</NavLink>
          </button>
          <button onClick={() => navigate(-1)}>Go Back to Previous Page</button>
        </div>
      </div>
    </div>
  );
};
