import React from "react";
import Logo from '../../images/Logo.png'
import Michael from '../../images/Michael.png'
import Ivan from '../../images/Ivan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContainerFooter() {
  return (
    <div className="main-footer d-flex flex-row">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row w-100">
         
          <div className="d-flex flex-column align-items-center w-100 ">            
            <img src={Logo} alt="imagen-logo" className="w-75 mt-5 h-75"/>
          </div>
       
          <div className="d-flex flex-column align-items-center w-100">
            <h5>Michael Gómez</h5>
            <img src={Michael} alt="imagen-michael" className="w-50 h-50 mt-2"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto itaque numquam unde natus voluptate commodi, repudiandae a, optio eos nemo adipisci totam consectetur! Corporis?</p>
            <div className="d-flex flex-row">
            <a className=" mb-1 p-3" href="/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} style={{color:"#fff", fontSize:"30"}} /></a>
                <a className=" mb-1 p-3" href="/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} style={{color:"#fff", fontSize:"30"}} /></a>              
            </div>    
          </div>
         
          <div className="d-flex flex-column align-items-center w-100">
          <h5>Iván Darío Mejía</h5>
            <img src={Ivan} alt="imagen-ivan" className="w-50  h-50 mt-2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto itaque numquam unde natus voluptate commodi, repudiandae a, optio eos nemo adipisci totam consectetur! Corporis?</p>
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
          <p className="col-sm text-center mt-2 pt-3">            
            &copy;{2020} DE-SA (Deporte y Salud) Salud en línea | Derechos reservados | 
            Terminos y Condiciones | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerFooter;
