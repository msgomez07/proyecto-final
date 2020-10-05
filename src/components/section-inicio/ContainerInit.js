import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const baseUrl ="https://api-users-54hhbmzp6.vercel.app/users"
const cookies = new Cookies();

export default function ContainerInit() {

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })
  
useEffect(() =>{
if(cookies.get("email")){
  window.location.href='./menu'
}

})

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

   const enviarDatos = async (event) => {
    event.preventDefault()
     await axios.get(baseUrl, {params: {email: datos.email, password: datos.password}})
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >0){
        var drespuesta = response[0];
        cookies.set("id", drespuesta.id, {path: "/"});
        cookies.set("name", drespuesta.name, {path: "/"});
        cookies.set("last_name", drespuesta.last_name, {path: "/"});
        cookies.set("age", drespuesta.id, {path: "/"});
        cookies.set("email", drespuesta.id, {path: "/"});
        alert(`Bienvenido ${drespuesta.name} ${drespuesta.last_name}`);
        window.location.href="./menu";
      }else{
        alert("usuario o contraseña incorrecto");
      }
    })
    .catch(error=>{

      console.log(error)
      alert("usuario o contraseña incorrectos")
    })
  }

  
    return (

        <div className="modal-dialog text-center mt-0">
        <div className="col-sm-8 main-section pt-5">
          <div className="modal-content mt" id="modal">
            <form className="col-12" >
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
              <button className="" onClick={enviarDatos} >Ingresar</button>
            </form>
            <div className="col-12 forgot mt-3 mb-2">
                <a href="/">Recordar contraseña</a>                
            </div>
          </div>
        </div>
      </div>


    )
}

// onClick={()=> enviarDatos()}