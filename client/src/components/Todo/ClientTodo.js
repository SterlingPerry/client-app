import React from 'react';
import { Row, Input, Button } from 'react-materialize'


const ClientTodo = (props) => (
    <form>
        <Row>
            <Input
                label="Enter New Todo"
                value={props.todo}
                onChange={props.todoChange} 
                />
        </Row>
        <Row><Button waves='light' onClick={props.handleAdd}>Add New Todo</Button></Row>

    </form>

);

export default ClientTodo;