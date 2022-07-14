import React from 'react';
import Logo from '../../Project_Refocus_Logo.png';
import Mask1 from '../../image_mask_1.png';

import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';

import './TopNavbar.scss';
const TopNavBar = () => {
  return (
    <>
      <Navbar
        id="topNavbar">
        <Container fluid>
          <div className="logo-container">
            <Image 
                src={ Logo }
                alt="project-refocus-logo"
                className="project-refocus-logo" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Item>
                <span 
                  id="account-log-name"
                  className="d-inline-block text-white">Jayrick Gacayan</span>
                
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner-mask-container">
        <Image 
          src={ Mask1 }
          alt="mask-pic-one"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    </>
  );
}

export default TopNavBar;