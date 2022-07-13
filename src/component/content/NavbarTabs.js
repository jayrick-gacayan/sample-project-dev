import React, { useState } from 'react';

import { Tabs, Tab, Row, Col, Stack, Image, Form } from 'react-bootstrap';

import './NavbarTabsStyles.scss';

import Sidebar from '../sidebar/Sidebar';
import EmptyDataImg from '../../empty_data_img.png';

const NavbarTabs = () => {

  const [ messageText, setMessageText ] = useState("");
  const [ categories, setCategories ] = useState([]);
  
  const handleMessageText = (type, showText) => {
    let textMsg = '';
    switch(type){
      case 'Cases': 
      case 'Deaths':
      case 'Tests':
      case 'Vaccinations':
      case 'Police Shootings':
      case 'Population estimates':
    }
  }

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
        className="g-lg-0">
        <div className="container-fluid d-flex justify-content-between p-3">
          <div>
            { messageText }
          </div>
          <div>
            <Form.Label style={{
              display: "block"
            }}>Period: </Form.Label>
            <Form.Control
              as="select"
              style={{
                color: "#636E72",
                width: "220px",
                display: "block"
              }}>
              <option value="last30days" >Last 30 days</option>
              <option value="1">Last 90 days</option>
              <option value="2">Last 365 days</option>
              <option value="3">Custom</option>
            </Form.Control>
          </div>
        </div>
        <Row className="g-0">
          <Col className="mb-sm-4 mb-lg-0 vh-lg-100" lg={ 3 } style={{
              backgroundColor: "#DFE6E9",
            }}>
            <Sidebar 
              handleMessageText= { handleMessageText }
            />
          </Col>
          <Col className="mb-sm-4" lg={ 9 }>
            <div className="px-lg-3">
              <Stack 
                className="d-flex justify-content-center align-items-center border rounded-1"
                style={{
                  height: "540px",
                }}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ 
                    width: "295px",
                    height: "295px",
                    backgroundColor: "#DFE6E9",
                    borderRadius: "50%"
                  }}>
                  <Image
                    src={ EmptyDataImg }
                    alt="empty-data-pic"
                    style={{
                      margin: "auto",
                      display: "block"
                    }}
                  />
                </div>
                <p 
                  className="mt-2" 
                  style={{ color : "#B2BEC3", fontSize: "24px" }}>Select COVID-19 category to start</p>
              </Stack>
            </div>
          </Col>
        </Row>
       </Tab>
       <Tab 
         eventKey="+" 
         title="+">
        <div>&nbsp;</div>
       </Tab>
    </Tabs>
  );
}

export default NavbarTabs;