import React from "react";

function HomePage({ username, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h2>Bienvenido {username}!</h2>
      <br></br>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default HomePage;
