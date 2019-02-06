import React from 'react';
import { Col, Row, Input, Button } from 'react-materialize'


const ClientNote = (props) => (
    <form>

        <Row>
            <Col s={12}>
                <Input
                    type="textarea"
                    value={props.note}
                    onChange={props.noteChange}
                    label="Enter Client Note"
                />
            </Col>
        </Row>
        <Row><Button waves='light'>Add New Note</Button></Row>

    </form>

);

export default ClientNote;



// onClick={props.handleAdd}