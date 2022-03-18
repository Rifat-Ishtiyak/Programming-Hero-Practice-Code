import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className="">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#" className="mx-4">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="mx-4">
                  Contact
                </Nav.Link>
                <Nav.Link href="#" className="mx-4">
                  Cart <sup>2</sup>{" "}
                </Nav.Link>
                <Nav.Link href="#" className="mx-4">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
