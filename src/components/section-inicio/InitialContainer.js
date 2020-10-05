import React from "react";
import NavBar from "./NavBar";
import ContainerInit from "./ContainerInit";
import ContainerDetails from "./ContainerDetails";


export default function InitialContainer() {
  return (
    <div>
      <div id="contenedorPrincipal">
        <NavBar />
        <ContainerInit />
      </div>

      <ContainerDetails />
    </div>
  );
}
