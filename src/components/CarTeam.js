import React from "react";
import {Modal, Button} from "react-bootstrap";

function CarTeam() {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
       Equipo Pokemon
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu Equipo Elegido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pokemones Elegidos!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirmar Equipo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CarTeam;
