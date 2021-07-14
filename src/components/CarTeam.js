import React from "react";
import {Modal, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import Cart from "./Cart"

function CarTeam() {

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
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         <Link to="/contact" onClick={handleClose} className="btn btn-primary">Confirmar Equipo</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CarTeam;
