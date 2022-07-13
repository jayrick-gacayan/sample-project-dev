import React from 'react';
import { Form } from 'react-bootstrap'
import { Plus, Dash } from 'react-bootstrap-icons';

const CollapseToggle = ({ handleCollapseToggle, showCollapse, type, label }) => {
  return(
    <div 
      onClick={ () => handleCollapseToggle(type) }
      aria-controls="example-collapse-text"
      aria-expanded={ showCollapse }
      className="d-flex justify-content-between align-items-center">
      <Form.Check 
        type="checkbox"
        label={ label }
        onChange={ () => handleCollapseToggle(type) }
        checked={ showCollapse }
      />
      { showCollapse ? <Dash className="f-4" /> : <Plus className="f-4" /> }
  </div>
  );
    
};

export default CollapseToggle;