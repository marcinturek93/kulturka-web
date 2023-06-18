import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {HeaderContainer} from "./header-container/HeaderContainer";
import {Col, Container, Row} from "react-bootstrap";
import {AppContent} from "./app-content/AppContent";

const App = () => (
    <div className="App">
        <Container fluid>
            <Row>
                <HeaderContainer/>
            </Row>
            <Row style={{'margin-top': '96px'}}>
                <Col xs={1}/>
                <Col xs={10}>
                    <AppContent/>
                </Col>
                <Col xs={1}/>
            </Row>
        </Container>

    </div>
);

export default App;
