import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";


function Header() {
        return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Team Orange</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to='/'>Strona Główna</Link></Nav.Link>
                        <Nav.Link><Link to='Team'>O nas</Link></Nav.Link>
                        <Nav.Link><Link to='AboutApp'>O aplikacji</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to='Contact'>Kontakt</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
}

export default withRouter(Header);
