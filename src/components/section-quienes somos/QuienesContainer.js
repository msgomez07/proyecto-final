import React from "react";
import NavBar from "./NavBar";
import Containerinit from "./ContainerInit";
import ContainerFooter from "./ContainerFooter";



export default function Container() {
  return (
    <div>
      <div id="container">
        <NavBar />        
        <Containerinit />
      </div>
      <ContainerFooter />
    </div>
  );
}
