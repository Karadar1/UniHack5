import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from 'src/components/Navbar/Navbar';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AccountSettings from './pages/AccountSettings';
import MyPurchases from './pages/MyPurchases';

export const UserPage = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    if (user) {
      user.setUser(null);
      user.isAuthenticated = false;
      navigate('/');
      localStorage.removeItem('token');
      console.log('User signed out', user);
    }
  };

  return (
    <div>
      <Navbar topTransparent={false} />
      {user?.isAuthenticated ? (
        <div className="userContainer">
          return (
          {/* <Router>
                            <Switch>
                                <Route path='/profile/settings' Component={AccountSettings} />
                                <Route path='/profile/purchases' Component ={MyPurchases} />

                            </Switch>
                        </Router> */}
          );
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
export default UserPage;
