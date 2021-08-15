import './SignupScreen.css';
import React, { useRef } from 'react';
import { auth } from '../../firebase';

type Props = {};

const SignupScreen = (props: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();

    if (!emailRef.current?.value || !passwordRef.current?.value) {
      return;
    }

    auth
      .createUserWithEmailAndPassword(
        emailRef.current?.value,
        passwordRef.current?.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!emailRef.current?.value || !passwordRef.current?.value) {
      return;
    }

    auth
      .signInWithEmailAndPassword(
        emailRef.current?.value,
        passwordRef.current?.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
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
