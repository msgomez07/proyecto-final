import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
      <div>
        <Navbar className="navbar" bg="light" expand="lg" id="navinicio"style={{position:"fixed"}}>
          <Navbar.Brand href="#home">DE-SA | Deporte y Salud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/quienes-somos">Quienes somos</Nav.Link>
              <Nav.Link href="/contacto">Contactenos</Nav.Link>
              <Nav.Link href="/registro">Registrese</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}


