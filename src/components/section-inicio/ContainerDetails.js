import React from 'react'
import asesoria from '../../images/asesoria.jpg'
import historial from '../../images/historial.png'
import dolor from '../../images/dolor.jpg'



export default function ContainerDetails() {
    return (
        <div>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column align-items-center w-100 p-3">
                    <img src={asesoria} alt="" className="w-75 p-3 h-50 rounded-circle"/>
                    <h2>Asesoria personalizada</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto itaque numquam unde natus voluptate commodi, repudiandae a, optio eos nemo adipisci totam consectetur! Corporis?</p>
                </div>
                <div className="d-flex flex-column align-items-center w-100 p-3">
                <img src={historial} alt="" className="w-75 p-3 h-50 rounded-circle"/>
                    <h2>Rutinas e historial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto itaque numquam unde natus voluptate commodi, repudiandae a, optio eos nemo adipisci totam consectetur! Corporis?</p>
                </div>
                <div className="d-flex flex-column align-items-center w-100 p-3">
                <img src={dolor} alt="" className="w-75 p-3 h-50 rounded-circle"/>
                    <h2>Ejercicios de terapia</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto itaque numquam unde natus voluptate commodi, repudiandae a, optio eos nemo adipisci totam consectetur! Corporis?</p>
                </div>
            </div>
            
        </div>
    )
}
