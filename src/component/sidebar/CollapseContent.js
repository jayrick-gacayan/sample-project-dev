import React from 'react';
import { Form, Collapse } from 'react-bootstrap';
import ReactSelect from 'react-select';
import '../customStyles.scss';


const dataOrientationOption = [
  {
    value: "dailyPer100k",
    label: "Daily per 100,000"
  },
  {
    value: "weeklyPer100k",
    label: "Weekly per 100,000"
  },
  {
    value: "monthlyPer1M",
    label: "Monthly per 1,000,000"
  }
];

const raceOption = [
  {
    value: 'All',
    label: 'All'
  },
  {
    value: 'race1',
    label: 'Race 1'
  },
  {
    value: 'race2',
    label: 'Race 2'
  }
]

const fontStyles = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: "19px",
}


const CollapseContent = ({ showCollapse }) => {
  return (
    <Collapse in={ showCollapse }>
      <div className="mt-2">
        <Form.Group className="mb-2">
          <Form.Label className="mb-0">
            Data Orientation
          </Form.Label>
          <ReactSelect
            options={ dataOrientationOption }
            defaultValue={ dataOrientationOption[0] }
            styles={{
              control: (base) => ({
                ...base,
                "&:hover": {
                  backgroundColor: "#D3ECFF"
                }
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
            placeholder="Data Orientation "
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="mb-0">
            Race
          </Form.Label>
          <ReactSelect
            options={ raceOption }
            defaultValue={ raceOption[0] }
            styles={{
              control: (base) => ({
                ...base,
                "&:hover": {
                  backgroundColor: "#D3ECFF"
                }
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
            placeholder="Race "
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="mb-0">
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