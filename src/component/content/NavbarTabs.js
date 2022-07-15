import React, { useEffect, useState } from 'react';

import { Tabs, Tab, Row, Col, Stack, Image, Form } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import ReactSelect from 'react-select';

import './NavbarTabsStyles.scss';
import '../customStyles.scss';

import Sidebar from '../sidebar/Sidebar';
import EmptyDataImg from '../../empty_data_img.png';

const selectPeriod = [ 
  {
    value: "last30days",
    label: "Last 30 days"
  },
  {
    value: "last90days",
    label: "Last 90 days"
  },
  {
    value: "last365days",
    label: "Last 365 days"
  },
  {
    value: "fromJanuary2020",
    label: "From January 2020"
  },
  {
    value: "custom",
    label: (
      <div className="d-flex justify-content-between">
        <div>
          <span>Custom</span>
        </div>
        <div>
          <ChevronRight />
        </div>
      </div>
    )
  }
];

const fontStyles = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: "19px",
}

const NavbarTabs = () => {

  const [ messageText, setMessageText ] = useState("");
  const [ sampleTo, setSampleTo ] = useState({
    category:[],
    period: ""
  });

  const [ period, setPeriod ] = useState("");
  const [ categories, setCategories ] = useState([]);

  useEffect(
    () => {
      setSampleTo((sample) => {
        return 
      });
      setMessageText((categories.join(" and ")).toLowerCase());
    }
  ,[categories]);

  const handlePeriodChange = (selected) => {
    console.log("select value ", selected);

  };


  const periodOption = (props) => {
    return (
      <div>

      </div>
    );
  }

  return (
    <div id="tabNavigation">
      <Tabs 
        defaultActiveKey="dashboard" 
        className="mb-3">
        <Tab 
          eventKey="dashboard" 
          title="Dashboard"
          className="g-lg-0">
          <div className="container-fluid g-sm-0">
            <Row className="g-0">
              <Col 
                className="mb-4 mb-sm-4 p-lg-2 p-sm-3"
                lg={ 9 }
                md={ 8 }
                xs={ 12 }>
                <div className="p-2">
                  <p style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#000000"
                  }}>{ messageText }</p>
                </div>
              </Col>
              <Col 
                className="mb-4 mb-sm-4"
                lg={ 3 }
                md={ 4 }
                xs={ 12 }>
                <div className="pe-lg-3 pe-md-0">
                  <Form.Label className="mb-0">Period: </Form.Label>
                  <ReactSelect
                    options={ selectPeriod }
                    isDisabled={ categories.length === 0 }
                    defaultValue={ selectPeriod[0] }
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        "&:hover": {
                          backgroundColor: "#D3ECFF"
                        },
                      }),
                      singleValue: (base) => ({
                        ...base,
                        ...fontStyles,
                        color: "#2D3436"
                      }),
                      option: (base, state) => ({
                        ...base,
                        ...fontStyles,
                        color: "#000000",
                        backgroundColor: state.isSelected ? "#72BBF4" : base.backgroundColor
                      }),
                      placeholder: (base) => ({
                        ...base,
                        ...fontStyles,
                        color: "#B2BEC3",
                      })
                    }}
                    onChange={ handlePeriodChange }
                    placeholder="Period: "
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Row className="g-0">
            <Col 
              id="sidebar-container"
              className="mb-sm-4 mb-4 mb-lg-0 vh-lg-100" 
              lg={ 3 }>
              <Sidebar
                setCategories={ setCategories }
                categories={ categories }
              />
            </Col>
            <Col className="mb-sm-4 mb-4" lg={ 9 }>
              <div className="px-lg-3">
                <Stack 
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "540px",
                    border: "1px solid #DFE6E9",
                    borderRadius: "4px"
                  }}>
                  <div
                    className="d-flex justify-content-center align-items-center ellipse-style-1">
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
                    className="mt-2 paragraph-style-1">
                    Select COVID-19 category to start
                  </p>
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

//{ 
//  category: 'cases', 
//  dataOrientation: dataOrientation, 
//  race: race
//  geography: geography
//}