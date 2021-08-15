import './app.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';

type Props = {};

const App = (props: Props) => {
  const user = null;

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
