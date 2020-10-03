import React from "react";

function ContainerFooter() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          <div className="col text-center">
            <h4>DE-SA</h4>
             <h5>Imagen Logo</h5>
          </div>
       
          <div className="col text-center">
            <h4>Nosotros</h4>
            <h5>Información Nosotros</h5>
          </div>
         
          <div className="col text-center">
            <h4>Nosotros</h4>
            <h5>Información Nosotros</h5>
          </div>
        </div>

        <div className="row">
          <hr />
          <p className="col-sm text-center mt-5 pt-5">            
            &copy;{2020} DE-SA (Deporte y Salud) | Derechos reservados |
            Terminos y Condiciones | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerFooter;
