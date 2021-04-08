import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { stickerContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(stickerContext)
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>Trendy Stickers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Link to="/">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/deal">Deal</Link>
                    <Link to="/login">Login</Link>
                    <span>{loggedInUser && loggedInUser.name}</span>
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;