import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const AuthPage = () => {
  const [authView, setAuthView] = useState('login');

  return (
    <div className="auth-page">
      <img src="" alt="" />
      <form action="">
        <h1>
          {authView === 'login' ? 'Create an account' : 'Log in to Exclusive'}
        </h1>
        <p>Enter your details below</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />
          <div>
            <button onClick={() => console.log('pendant to program')}>
              {authView === 'login' ? 'Log In' : 'Create Account'}
            </button>
            {authView === 'login' && (
              <NavLink to="password-recover">Forget Password</NavLink>
            )}
            {authView === 'signin' && (
              <NavLink to="password-recover">Sign Up With Google</NavLink>
            )}
            {authView === 'signin' && (
              <p>
                Already have account?{' '}
                <span onClick={() => setAuthView('login')}>Log in</span>
              </p>
            )}
          </div>
        </form>
      </form>
    </div>
  );
};
