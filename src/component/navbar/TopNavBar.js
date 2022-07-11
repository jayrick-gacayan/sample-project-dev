import React from 'react';
import Logo from '../../Project_Refocus_Logo.png';
import Mask1 from '../../image_mask_1.png';

import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';

const TopNavBar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg"
          style={{
            backgroundColor: "#CD36A3",
          }}>
        <Container fluid>
          <Navbar.Brand 
            className="p-3"
            href="#home"
            style={{
              backgroundColor: "white",
              width: "179px",
              height: "74px",
              borderRadius: "4px",
              position: "absolute",
              left: "1.25%",
              right: "86.32%",
              top: "15%",
              bottom: "0%"
            }}>
              <Image 
                src={ Logo }
                alt="project-refocus-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <NavDropdown title="Jayrick Gacayan" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner-mask">
        <Image 
          src={ Mask1 }
          alt="mask-pic-one"
          style={{
            width: "100%",
            height: "150px"
          }}
        />
      </div>
    </>
  );
}

export default TopNavBar;