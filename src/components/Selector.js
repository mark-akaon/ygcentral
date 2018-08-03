import React, {Component} from 'react';
import chroma from 'chroma-js';
import {colourOptions} from '../docs/data';
import Select from 'react-select';

class Selector extends Component {
  
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
  }
  
  componentDidMount() {
  }
  
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  
    this.props.onChangeCate(selectedOption);
  };
  
  render() {
    const colourStyles = {
      control: styles => ({...styles, backgroundColor: 'white'}),
      option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
          ...styles,
          backgroundColor: isDisabled
            ? null
            : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
          color: isDisabled
            ? '#ccc'
            : isSelected
              ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
              : data.color,
          cursor: isDisabled ? 'not-allowed' : 'default',
        };
      },
      multiValue: (styles, {data}) => {
        const color = chroma(data.color);
        return {
          ...styles,
          backgroundColor: color.alpha(0.1).css(),
        };
      },
      multiValueLabel: (styles, {data}) => ({
        ...styles,
        color: data.color,
      }),
      multiValueRemove: (styles, {data}) => ({
        ...styles,
        color: data.color,
        ':hover': {
          backgroundColor: data.color,
          color: 'white',
        },
      }),
    };
  
    //let boundItemClick = this.onItemClick.bind(this, data);
    const { selectedOption } = this.state;
    
    return (
      <Select className="customWidth"
              closeMenuOnSelect={false}
              isMulti
              value={selectedOption}
              onChange={this.handleChange}
              options={colourOptions}
              styles={colourStyles}
      />
    );
  }
}

export default Selector;