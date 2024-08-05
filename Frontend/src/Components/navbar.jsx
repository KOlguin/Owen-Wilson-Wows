import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/Image/Logo.jpg'

function NavbarFunction() {
  return (
    <>
        <style type="text/css">
        {`
            .navbar { background-color: #F6F6F6}
            .nav-link { color: #444444; font-weight: bold; font-family: Helvetica;}

        `}
        </style>

        <Navbar sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="130px"
                        height="80px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#homeCategories">Categorias</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    
  );
}

export default NavbarFunction;