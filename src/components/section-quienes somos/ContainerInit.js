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

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
    return (
        <div className="d-flex">
          <div className="d-flex flex-column align-items-initial w-100 p-3">
            <h1 className="pt-5 mt-0 text-center">Acerca de Nosotros</h1>
            <p className="mt-2 text-justify mr-5 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
             <p className="mt-2 text-justify mr-5 ml-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p> 
          </div>       
         
        <div className="d-flex flex-column align-items-center w-100 p-3 modal-dialog text-center mt-4 ">
        
        <div className="col-sm-8 pt-0">
          <div className="modal-content mt" id="modal">
            <form className="col-12" onSubmit={handleSubmit}>
              <h3 className="iniciar-sesion mt-5">Iniciar Sesión</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-3" id="form-control1"
                  name="email"
                  placeholder="Ingrese el usuario o correo"
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
              <button className="bg-primary" type="submit" onClick={()=> enviarDatos()}>Ingresar</button>
              {/* <p className="" onClick={()=> enviarDatos()}>Ingresar</p> */}
            </form>
            <div className="col-12 forgot mt-3 mb-2">
                <a href="/">Recordar contraseña</a>                
            </div>
          </div>
        </div>
      </div>
      </div>

    )
}
