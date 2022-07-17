import React from 'react';
import Logo from '../../Project_Refocus_Logo.png';
import Mask1 from '../../image_mask_1.png';
import Mask2 from '../../image_mask_2.png';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';

import './TopNavbar.scss';

const imageToMaskStyles = {
  width: "100%",
  height: "100%"
}

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
        <div className="row g-0 w-100 h-100">

          {/* Image to overlay */}
          <div className="col-9 h-100">
            <Image 
              src={ Mask1 }
              alt="mask-pic-one"
              style={ imageToMaskStyles }
            />
          </div>
          <div className="col-3 h-100">
            <Image 
              src={ Mask2 }
              alt="mask-pic-two"
              style={ imageToMaskStyles }
            />
          </div>
        </div>
        
        {/* overlay mask */}
        <div className="banner-mask-overlay"></div>
      </div>
    </>
  );
}

export default TopNavBar;