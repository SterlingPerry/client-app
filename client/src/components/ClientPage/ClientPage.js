import React from 'react';
// import ClientForm from './ClientForm';
import '../../index.css';
import { Row, Col, Input, Button, Collection, CollectionItem, Tab, Tabs, Icon } from 'react-materialize'
import $ from 'axios'


const SearchForm = (props) => (
    <form className="form">
        <Row>
           <Col s={9}><Input className="input" value={props.searchVal} onChange={props.searchChange} placeholder="Search Clients Here" /></Col> 
            <Col s={3}><Button className="searchButton" onClick={props.selectClients}>SEARCH</Button></Col>
        </Row>
    </form>
);

const DirectoryView = (props) => (
    <div className="directory-view">
        <SearchForm searchVal={props.searchVal} searchChange={props.searchChange} selectClients={props.selectClients} />
        <Collection>
            {props.clients.map(client => <ClientCollection name={client.name} id={client._id} clickHandler={props.clickHandler} key={client._id} />)}
        </Collection>
    </div>
);

const ClientCollection = (props) => (
    <CollectionItem onClick={() => props.clickHandler(props.id)}>{props.name}</CollectionItem>
);

const DetailView = (props) => (
    <div className="detail-view">
        <Tabs className='tab-demo z-depth-1'>
            <Tab title="Profile" active>
                <p>Name: {props.details.name}</p>
                <p>Phone: {props.details.phone}</p>
                <p>Email: {props.details.email}</p>
                <p>address: {props.details.address}</p>
                <p>Social Handle: {props.details.social}</p>
                <div>
                    <Button waves="orange">Edit<Icon left>edit</Icon></Button>
                    <Button onClick={() => props.deleteClient(props.details._id)} waves="red">Delete<Icon right>delete</Icon></Button>
                </div>
            </Tab>
            <Tab title="To Do List" >Todo List Component Goes Here</Tab>
            <Tab title="Notes">Notes Component Goes Here</Tab>

        </Tabs>

    </div>
);

class ClientPage extends React.Component {

    state = {

        clientList: [],
        searchVal: '',
        selectedClients: [],
        clientDetail: {}
    };


    searchChange = event => {
        this.setState({ searchVal: event.target.value });
    }
    
    selectClients = (e) => {
        e.preventDefault();
        const clientFilter = this.state.clientList.filter(client => client.name.includes(this.state.searchVal));
        this.setState({ selectedClients: clientFilter });
    }

    selectClientName = (id) => {
        console.log(id);
        this.setState({ clientDetail: this.state.clientList.find(client => client._id === id) })
    }

    getClients = () => {
        $.get('/api/client')
            .then((result) => {
                console.log(result.data);
                this.setState({ clientList: result.data })
                console.log('get clients done')
            })
    }

    deleteClient = (id) => {
        console.log(id);
        // console.log($);
        $.delete( `/api/client/${id}`)
         
        .then(() => {
            console.log('client deleted');
            this.getClients();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getClients();
    }


    render() {
        return (
            <div>
                <DirectoryView
                    clients={this.state.clientList}
                    searchVal={this.state.searchVal}
                    searchChange={this.searchChange}
                    selectClients={this.selectClients}
                    clickHandler={this.selectClientName} />

                <DetailView
                    details={this.state.clientDetail}
                    deleteClient={this.deleteClient}

                />
            </div>

        )
    }

}

export default ClientPage; 