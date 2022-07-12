import React, { useState, useEffect } from 'react';

import { Tabs, Tab, ListGroup, Row, Col, Stack, Image, Form, Collapse } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';
import './NavbarTabsStyles.scss';
import EmptyDataImg from '../../empty_data_img.png';


const NavbarTabs = () => {

  const [ openCases, setOpenCases ] = useState(false);
  const [ openDeaths, setOpenDeaths ] = useState(false);
  const [ openTests, setOpenTests ] = useState(false);
  const [ openVaccinations, setOpenVaccinations ] = useState(false);
  const [ openPoliceShootings, setOpenPoliceShootings ] = useState(false);
  const [ openPopulationEstimates, setOpenPopulationEstimates ] = useState(false);


  const [ categoriesCount, setCategoriesCount ] = useState(0);
  const [ textInfo, setTextInfo ] = useState('');

  const handleToggleCases = () => {
    if(categoriesCount < 3){
      setOpenCases(!openCases);

    }
  }

  const handleToggleDeaths = () => {
    if(categoriesCount < 3){
      setOpenDeaths(!openDeaths);

      
    }
  }

  const handleToggleTests = () => {
    if(categoriesCount < 3){
      setOpenTests(!openTests);

      setCategoriesCount(
        (categoriesCount) => {
          return !openTests ? 
            categoriesCount + 1 :
            categoriesCount - 1
        }
      );
    }
  }

  useEffect(() =>{
    if(categoriesCount < 3)
    {
      
    }
  }
  ,[categoriesCount]);

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
            &nbsp;
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
            <ListGroup >
              <ListGroup.Item variant="secondary">
                Select max. 2 categories
              </ListGroup.Item>
              <ListGroup.Item 
                variant={ openCases ? `light` : `secondary` }
                style={{ borderLeftColor: "#F0027F", borderLeftWidth: "4px" }}>
                <div 
                  onClick={ handleToggleCases }
                  aria-controls="example-collapse-text"
                  aria-expanded={ openCases }
                  className="d-flex justify-content-between align-items-center">
                  <Form.Check 
                    type="checkbox"
                    label="Cases"
                    onChange={ handleToggleCases }
                    checked={ openCases }
                  />
                  { openCases ? <Dash className="f-4" /> : <Plus className="f-4" /> }
                </div>
                <Collapse in={openCases}>
                  <div id="example-collapse-text">
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Data Orientation:
                      </Form.Label>
                      <Form.Select>
                        <option value="dailyPer100" >Daily per 100,000</option>
                        <option value="1">Weekly per 100,000</option>
                        <option value="2">Monthly per 1,000,000</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Race
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="race1">Race 1</option>
                        <option value="2">Race 1</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Geography
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                variant={ openDeaths ? `light` : `secondary` }
                style={{ borderLeftColor: "#8F26E1", borderLeftWidth: "4px" }}>
                <div 
                  onClick={ handleToggleDeaths }
                  aria-controls="example-collapse-text"
                  aria-expanded={ openDeaths }
                  className="d-flex justify-content-between align-items-center">
                  <Form.Check 
                    type="checkbox"
                    label="Deaths"
                    checked={ openDeaths }
                    onChange={ handleToggleDeaths }
                  />
                  { openDeaths ? <Dash className="f-4" /> : <Plus className="f-4" /> }
                </div>
                <Collapse in={ openDeaths }>
                  <div id="example-collapse-text">
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Data Orientation:
                      </Form.Label>
                      <Form.Select>
                        <option value="dailyPer100" >Daily per 100,000</option>
                        <option value="1">Weekly per 100,000</option>
                        <option value="2">Monthly per 1,000,000</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Race
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="race1">Race 1</option>
                        <option value="2">Race 1</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Geography
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                variant={ openTests ? `light` : `secondary` }
                style={{ borderLeftColor: "#F2B51C", borderLeftWidth: "4px" }}>
                <div 
                  onClick={ handleToggleTests }
                  aria-controls="example-collapse-text"
                  aria-expanded={ openTests }
                  className="d-flex justify-content-between align-items-center">
                  <Form.Check 
                    type="checkbox"
                    label="Tests"
                    checked={ openTests }
                    onChange={ handleToggleTests }
                  />
                  { openTests ? <Dash className="f-4" /> : <Plus className="f-4" /> }
                </div>
                <Collapse in={openTests}>
                  <div id="example-collapse-text">
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Data Orientation:
                      </Form.Label>
                      <Form.Select>
                        <option value="dailyPer100" >Daily per 100,000</option>
                        <option value="1">Weekly per 100,000</option>
                        <option value="2">Monthly per 1,000,000</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Race
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="race1">Race 1</option>
                        <option value="2">Race 1</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>
                        Geography
                      </Form.Label>
                      <Form.Select>
                        <option value="all" >All</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                variant="secondary"
                className="d-flex justify-content-between align-items-center">
                <Form.Check 
                  type="checkbox"
                  label="Vaccinations"
                />
                { openCases ? <Dash className="f-4" /> : <Plus className="f-4" /> }
              </ListGroup.Item>
              <ListGroup.Item
                variant="secondary"
                className="d-flex justify-content-between align-items-center">
                <Form.Check 
                  type="checkbox"
                  label="Police Shootings"
                />
                { openCases ? <Dash className="f-4" /> : <Plus className="f-4" /> }
              </ListGroup.Item> 
              <ListGroup.Item
                variant="secondary">
                  <div 
                  onClick={() => setOpenCases(!openCases)}
                  aria-controls="example-collapse-text"
                  aria-expanded={openCases}
                  className="d-flex justify-content-between align-items-center">
                  
                  <Form.Check 
                    type="checkbox"
                    label={( 
                      <div className="d-inline-block">
                        <span className="d-block">Population estimates</span>
                        <span className="d-block f-6">(1 year estimates)</span>
                      </div>
                    )}
                    onChange={ () => { setOpenCases(!openCases) }}
                    checked={ openCases }
                  />
                  { openCases ? <Dash className="f-4" /> : <Plus className="f-4" /> }
                </div>

              </ListGroup.Item>
            </ListGroup>
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