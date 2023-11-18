import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const AuthPage = () => {
  const [authView, setAuthView] = useState('signin');

  return (
    <div className="auth-page">
      <img
        src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div>
        <h1>
          {authView === 'login' ? 'Log in to Exclusive' : 'Create an account'}
        </h1>
        <p>Enter your details below</p>
        <form action="">
          {authView === 'signin' && <input type="text" placeholder="Name" />}

          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />
          <button onClick={() => console.log('pendant to program')}>
            {authView === 'login' ? 'Log In' : 'Create Account'}
          </button>
          {authView === 'login' && (
            <NavLink to="password-recover" >Forget Password</NavLink>
          )}
          {authView === 'signin' && (
            <NavLink to="password-recover" className="google-signup">Sign Up With Google</NavLink>
          )}
          {authView === 'signin' && (
            <p>
              Already have account?{' '}
              <span onClick={() => setAuthView('login')}>Log in</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
