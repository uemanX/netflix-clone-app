import './app.css';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/user/userSlice';
import ProfileScreen from './components/ProfileScreen';

type Props = {};

const App = (props: Props) => {
  const user = useAppSelector(selectUser);
  const dispach = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log('logged in............');
        console.log(userAuth);
        dispach(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        console.log('logged out............');
        // Logged out
        dispach(logout());
      }
    });

    return unsubscribe;
  }, [dispach]);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
