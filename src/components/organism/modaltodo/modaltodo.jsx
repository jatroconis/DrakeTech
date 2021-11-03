import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const Modaltodo = ({ show, handleClose, onSend, typemodal, id }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    registerTask();
    handleClose();
    onSend();//lista data
  };


  async function registerTask() {
    try {
      const res = await axios.post(
        "https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos",
        getData()
      );
    } catch (err) {
      console.error(err);
    }
  }



  function getData() {
    const data = {
      title: title,
      description: description,
      status: 0,
    };
    return data;
  }

  async function updateTask(id) {
    try {
      const res = await axios.put(
        "https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos",
        getData()
      );
    } catch (err) {
      console.error(err);
    }
  }

  const onUpdate = () => {

    updateTask(id);
    handleClose();
    onSend();//lista data
  };

  if (typemodal === 1) {
    return (
      <>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Registrar Tarea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="Ingrese titulo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Ingrese description"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else if (typemodal === 2) {
    return (
      <>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Actualizar Tarea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="Ingrese titulo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Ingrese description"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default Modaltodo;
