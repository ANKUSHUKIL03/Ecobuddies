import React from 'react';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';
import Logo from './Logo.png';

const AppNavbar = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#"><img src={Logo} style={{width:"70px",height:"70px"}} alt="" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home" active><b>HOME</b></Nav.Link>
            <Nav.Link href="/about"><b>ABOUT US</b></Nav.Link>
            <Nav.Link href="/contact"><b>CONTACT</b></Nav.Link>
          </Nav>
          <form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
