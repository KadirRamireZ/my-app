import React from "react";

function HomePage({ username, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h2>Bienvenido {username}!</h2>
      <br></br>
      <br></br>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default HomePage;
