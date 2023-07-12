import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginPage from "../src/pages/Login";
import HomePage from "../src/pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          {!isLoggedIn ? (
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          ) : (
            <Route path="/home" element={<HomePage username={username} onLogout={handleLogout} />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
