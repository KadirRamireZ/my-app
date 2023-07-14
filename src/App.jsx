import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginPage from "../src/pages/Login";
import HomePage from "../src/pages/Home";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUserProfile(null);
  };

  const handleUserProfile = (profileData) => {
    setUserProfile(profileData);
  };

  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container id="contenedor">
            <Navbar.Brand href="#home">React-FWD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {!isLoggedIn && (
                  <Nav.Link as={Link} to="/login">
                    Ingresar
                  </Nav.Link>
                )}
                {isLoggedIn && (
                  <Nav.Link as={Link} to="/profile">
                    Perfil
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          {!isLoggedIn ? (
            <Route path="/login" element={<LoginPage onLogin={handleLogin} onUserProfile={handleUserProfile} />} />
          ) : (
            <>
              <Route
                path="/home"
                element={<HomePage username={username} onLogout={handleLogout} />}
              />
              <Route
                path="/profile"
                element={<ProfilePage {...userProfile} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
