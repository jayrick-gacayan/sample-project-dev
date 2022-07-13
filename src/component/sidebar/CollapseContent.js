import React from 'react';
import { Form, Collapse } from 'react-bootstrap';

const CollapseContent = ({ showCollapse }) => {
  return (
    <Collapse in={ showCollapse }>
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
  );
}

export default CollapseContent;