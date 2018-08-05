import React, { Component } from 'react';
import imgName from '../images/time_table.jpeg';

class TimeTable extends Component {
  
  render() {
    const imgStyle = {
      margin: 'auto 10px',
      width : '92%',
    };
    
    return (
      <div>
        <img className="images_fit" src={imgName} style={imgStyle} alt="description"/>
      </div>
    );
  }
}

export default TimeTable;
