// En el archivo App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

function Pag() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
   
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/inicio-sesion">
          <LoginPage />
        </Route>
        <Route exact path="/inicio">
          <HomePage username={username} onLogout={handleLogout} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Pag;
