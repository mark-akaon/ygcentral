import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import ResultsGraph from "./ResultsGraph";

class ResultsView extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      a : 10,
      b : 20,
      c : 30,
      d : 40
    };
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>Score 결과!</h1>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> 1조 </h3>
            <span> {this.state.a} points! </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> 2조 </h3>
            <span> {this.state.b} points! </span>
          </Column>
  
          <Column flexGrow={1} horizontal='center'>
            <h3> 3조 </h3>
            <span> {this.state.c} points! </span>
          </Column>
          
          <Column flexGrow={1} horizontal='center'>
            <h3> 4조 </h3>
            <span> {this.state.d} points! </span>
          </Column>
        </Row>
        
        <br/><br/>
        <ResultsGraph a={this.state.a} b={this.state.b} c={this.state.c} d={this.state.d} high={this.state.d} />
      </Column>
    );
  }
}

export default ResultsView;
