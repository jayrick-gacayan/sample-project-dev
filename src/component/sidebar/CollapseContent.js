import React from 'react';
import { Form, Collapse } from 'react-bootstrap';

import '../customStyles.scss';


const dataOrientation = [
  {
    value: "dailyPer100k",
    text: "Daily per 100,000"
  },
  {
    value: "weeklyPer100k",
    text: "Weekly per 100,000"
  },
  {
    value: "monthlyPer1M",
    text: "Monthly per 1,000,000"
  }
];

const CollapseContent = ({ showCollapse }) => {
  return (
    <Collapse in={ showCollapse }>
      <div className="mt-3">
        <Form.Group className="mb-1">
          <Form.Label>
            Data Orientation
          </Form.Label>
          <Form.Select>
            {
              dataOrientation.map(
                (dataOrient) => {
                  return (
                    <option 
                      key={ dataOrient.value } 
                      value={ dataOrient.value }>
                      { dataOrient.text }
                    </option>
                  );
                }
              )
            }
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