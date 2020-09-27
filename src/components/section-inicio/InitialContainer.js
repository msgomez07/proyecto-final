import React from "react";
import NavBar from "./NavBar";
import Containerinit from "./ContainerInit"
import ContainerDetails from "./ContainerDetails";
// import ImagenPortada from "../../images/Portada.png";


export default function InitialContainer() {
  return (


    <div>
      
    <div id="contenedorPrincipal">
    <NavBar />
    <Containerinit />
    </div>

    <ContainerDetails />

    </div>
  );
}
