import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

const IniciarSesion = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isLoggedIn ? (
          <Nav.Link href="#link">Cerrar Sesion</Nav.Link>
        ) : (
          <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
        )}
      </button>
    </div>
  );
};

export default IniciarSesion;
