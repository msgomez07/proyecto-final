import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const nameUser = cookies.get("name");
const lastName = cookies.get("last_name");

export default function NavMenu() {


    const cerrarSesion = () => {
        
        cookies.remove("id", {path: "/"});
        cookies.remove("name", {path: "/"});
        cookies.remove("last_name", {path: "/"});
        cookies.remove("age", {path: "/"});
        cookies.remove("email", {path: "/"});
        window.location.href='./';
    }
    
    
    
    return (
      <div>
        <nav className="navbar">
           <span className="navbar-brand text-light">Bienvenido {nameUser + " " + lastName}</span>
          <form className="form-inline">
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              onClick={()=>cerrarSesion()}
            >
              Cerrar Sesion
            </button>
          </form>
        </nav>
      </div>
    );
}
