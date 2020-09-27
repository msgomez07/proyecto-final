import React from 'react'
import {  Button, Form, Col, InputGroup } from 'react-bootstrap'
import {useState} from 'react';
import imgregis from '../../images/imgregis.jpg'


export default function FormRegistro() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
      <div className="d-flex">
          <div className="w-100 p-3">
        <h3 className="registro pt-5 text-center">Registro</h3>
        <Form
          className="formulario mt-5"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombres: </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name *"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Ingrese el nombre.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellidos: </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name *"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Ingrese los apellidos.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom03">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Edad *" required />
              <Form.Control.Feedback type="invalid">
                Ingrese la edad.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Usuario</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Correo electrónico *"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese el correo electónico.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña *"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña valida.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Registrarse</Button>
        </Form>
        </div>

        <div className="w-100 pt-5">
            <img src={imgregis} alt="imageregis" className="w-75 mt-5 shadow p-3 mb-5 bg-white rounded"/>
        </div>
      </div>
    );
}
