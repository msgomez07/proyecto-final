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
                    <p>Ofrecemos una guia completa para que puedas estar bien asesorado si así lo requieres, por eso te invitamos a adquirir 
                     nuestro paquete premium donde encontraras multiples beneficios </p>
                   </div>
                <div className="d-flex flex-column align-items-center w-100 p-3">
                <img src={historial} alt="" className="w-75 p-3 h-50 rounded-circle"/>
                    <h2>Rutinas e historial</h2>
                    <p>Las rutinas estan a tu medida, te invitamos a que diariamente cumplas con el plan de ejercicios propuestos para obtener los resultados esperados</p>
                </div>
                <div className="d-flex flex-column align-items-center w-100 p-3">
                <img src={dolor} alt="" className="w-75 p-3 h-50 rounded-circle"/>
                    <h2>Ejercicios de terapia</h2>
                    <p>Si tienes algun problema en tu condición de salud, dejanos asesorarte para que puedas realizar ejercicios guiados. Además con el plan Premium tendras una amplia guia de especialistas dispuestos a ofrecerte el mejor servicio</p>
                </div>
            </div>
            
        </div>
    )
}
