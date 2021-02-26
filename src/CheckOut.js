import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CheckOut() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        My Bag&nbsp;
        <i className="fas fa-shopping-bag"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close&nbsp;
            <i className="fal fa-window-close"></i>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Order&nbsp;
            <i className="fas fa-shopping-bag"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
