import React from 'react';
import { Form } from 'react-bootstrap'
import { PlusLg, DashLg } from 'react-bootstrap-icons';

import '../customStyles.scss';

const CollapseToggle = ({ handleCollapseToggle, showCollapse, type, label }) => {
  return(
    <div 
      onClick={ () => handleCollapseToggle(type) }
      aria-expanded={ showCollapse }
      className="d-flex justify-content-between align-items-center">
      <Form.Check 
        type="checkbox"
        label={ label }
        onChange={ () => handleCollapseToggle(type) }
        checked={ showCollapse }
        className={ showCollapse ? `text-blue-3` : ``}
      />
      { 
        showCollapse ? 
        <DashLg className="icon-style-1" /> : 
        <PlusLg className="icon-style-1" /> 
      }
  </div>
  );
    
};

export default CollapseToggle;