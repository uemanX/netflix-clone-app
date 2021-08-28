import './ProfileScreen.css';
import React from 'react';
import Nav from '../Nav';
import { useAppSelector } from '../../hooks';
import { selectUser } from '../../features/user/userSlice';
import { auth } from '../../firebase';
import PlanScreen from '../PlanScreen';

type Props = {};

const ProfileScreen = (props: Props) => {
  const user = useAppSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
          <div className='profileScreen__details'>
            <h2>{user?.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans</h3>

              <PlanScreen />

              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
