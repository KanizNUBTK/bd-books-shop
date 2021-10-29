import React from 'react';
import './Header.css';
import { Navbar ,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                <Navbar.Brand href="/home">bdBooks Express</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Order Review</Nav.Link>
                    <Nav.Link as={Link} to="/books">Our Books</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse> 
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;