import React from 'react';
import { Row, Input, Button, Modal  } from 'react-materialize'


const ClientForm = (props) => (
    <Modal id='addNew' header='Add New Client'
    trigger={<Button >Add New Client</Button>}>
        <form>
            <Row>
            <Input  label="Name" val={props.name} onChange={props.nameChange} />
            <Input  label="Phone" val={props.phone} onChange={props.phoneChange} />
            <Input  label="Email" val={props.email} onChange={props.emailChange} />
            <Input  label="Address" val={props.address} onChange={props.addressChange} />
            <Input  label="Social" val={props.social} onChange={props.socialChange} />
            </Row>
            <Row><Button waves='light' onClick={props.handleAdd}>Add New Client</Button></Row>
            
        </form>

       </Modal>

 
);

export default ClientForm;