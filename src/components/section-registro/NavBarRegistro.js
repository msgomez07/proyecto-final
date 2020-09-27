import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBarRegistro() {
    return (
      <div>
        <Navbar className="navbar" bg="light" expand="lg" style={{position:"fixed"}}>
          <Navbar.Brand href="#home">DE-SA | Deporte y Salud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Contactenos</Nav.Link>             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}


