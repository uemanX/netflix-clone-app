import './app.css';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';

type Props = {};

const App = (props: Props) => {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log('logged in............');
        console.log(userAuth);
      } else {
        console.log('logged out............');
        // Logged out
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
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
