import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
      <div>
      <div>
        <Navbar className="navbar" bg="light" expand="lg" style={{position:"fixed"}}>
          <Navbar.Brand href="#home">DE-SA | Deporte y Salud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              {/* <Nav.Link href="/contacto">Contactenos</Nav.Link> */}
              <Nav.Link href="/registro">Registrese</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
       <div className="pt-5">         
         <h1 className="text-center pt-5">Acerca de Nosotros</h1>
      </div>
      </div>
    );
}


