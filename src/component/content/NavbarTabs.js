import React from 'react';

import { Tabs, Tab, ListGroup, Row, Col, Stack, Image } from 'react-bootstrap';

import EmptyDataImg from '../../empty_data_img.png';
import './NavbarTabsStyles.scss';

const NavbarTabs = () => {
  return (
    <Tabs 
      defaultActiveKey="dashboard" 
      id="tabNavigation" 
      className="mb-3"
      style={{
        position: "absolute",
        top: "-42px",
        zIndex: "1070"
      }}>
      <Tab 
        eventKey="dashboard" 
        title="Dashboard"
        style={{ backgroundColor: "white" }}>
        <div className="pt-5">
          
        </div>
        <Row >
          <Col xs={ 2 }>
            <ListGroup>
                <ListGroup.Item>Cases</ListGroup.Item>
                <ListGroup.Item>Deaths</ListGroup.Item>
                <ListGroup.Item>Tests</ListGroup.Item>
                <ListGroup.Item>Vaccinations</ListGroup.Item>
                <ListGroup.Item>Police Shootings</ListGroup.Item>
                <ListGroup.Item>
                    <span className="d-block">Population estimates</span>
                    <span className="d-block">(1 year estimates)</span>
                </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={ 10 }>
            <Stack 
              className="d-flex justify-content-center align-items-center border rounded-1"
              style={{
                height: "540px",
              }}>
              <div
                style={{ 
                  width: "295px",
                  height: "295px",
                  backgroundColor: "#DFE6E9",
                  borderRadius: "50%",
                  position: "relative"
                }}>
                <Image
                  src={ EmptyDataImg }
                  alt="empty-data-pic"
                  style={{

                  }}
                />
              </div>
            </Stack>
          </Col>
        </Row>
       </Tab>
       <Tab 
         eventKey="+" 
         title="+"
         style={{ backgroundColor: "white", border: "none" }}>
        <div>&nbsp;</div>
       </Tab>
    </Tabs>
  );
}

export default NavbarTabs;