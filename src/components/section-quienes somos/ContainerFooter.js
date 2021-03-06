import React from "react";
import Logo from '../../images/Logo.png'
import Michael from '../../images/Michael.png'
import Ivan from '../../images/Ivan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContainerFooter() {
  return (
    <div className="container-fluid main-footer d-flex flex-row">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row w-100">
         
          <div className="d-flex flex-column align-items-center w-100 p-3 ">            
            <img src={Logo} alt="imagen-logo" className="img-fluid w-75 mt-5 h-75 p-2"/>
          </div>
       
          <div className="d-flex flex-column align-items-center w-100 p-3">
            <h5>Michael Gómez</h5>
            <img src={Michael} alt="imagen-michael" className="img-fluid w-50 p-2 h-50 rounded-circle"/>
            <p>Estudiante de Desarrollo Web con énfasis en React, con gran capacidad para aprender rápidamente. Con gran pasión por los deportes</p>
            <div className="d-flex flex-row">
            <a className=" mb-1 p-3" href="/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-1 p-3" href="/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} style={{color:"#fff", fontSize:"30"}} /></a>              
            </div>    
          </div>
         
          <div className="d-flex flex-column align-items-center w-100 p-3">
          <h5>Iván Darío Mejía</h5>
            <img src={Ivan} alt="imagen-ivan" className="img-fluid w-50 p-2 h-50 rounded-circle" />
            <p>Estudiante de Desarrollo Web con énfasis en React, capacitado para trabajar en equipo o individualmente. Apasionado por los viajes,  los deportes y compartir en familia.</p>
            <div className="d-flex flex-row">
            <a className=" mb-3 p-3" href="https://github.com/Ivancho427" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-3 p-3" href="https://linkedin.com/in/iván-darío-mejía-muñoz-408b53162" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} style={{color:"#fff", fontSize:"30"}} /></a>              
            </div>    
          </div>
        </div>

        <div className="row">
          <hr />
          <p className=" container-fluid col-sm text-center mt-2 pt-3">            
            &copy;{2020} DE-SA (Deporte y Salud) Salud en línea | Derechos reservados | 
            Terminos y Condiciones | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerFooter;
