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
    
                ejercicios : 

<div className="card-deck w-75  mt-5">
                    <div className="card" id="card1">
                      <video
                        className="card-img-top p-2"
                        src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435316789.mp4"
                        controls
                      >
                        <code>video</code>
                      </video>
                      <div className="card-body ">
                        <h5 className="card-title text-center p-2">
                        Sentadilla con extensión de hombro y rotación de tronco
                        </h5>
                        <p className="card-text text-justify p-2">
                        Erguido, separe los pies la misma distancia que existe entre los hombros. Haga el gesto de sentarse bajando los glúteos hasta donde sepa que va a poder volver a levantarse. Una vez llegue a ese límite, levántese mientras estira los brazos hacia arriba y rote el tronco a un lado. Cambie de lado con cada repetición. Asegúrese de que las piernas no giren con usted. Tome aire al bajar y expúlselo al subir.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Primer ejercicio del día
                        </small>
                      </div>
                    </div>
                    <div className="card" id="card2">
                      <video
                        className="card-img-top p-2"
                        src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435317154.mp4"
                        controls
                      >
                        <code>video</code>
                      </video>
                      <div className="card-body">
                        <h5 className="card-title text-center p-2">Remo a dos manos</h5>
                        <p className="card-text text-justify p-2">
                        De pie, incline ligeramente el tronco recto hacia delante. Coja unas mancuernas y gire las muñecas para que las palmas miren hacia arriba. Inspire, y espire mientras simula que rema llevando los codos hacia atrás
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Segundo ejercicio del día
                        </small>
                      </div>
                    </div>
                    <div className="card" id="card3">
                      <video
                        className="card-img-top p-2"
                        src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435317596.mp4"
                        controls
                      >
                        <code>video</code>
                      </video>
                      <div className="card-body">
                        <h5 className="card-title text-center p-2">
                        Integrado de equilibrio y extensores
                        </h5>
                        <p className="card-text text-justify p-2">
                        Haga equilibrio sobre un pie y desde esa posición simule el vuelo de Superman, extendiendo la pierna hacia atrás y los dos brazos hacia delante. Vuelva a la posición inicial manteniendo la pierna en vilo (si puede). Haga una serie completa y cuando la acabe, cambie de pierna.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Tercer ejercicio del día
                        </small>
                      </div>
                    </div>
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
                ejercicios: (
                  <div className="card-deck w-75  mt-5">
                    <div className="card" id="card4">
                      <img
                        src="https://ep01.epimg.net/elpais/imagenes/2015/06/26/buenavida/1435315710_063870_1435316360_sumario_normal.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center p-2">
                          Ejercicio cardiovascularar
                        </h5>
                        <p className="card-text text-justify p-2">
                          Antes de comenzar y entre ejercicio y ejercicio súbase
                          durante 30 segundos a la cinta de correr, a una
                          bicicleta estática o a una elíptica. Si no tiene
                          ninguno de estos aparatos, simule que camina en el
                          sitio elevando las rodillas un poco más de lo
                          habitual.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Primer ejercicio del día
                        </small>
                      </div>
                    </div>
                    <div className="card" id="card5">
                      <video
                        className="card-img-top p-2"
                        src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435315927.mp4"
                        controls
                      >
                        <code>video</code>
                      </video>
                      <div claclassNamess="card-body">
                        <h5 className="card-title text-center p-2">Rotación de tronco a un lado</h5>
                        <p className="card-text text-justify p-2">
                          Túmbese en el suelo (si está incómodo hágalo sobre una
                          esterilla o toalla mullida) con los brazos abiertos en
                          cruz sobre el suelo. Levante las rodillas hasta
                          dibujar un ángulo recto. Gire la cintura dirigiendo
                          las rodillas hacia un lado –sin tocar el suelo–,
                          procurando llevar las piernas unidas y manteniendo
                          siempre los hombros apoyados.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                         Segundo ejercicio del día
                        </small>
                      </div>
                    </div>
                    <div className="card" id="card6">
                      <video
                        className="card-img-top"
                        src="https://ep02.epimg.net/elpais/videos/2015/06/26/buenavida/1435315710_063870_1435316535.mp4"
                        controls
                      >
                        <code>video</code>
                      </video>
                      <div className="card-body">
                        <h5 className="card-title text-center p-2">
                          Extensión de cadera y hombro a gatas
                        </h5>
                        <p className="card-text text-justify p-2">
                          Colóquese a gatas, apoyando las manos y rodillas en el
                          suelo a la altura de los hombros y las caderas
                          respectivamente. Estire una de las piernas y llévela
                          tan atrás como pueda, a la vez que extiende el brazo
                          contrario –también estirado–, por encima de la cabeza.
                          Repita cambiando de pierna y brazo sucesivamente hasta
                          completar la serie.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Tercer ejercicio del día
                        </small>
                      </div>
                    </div>
                  </div>
                ),
              });
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

          <button className="btn btn-outline-info mt-5" onClick={()=>tururu()}>Consulta la actividad para hoy</button>


        {martes.ejercicios}
    
    
    
    </div>

    );

    }




