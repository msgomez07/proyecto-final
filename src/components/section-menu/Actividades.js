/* eslint-disable default-case */
import React, {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'


export default function Actividades(props) {
    const [lunes, setLunes] = useState({
        pierna: "",
        brazo: ""
    })

        



    const imc = props.imcT

    const imc2 = parseInt(imc.toFixed())


    // const tururu = () =>{
    //     console.log("estoy funcionando")
    //     console.log(imc2)

       
    // }

    useEffect(()=>{

        function cambiosRender() {
            if(imc2 >= 35){
                setLunes({
        
                    pierna : "trotar en banda por 10 min",
                    brazo :  "levantamientos de mancuerna 10 repeticiones"
                  })
    
            }
            
            if(imc2 <=34){
                setLunes({
        
                    pierna : "trotar en banda por 20 min",
                    brazo :  "levantamientos de mancuerna 20 repeticiones"
                  })
            }
    
        }

  
    },[])


    // const [show, setShow] = useState(false);
      
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
    
  

    return (
      <div className="d-flex justify-content-around">
  <a className="navbar-brand" href="/">ACTIVIDADES POR DIA</a>


        <ul className="nav justify-content-center">
          <li className="nav-item">
          <button onClick={} className="nav-link" href="/">
              
            </button>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="/">
              MARTES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              MIERCOLES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              JUEVES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              VIERNES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              SABADO
            </a>
          </li>
        </ul>
      </div>



    );

    }