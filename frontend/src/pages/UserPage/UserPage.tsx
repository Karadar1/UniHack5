import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from 'src/components/Navbar/Navbar';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {
  LeftSideMenu,
  ListMember,
  ListMenu,
  RigthContainer,
  MainContainer,
  UserPhoto
  // UsernameContainer
} from './UserPage.styled';

const userData = {
  username: 'test',
  email: 'test@test.ro',
  role: 'buyer'
};

// Placeholder image
const userCirclePhoto = 'https://via.placeholder.com/150';

export const UserPage = () => {
  const user = useContext(UserContext);
  if (user) {
    user.isAuthenticated = true;
  }

  const navigate = useNavigate();
  const handleSignOut = () => {
    if (user) {
      user.setUser(() => ({
        username: userData.username,
        email: userData.email,
        role: 'buyer' // Update the role property to be of type "buyer" | "seller" | "admin"
      }));
      if (user.isAuthenticated) {
        user.isAuthenticated = false;
      }
      navigate('/');
      localStorage.removeItem('token');
      console.log('User signed out', user);
    }
  };

  return (
    <>
      <Navbar />

      <MainContainer>
        <LeftSideMenu>
          <UserPhoto>
            <img src={userCirclePhoto} style={{ borderRadius: '50%' }} />
            {/* <UsernameContainer>Username: {userData.username}</UsernameContainer> */}
          </UserPhoto>
        </LeftSideMenu>
        <RigthContainer>Rigth Container</RigthContainer>
      </MainContainer>
    </>
  );
};
export default UserPage;
