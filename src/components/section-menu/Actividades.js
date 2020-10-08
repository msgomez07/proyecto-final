/* eslint-disable default-case */
import React, {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'


export default function Actividades(props) {
    const [lunes, setLunes] = useState({
        ejercicios: ""
       
    })

    const [martes, setMartes] = useState({
        ejercicios: ""
       
    })

    const [miercoles, setMiercoles] = useState({
        ejercicios: ""
       
    })

    const [jueves, setJueves] = useState({
        ejercicios: ""
       
    })

    const [viernes, setViernes] = useState({
        ejercicios: ""
       
    })

        



    const imc = props.imcT

    const imc2 = parseInt(imc.toFixed())

    


    const tururu = () =>{
        
        if(imc2 >= 35){
            setLunes({
    
                ejercicios : <div>
                    <ul>
                        <li>trotar 10 min</li>
                        <li>estirar</li>
                        <li>comer helado para volver a ganar masa</li>
                    </ul>
                </div> 
              })
              setMartes({
    
                ejercicios : <div>
                    <ul>
                        <li>abdominales</li>
                        <li>sentadillas</li>
                        <li>bicicleta</li>
                    </ul>
                </div> 
              })
              setMiercoles({
    
                ejercicios : <div>
                    <ul>
                        <li>flexiones</li>
                        <li>mancuerna</li>
                        <li>sentadillas</li>
                    </ul>
                </div> 
              })
              setJueves({
    
                ejercicios : <div>
                    <ul>
                        <li>elevaciones de hombro</li>
                        <li>zancadas</li>
                        <li>fondos</li>
                    </ul>
                </div> 
              })
              setViernes({
    
                ejercicios : <div>
                    <ul>
                        <li>trotar 10 min</li>
                        <li>bicicleta intenso</li>
                        <li>abdominales solo 30</li>
                    </ul>
                </div> 
              })
              
    
        }
        
        if(imc2 <=34){
            setLunes({
    
                ejercicios : <div>
                    <ul>
                        <li>
                        
                        </li>
                        <li>estirar</li>
                        <li>peso muerto 10 repeticiones</li>
                    </ul>
                </div> 
              })
              setMartes({
    
                ejercicios : 
                    <ol className="w-75  mt-5">
                        <li className="d-flex flex-column justify-content-center align-items-center">
                            
                            <h2>Ejercicio cardiovascular</h2>
                            <p>Antes de comenzar y entre ejercicio y ejercicio súbase durante 30 segundos a la cinta de correr, a una bicicleta estática o a una elíptica. Si no tiene ninguno de estos aparatos, simule que camina en el sitio elevando las rodillas un poco más de lo habitual.</p>
                            <img src="https://ep01.epimg.net/elpais/imagenes/2015/06/26/buenavida/1435315710_063870_1435316360_sumario_normal.jpg" alt="img_cardio"/>

                        </li>
                        <li className="d-flex flex-column justify-content-center align-items-center">
                            <h2>Rotación de tronco (desde supino) a un lado</h2>
                            <p>Túmbese en el suelo (si está incómodo hágalo sobre una esterilla o toalla mullida) con los brazos abiertos en cruz sobre el suelo. Levante las rodillas hasta dibujar un ángulo recto. Gire la cintura dirigiendo las rodillas hacia un lado –sin tocar el suelo–, procurando llevar las piernas unidas y manteniendo siempre los hombros apoyados.</p>
                            <video src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435315927.mp4" controls><code>video</code>.
                            </video>
                        </li>
                        <li className="d-flex flex-column justify-content-center align-items-center">
                            <h2>Extensión de cadera y hombro a gatas</h2>
                            <p>Colóquese a gatas, apoyando las manos y rodillas en el suelo a la altura de los hombros y las caderas respectivamente. Estire una de las piernas y llévela tan atrás como pueda, a la vez que extiende el brazo contrario –también estirado–, por encima de la cabeza. Repita cambiando de pierna y brazo sucesivamente hasta completar la serie.</p>
                            <video src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435316535.mp4" controls><code>video</code>.
                            </video>
                        </li>
                    </ol>
                
              })
              setMiercoles({
    
                ejercicios : <div>
                    <ul>
                        <li>fondos 15 repeticiones</li>
                        <li>salto en cuerda 5 minutos</li>
                        <li>crossfit</li>
                    </ul>
                </div> 
              })
              setJueves({
    
                ejercicios : <div>
                    <ul>
                        <li>lagartijas</li>
                        <li>abdominales</li>
                        <li> <img src="hsoa" alt=""/> </li>
                        <li>zancadas</li>
                    </ul>
                </div> 
              })
              setViernes({
    
                ejercicios : <div>
                    <ul>
                        <li>remo</li>
                        <li>pull over</li>
                        <li>pecho plano</li>
                    </ul>
                </div> 
              })
        }

        
           
        console.log("estoy funcionando")
        console.log(lunes.pierna)
        console.log(imc2)

       
    }

    // useEffect(()=>{


    // },[])



 
  

    return (
      <div className="d-flex flex-column justify-content-center align-items-center">

          <button className="btn btn-outline-info mt-5" onClick={()=>tururu()}>consulta la actividad de hoy</button>


        {martes.ejercicios}
    
    
    
    </div>

    );

    }