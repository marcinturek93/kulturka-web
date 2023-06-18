import React from 'react'
import './HeaderContainer.css';
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "../header/Header";

export const HeaderContainer = () => {
    return (
        <Container fluid className='Header-container'>
            <Row>
                <Col xs={1}/>
                <Col xs={10}>
                    <Header/>
                </Col>
                <Col xs={1}/>
            </Row>

        </Container>
    )
}
