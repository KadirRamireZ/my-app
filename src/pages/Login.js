import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin, onUserProfile }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      onLogin(username);
      const profileData = {
        username,
        age: 26,
        nationality: "Costarricense",
        hobbies: "BasketBall - Anime - Music Producer",
      };
      onUserProfile(profileData);
      navigate("/home");
    } else {
      alert("Ingresa un nombre de usuario y contraseña válidos.");
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h2>Iniciar sesión</h2>
      <br></br>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default LoginPage;
