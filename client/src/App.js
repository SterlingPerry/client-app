import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import HomePage from './components/HomePage/HomePage'
import ClientPage from './components/ClientPage/ClientPage'
import ClientForm from './components/ClientPage/ClientForm'
import $ from 'axios'


class App extends React.Component {

  state = {
    name: '',
    phone: '',
    email: '',
    address: '',
    social: '',
    clientList: [],
    showModal: false,
  }

  searchChange = event => {
    this.setState({ searchVal: event.target.value });
  }
  nameChange = event => {
    this.setState({ name: event.target.value });
  }
  phoneChange = event => {
    this.setState({ phone: event.target.value });
  }
  emailChange = event => {
    this.setState({ email: event.target.value });
  }
  addressChange = event => {
    this.setState({ address: event.target.value });
  }
  socialChange = event => {
    this.setState({ social: event.target.value });
  }

  handleAdd = (event) => {
    event.preventDefault();

    $.post('/api/client', { name: this.state.name, phone: this.state.phone, email: this.state.email, address: this.state.address, social: this.state.social })
      .then((result) => {
        this.getClients();
        this.handleReset();
        console.log(result.data);
      })
  }

  handleReset = () => {
    this.setState({
      name: '',
      phone: '',
      email: '',
      address: '',
      social: '',

    });
  }

  getClients = () => {
    $.get('/api/client')
      .then((result) => {
        console.log(result.data);
        this.setState({ clientList: result.data })
        console.log('get clients done')
      })
  }

    // componentDidMount() {
    //   this.getClients();
    // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar brand='Client Manager' right>
              <NavItem><Link to={`/`}>Home</Link></NavItem>
              <NavItem><Link to={`/clients`}>Clients</Link></NavItem>
              <NavItem><ClientForm
                name={this.state.name}
                phone={this.state.phone}
                email={this.state.email}
                address={this.state.address}
                social={this.state.social}
                nameChange={this.nameChange}
                phoneChange={this.phoneChange}
                emailChange={this.emailChange}
                addressChange={this.addressChange}
                socialChange={this.socialChange}
                handleAdd={this.handleAdd} /></NavItem>
            </Navbar>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/clients' component={ () => <ClientPage

              clientList={this.state.clientList} />} />

          </div>

        </BrowserRouter>
      </div>
    )
  }
}
export default App;
