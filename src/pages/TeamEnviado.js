import React from "react";

function TeamEnviado() {
  let imgEnviado =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png";
  return (
    <div className="container text-center bg-dark text-white pt-4">
         <h1>Tu Equipo ha sido enviado Exitosamente!</h1>
      <img src={imgEnviado} alt="Imagen-greninja" />
      <p className="pb-4">*Recuerda que podria tardar hasta 24hrs en que te llegue tu equipo a tu mail</p>
    </div>
  );
}

export default TeamEnviado;
