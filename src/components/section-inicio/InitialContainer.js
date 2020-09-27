import React from "react";
import NavBar from "./NavBar";
// import ImagenPortada from "../../images/Portada.png";


export default function InitialContainer() {
  return (
    <div id="contenedorPrincipal">
      {/* <img
        className="imagen-header "
        id="img"
        src={ImagenPortada}
        alt="Foto Portada"
      /> */}

      <NavBar />

      <div className="modal-dialog text-center mt-0">
        <div className="col-sm-8 main-section pt-5">
          <div className="modal-content mt" id="modal">
            <form className="col-12">
              <h3 className="iniciar-sesion mt-3">Iniciar Sesión</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-3" id="form-control1"
                  placeholder="Ingrese usuario o correo"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2" id="form-control2"
                  placeholder="Ingrese contraseña" 
                ></input>
              </div>
              <button type="submit" className="btn btn-secondary mt-2">Ingresar</button>
            </form>
            <div className="col-12 forgot mt-3 mb-2">
                <a href="/">Recordar contraseña</a>                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
