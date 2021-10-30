import React from 'react';
import './Header.css';
import { Navbar ,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="/home">bdBooks Express</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Order Review</Nav.Link>
                    <Nav.Link as={Link} to="/books">Our Books</Nav.Link> 
                    <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link> 
                </Nav>
                <Navbar.Text>
                    {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                    {
                    user.email ?
                        <button className="btn btn-regular" style={{ color: 'white' }} onClick={logOut}>log out</button>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Navbar.Text>
                </Navbar.Collapse> 
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;