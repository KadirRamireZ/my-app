import React from "react";

function ProfilePage({ username, age, nationality, hobbies }) {
  return (
    <div>
      <h2>Perfil de {username}</h2>

      <div>
        <div>
          <img
            src="https://i.pinimg.com/474x/7d/33/35/7d3335f2e991eeb8d1da05853a6eca5b--patterns-file.jpg"
            alt="Foto de perfil"
          />
        </div>
        <p>Nombre: {username}</p>
        <p>Edad: {age}</p>
        <p>Nacionalidad: {nationality}</p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
