import React, {useState}  from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";


const Modaltodo = ({show,handleClose,  onSend, tittleinto , descriptioninto, stateTask, id}) => {

    const [title, settitle] = useState(tittleinto)
    const [description, setdescription] = useState(descriptioninto)


  async function updateTask (id)  {
    try {
      const res = await axios.put("https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos",getData())
    } catch (err) {
      console.error(err)
    }
  }

  function getData() {
    const data = {
        title : title,
        description : description,
        stateTask : stateTask
    }
    return data;
}

  const onSubmit  = async (e) => {
    e.preventDefault()
    updateTask();
    handleClose();
    onSend();
  } 


  return (
    <>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label >Titulo</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => settitle(e.target.value)  }  placeholder="Ingrese titulo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="text"  value={description} onChange={(e) => setdescription(e.target.value)}  placeholder="Ingrese description" />
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
};

export default Modaltodo;
