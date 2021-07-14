import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'

function Contact() {
  return (
    <div className="container mb-5">
      <h1 className="mb-4 mt-4 pt-4 text-center">Contacto</h1>
      <h3 className="mb-4 mt-4 pt-4 text-center">Ingresa tus datos para enviarte tu Equipo Pokemon</h3>
      <div className="mt-4 p-5 bg-dark text-white">
        <Form>
          <Form.Row>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Av Cabildo.." />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Link to="/Enviado" className="btn btn-primary">Enviar</Link>
          
        </Form>
      </div>
    </div>
  );
}

export default Contact;
