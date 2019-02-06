import React from 'react';
import { Col, Row, Input, Button } from 'react-materialize'



const SearchForm = (props) => (
    <form className="searchform">
        <Row>
            <Col s={9}><Input className="input" value={props.searchVal} onChange={props.searchChange} placeholder="Search Clients Here" /></Col>
            <Col s={3}><Button className="searchButton" onClick={props.selectClients}>SEARCH</Button></Col>
        </Row>
    </form>
);

export default SearchForm;