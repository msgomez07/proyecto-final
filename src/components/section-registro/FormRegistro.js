import React from "react";
import { Button, Form, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";
import imgregis from "../../images/imgregis.jpg";
import axios from 'axios'

const baseUrl ="https://api-users-54hhbmzp6.vercel.app/users"

export default function FormRegistro() {
  const [validated, setValidated] = useState(false);

  const [datos, setDatos] = useState({
    name:'',
    last_name:'',
    age:'',
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
    await axios.post(baseUrl, {name: datos.name, last_name: datos.last_name, age: datos.age, email: datos.email, password: datos.password})
  .then(response => {
    console.log(response.data);
  })
  .catch(error=>{
    console.log(error)
  })
}

  

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
                placeholder="Nombre *"
                defaultValue=""
                name="name"
                onChange={handleInputChange}
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
                placeholder="Apellidos *"
                defaultValue=""
                name="last_name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese los apellidos.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom03">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Edad *" name="age" required onChange={handleInputChange}/>
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
                  name="email"
                  onChange={handleInputChange}
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
                name="password"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña valida.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Acepta los términos y condiciones"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit" onClick={()=> enviarDatos()}>Registrarse</Button>
        </Form>
      </div>
      <div className="w-100 pt-5">
        <img
          src={imgregis}
          alt="imageregis"
          className="w-75 mt-5 shadow p-3 mb-5 bg-white rounded"
        />
      </div>
    </div>
  );
}
