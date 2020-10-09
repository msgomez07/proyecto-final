import React from "react";
import Logo from '../../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,  faInstagram,  faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function FooterContainer() {
  return (
    <div className="container-fluid main-footer d-flex flex-row">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row w-100">
         
          <div className="d-flex flex-column align-items-center w-100 p-3 ">            
            <img src={Logo} alt="imagen-logo" className="img-fluid w-75 mt-5 h-75 p-2"/>
          </div>
       
          <div className="d-flex flex-column align-items-center w-100 p-3">
            <h5>Contactanos</h5>
            
            <div className="d-flex flex-row mt-5">
            
                
                <a className=" mb-1 p-3 mt-3" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" > 
                <FontAwesomeIcon icon={faFacebook} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-1 p-3 mt-3" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" > 
                <FontAwesomeIcon icon={faInstagram} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-1 p-3 mt-3" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" > 
                <FontAwesomeIcon icon={faTwitter} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-1 p-3 mt-3" href="/" target="_blank" rel="noopener noreferrer" > 
                <FontAwesomeIcon icon={faWhatsapp} style={{color:"#fff", fontSize:"30"}} /></a>

            </div>    
          </div>
         
          <div className="d-flex flex-column align-items-center w-100 p-3">
          <h5>Adquiere nuestro plan Premium  aqui</h5>            
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

export default FooterContainer;
