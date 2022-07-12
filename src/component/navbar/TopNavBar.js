import React from 'react';
import Logo from '../../Project_Refocus_Logo.png';
import Mask1 from '../../image_mask_1.png';

import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';

import './TopNavbar.scss';
const TopNavBar = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#CD36A3",
        }}>
        <Container fluid>
          <Navbar.Brand 
            className="p-3 bg-white project-refocus-logo">
              <Image 
                src={ Logo }
                alt="project-refocus-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Item>
                <span className="d-inline-block text-white">Jayrick Gacayan</span>
                <NavDropdown id="basic-nav-dropdown" 
                  align="end"
                  className="d-inline-block text-white">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
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