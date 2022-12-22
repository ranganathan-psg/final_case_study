import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
const navbar = {backgroundColor: '#080325'};
class NavBar extends Component {
    render() {
        return (
            <div >
                <Navbar collapseOnSelect expand="lg"  variant="dark"
                    style={navbar}>
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /> Top Jobs</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/contact">ContactUs</Nav.Link>
                                <Nav.Link as={Link} to="/jobs" >Jobs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default NavBar;
