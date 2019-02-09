import React from 'react';
import {  Button, Tab, Tabs, Icon } from 'react-materialize'
import ClientNote from '../Note/ClientNote';
import ClientTodo from '../Todo/ClientTodo';

const DetailView = (props) => (
    <div className="detail-view">

        <Tabs className='z-depth-1'>

            <Tab title="Profile" active>
                <p>Name: {props.details.name}</p>
                <p>Phone: {props.details.phone}</p>
                <p>Email: {props.details.email}</p>
                <p>address: {props.details.address}</p>
                <p>Social Handle: {props.details.social}</p>
                <div>
                    <Button waves="orange">Edit</Button>
                    <Button onClick={() => props.deleteClient(props.details._id)} waves="red"></Button>
                </div>
            </Tab>

            <Tab title="Notes" >    
                <ClientNote note={props.note} noteChange={props.noteChange} />
            </Tab>

            <Tab title="To Do List">
                <ClientTodo todo={props.todo} todoChange={props.todoChange} />
            </Tab>

        </Tabs>

    </div>
);


export default DetailView;