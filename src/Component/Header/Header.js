import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="header-title"><span className="fs-1">K</span>nowledge Of Accounting Center</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className='nav'>
                        <Nav className="m-2 nav-text">
                            <NavLink className="list" to="/home">Home</NavLink>
                            <NavLink className="list" to="/service">Service</NavLink>
                            <NavLink className="list" to="/teachers">Mentors</NavLink>
                            <NavLink className="list" to="/about">About us</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;