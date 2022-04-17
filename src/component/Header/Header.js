import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>

    }
    const signout = () => {
        signOut(auth);
    }

    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} className='fw-bold fs-2' style={{ color: "#1CB0E6" }} to="/">JACK FITNESS STUDIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='fw-bold nav' active to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} className='fw-bold nav' active to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link as={Link} className='fw-bold nav' active to="/aboutme">ABOUT ME</Nav.Link>
                        {
                            user ? <button onClick={signout} className='btn rounded-pill singout-btn'>SIGN OUT </button> : <Nav.Link as={Link} className='fw-bold logIn-btn btn rounded-pill' active to="/login">LOG IN</Nav.Link>

                        }                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;