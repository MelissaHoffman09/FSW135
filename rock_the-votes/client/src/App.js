import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Navbar from './components/Navbar.js';
import {UserContext} from './context/UserProvider.js';

function App() {
const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      <Navbar logout={logout} token={token} />
      <Switch>
        <Route
          exact path="/" 
          render={() => token ? <Redirect to="/profile" /> : <Auth />} 
        />
        <ProtectedRoute
          path="/profile" 
          component={Profile}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  );
}

export default App;