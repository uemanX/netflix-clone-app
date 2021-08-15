import './SignupScreen.css';
import React from 'react';

type Props = {};

const SignupScreen = (props: Props) => {
  const register = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
  };

  const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link' onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
