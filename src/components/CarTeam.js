import React from "react";
import {Modal, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import useCartContext from '../context/CartContext'
import Cart from "./Cart"

function CarTeam() {
    const {DeleteTeam} = useCartContext();
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
          Tu Equipo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu Equipo Elegido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={DeleteTeam} variant="danger">Borrar Equipo</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         <Link to="/contact" onClick={handleClose} className="btn btn-primary">Confirmar Equipo</Link>
        </Modal.Footer>
        <p className="container">*Si deseas Borrar tu equipo luego de <span className="font-weight-bold" >Borrar Equipo</span> deberas  <span className="font-weight-bold" >Cerrar</span> para que se efectuen los cambios</p>
      </Modal>
    </div>
  );
}

export default CarTeam;
