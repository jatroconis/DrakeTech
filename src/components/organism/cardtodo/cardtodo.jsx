import React from 'react'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'



const Cardtodo = ({title, description, stateTask, id, onSend}) => {

    async function deleteData(id) {
        try {
            const res = await axios.delete (`https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos/${id}`);
            onSend();//lista data
        } catch (err) {
            console.error(err);
        }
    }

    async function updatebyid(id){
        try {
            const res = await axios.put (`https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos/${id}`,getData());
            onSend();//lista data
        } catch (err) {
            console.error(err);
        }
    }


    

    function getData() {
        const data = {
            title : title,
            description : description,
            stateTask : 1
        }
        return data;
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {stateTask === 0 ? "En Proceso" : "Completado"}
                </Card.Text>
                <Button variant="primary" onClick={() => updatebyid(id)}  >Completar</Button>
                <Button variant="danger" onClick={() => deleteData(id)} >Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default Cardtodo;
