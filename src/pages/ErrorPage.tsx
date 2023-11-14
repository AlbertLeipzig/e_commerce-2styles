import { useNavigate, NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error_page">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>º{' '}
      <NavLink to="/">Go To Home Page</NavLink>
      <button onClick={() => navigate(-1)}>Go Back to Previous Page</button>
    </div>
  );
};
