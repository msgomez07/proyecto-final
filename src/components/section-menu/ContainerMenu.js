import React from 'react'
import NavMenu from './NavMenu'
import TimeMenu from './TimeMenu'


export default function ContainerMenu() {



    
    return (
      <div id="containerMenu" className="d-flex flex-column justify-content-between">
        <NavMenu />
        <div className="d-flex justify-content-around ">
          <h2 className="text-secondary pb-5 text-light">ENTRENAMIENTO</h2>
          <h2 className="text-secondary pb-5 text-light">DEDICACIÓN</h2>
        </div>
        
        <TimeMenu  />
        
        
      </div>
    );
}
