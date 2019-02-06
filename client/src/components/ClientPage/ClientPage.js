import React from 'react';
// import ClientNote from '../Note/ClientNote';
// import ClientTodo from '../Todo/ClientTodo';
import SearchForm from '../ClientPage/SearchForm'
import DetailView from '../ClientPage/DetailView'
import '../../index.css';
import { Collection, CollectionItem, } from 'react-materialize'
import $ from 'axios'




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



class ClientPage extends React.Component {

    state = {

        clientList: [],
        searchVal: '',
        selectedClients: [],
        clientDetail: {},
        note: '',
        todo: '',

    };


    noteChange = event => {
        this.setState({ note: event.target.value });
    }

    todoChange = event => {
        this.setState({ todo: event.target.value });
    }

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

        $.delete(`/api/client/${id}`)

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
                    todo={this.state.todo}
                    note={this.state.note}
                    deleteClient={this.deleteClient}
                    todoChange={this.todoChange}
                    noteChange={this.noteChange}
                    
                    


                />
            </div>

        )
    }

}

export default ClientPage; 