// import React, { useState } from "react";


// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   if (isLoggedIn) {
//     return (
//       <div>
//         <p>Sesión iniciada</p>
//         <button onClick={handleLogout}>Cerrar sesión</button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={username}
//         onChange={handleUsernameChange}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// };

// export default LoginForm;
