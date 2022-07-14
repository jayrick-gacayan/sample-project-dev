import React, { useEffect, useState } from 'react';

import { Tabs, Tab, Row, Col, Stack, Image, Form } from 'react-bootstrap';

import './NavbarTabsStyles.scss';
import '../customStyles.scss';

import Sidebar from '../sidebar/Sidebar';
import EmptyDataImg from '../../empty_data_img.png';

const NavbarTabs = () => {

  const [ messageText, setMessageText ] = useState("");
  const [ categories, setCategories ] = useState([]);
  
  useEffect(()=>{
    setMessageText((categories.join(" and ")).toLowerCase());
  },[categories]);

  return (
    <div id="tabNavigation">
      <Tabs 
        defaultActiveKey="dashboard" 
        className="mb-3">
        <Tab 
          eventKey="dashboard" 
          title="Dashboard"
          className="g-lg-0">
          <div className="container-fluid">
            <Row className="px-2">
              <Col 
                className="mb-sm-1 p-lg-2 p-sm-3"
                lg={ 9 }
                md={ 8 }>
                <div className="p-2">
                  <p style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#000000"
                  }}>{ messageText }</p>
                </div>
              </Col>
              <Col 
                className="mb-sm-4 p-2"
                lg={ 3 }
                md={ 4 }>
                <div className="px-lg-3">
                  <Form.Label className="mb-0">Period: </Form.Label>
                  <Form.Control
                    as="select"
                    style={{
                      color: "#636E72"
                    }}>
                    <option value="last30days" >Last 30 days</option>
                    <option value="1">Last 90 days</option>
                    <option value="2">Last 365 days</option>
                    <option value="3">Custom</option>
                  </Form.Control>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="g-0">
            <Col 
              id="sidebar-container"
              className="mb-sm-4 mb-xs-2 mb-lg-0 vh-lg-100" 
              lg={ 3 }>
              <Sidebar
                setCategories={ setCategories }
                maxCategory={ categories.length < 3 }
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
    </div>
  );
}

export default NavbarTabs;