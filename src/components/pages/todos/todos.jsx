import React, { useState, useEffect } from 'react'
import MainNavbar from '../../organism/navbar/navbar'
import Cardtodo from '../../organism/cardtodo/cardtodo'
import Modaltodo from '../../organism/modaltodo/modaltodo'
import {Button,Container, Row, Col} from 'react-bootstrap'
import axios from "axios";



const Todos = () => {
    
    useEffect(() => {
        listarData()
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = (i) => {
        setShow(true);
        console.log("entre")
    }

    const [todos, setTodos] = useState([])

    async function listarData() {
        try {
            const res = await axios.get("https://crudcrud.com/api/998450f9ad524f709062079d0b88068e/todos");
            setTodos(res.data)
        } catch (err) {
            console.error(err);
        }
    }

    
    return (
        <Container fluid className="p-todos__container">
            <MainNavbar />
            <Button className="m-3" onClick={() => handleShow(1)}  >
                Crear Nueva
            </Button>
            <Modaltodo 
                typemodal={1} 
                show={show} 
                handleClose={handleClose} 
                onSend={listarData}
            />
            <Container>
            <Row>
                {
                    todos.map( (data) => ( 
                        <Col key={data._id}  sm={4}>
                            <Cardtodo 
                                title={data.title}
                                description={data.description} 
                                stateTask={data.status} 
                                id={data._id} 
                                onSend={listarData} 
                                 />
                        </Col>
                    )) 
                }
                        
            </Row>
            </Container>
                

        </Container>    
    )
}

export default Todos
