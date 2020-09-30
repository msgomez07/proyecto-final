import React, {useState} from 'react'
import axios from 'axios'

const baseUrl ="https://api-users-54hhbmzp6.vercel.app/users"

export default function ContainerInit() {

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })
  


  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

   const enviarDatos = async () => {
      await axios.get(baseUrl, {params: {email: datos.email, password: datos.password}})
    .then(response => {
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  
    return (

        <div className="modal-dialog text-center mt-0">
        <div className="col-sm-8 main-section pt-5">
          <div className="modal-content mt" id="modal">
            <form className="col-12">
              <h3 className="iniciar-sesion mt-3">Iniciar Sesión</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-3" id="form-control1"
                  name="email"
                  placeholder="Ingrese correo"
                  onChange={handleInputChange}
                  
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-2" id="form-control2"
                  name="password"
                  placeholder="Ingrese contraseña" 
                  onChange={handleInputChange}
                />
              </div>
              <p className="" onClick={()=> enviarDatos()}>Ingresar</p>
            </form>
            <div className="col-12 forgot mt-3 mb-2">
                <a href="/">Recordar contraseña</a>                
            </div>
          </div>
        </div>
      </div>


    )
}
