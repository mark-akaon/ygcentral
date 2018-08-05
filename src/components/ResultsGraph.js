import React, { Component } from 'react';

import { CanvasJSChart } from '../libs/canvasjs.react';

//const CanvasJSReact = require('../libs/canvasjs.react');
//const CanvasJS = CanvasJSReact.CanvasJS;
//const CanvasJSChart = CanvasJS.CanvasJSChart;

class ResultsGraph extends Component {
  render() {
    let temp1, temp2, temp3, temp4;
  
    temp1 = (this.props.a === this.props.high ? `"Highest"`: `${this.props.a}`);
    temp2 = (this.props.b === this.props.high ? `"Highest"`: `${this.props.b}`);
    temp3 = (this.props.c === this.props.high ? `"Highest"`: `${this.props.c}`);
    temp4 = (this.props.d === this.props.high ? `"Highest"`: `${this.props.d}`);
    
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title:{
        text: "각조 합산 점수"
      },
      data: [{
        type: "column", //change type to bar, line, area, pie, etc
        indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 1, y: this.props.a, indexLabel:temp1 },
          { x: 2, y: this.props.b, indexLabel:temp2 },
          { x: 3, y: this.props.c, indexLabel:temp3 },
          { x: 4, y: this.props.d, indexLabel:temp4 },
        ]
      }]
    };
    
    return (
      <div>
        <CanvasJSChart options = {options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default ResultsGraph;