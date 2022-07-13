import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CollapseToggle from './CollapseToggle';
import CollapseContent from './CollapseContent';

import './SidebarStyle.scss';

const ListGroupOptions = [
  {
    key: "Cases",
    label: "Cases",
    classBorderLeft: "border-left-hotPink",
    showCollapse: false,
  },
  {
    key: "Deaths",
    label: "Deaths",
    classBorderLeft: "border-left-purple",
    showCollapse: false,
  },
  {
    key: "Tests",
    label: "Tests",
    classBorderLeft: "border-left-purple",
    showCollapse: false
  },
  {
    key: "Vaccinations",
    label: "Vaccinations",
    classBorderLeft: "border-left-green",
    showCollapse: false
  },
  {
    key: "Police Shootings",
    label: "Police Shootings",
    classBorderLeft: "border-left-green-1",
    showCollapse: false
  },
  {
    key: "Population estimates",
    label: ( 
      <div className="d-inline-block">
        <span className="d-block">Population estimates</span>
        <span className="d-block f-6">(1 year estimates)</span>
      </div>
    ),
    classBorderLeft: "border-left-orange",
    showCollapse: false
  }
];

const Sidebar = ({ handleMesageText }) => {
  const [ listOptions, setListOptions ] = useState(ListGroupOptions);

  const handleCollapseToggle = (type) => {
    setListOptions(
      listOptions.map(
        (listItem) => {
          const showCollapse = listItem.showCollapse;

          if(listItem.key === type)
            return ({ ...listItem, showCollapse: !listItem.showCollapse })
          
          return listItem;
        }
      )
    )
  };

  return(
    <ListGroup>
      <ListGroup.Item variant="secondary">
        Select max. 2 categories
      </ListGroup.Item>
      {
        listOptions.map(
          (listGroupItem) => {
            return(
              <ListGroup.Item key={ listGroupItem.key }
                variant={ listGroupItem.showCollapse ? `light` : `secondary` }
                className={ listGroupItem.classBorderLeft }>
                <CollapseToggle 
                  handleCollapseToggle={ handleCollapseToggle }
                  showCollapse={ listGroupItem.showCollapse }
                  type={ listGroupItem.key }
                  label={ listGroupItem.label }
                />
                <CollapseContent 
                  showCollapse={ listGroupItem.showCollapse }
                />
              </ListGroup.Item>
            )
          }
        )
      }
    </ListGroup>
  );
}

export default Sidebar;