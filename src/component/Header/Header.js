import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} className='fw-bold fs-2' style={{ color: "#1CB0E6" }} to="/">JACK FITNESS STUDIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='fw-bold nav' active to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} className='fw-bold nav' active to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link as={Link} className='fw-bold nav' active to="/aboutme">ABOUT ME</Nav.Link>
                        <Nav.Link as={Link} className='fw-bold nav' active to="/login">LOG IN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;