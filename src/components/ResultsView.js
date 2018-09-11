import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import ResultsGraph from "./ResultsGraph";
import axios from "axios/index";

class ResultsView extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      a : 560,
      b : 860,
      c : 400,
      d : 500,
      high: 860,
    };
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    
    (async () => {
      try {
        const tempArr = await this.getScores();
        console.log("tempArr : " + tempArr);
  
        console.log(typeof(tempArr));
        
        const string = JSON.stringify(tempArr);
        const json = JSON.parse(string);
        console.log(json);
        
        this.setState({
          a: json.a,
          b: json.b,
          c: json.c,
          d: json.d,
          high: json.high
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }
  
  async getScores() {
    console.log("ResultsView @ getScores");
    
    // /video-tutorial/bookmark-list/?email=marc@akaon.com
    const req = await axios.get('http://13.209.73.226:3001/getScores');
    return req.data;
  }
  
  render() {
    return (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>점수 결과!</h1>
        </Row>
        
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> 1조 </h3>
            <span> {this.state.a} 점! </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> 2조 </h3>
            <span> {this.state.b} 점! </span>
          </Column>
  
          <Column flexGrow={1} horizontal='center'>
            <h3> 3조 </h3>
            <span> {this.state.c} 점! </span>
          </Column>
          
          <Column flexGrow={1} horizontal='center'>
            <h3> 4조 </h3>
            <span> {this.state.d} 점! </span>
          </Column>
        </Row>
        
        <br/><br/>
        <ResultsGraph a={this.state.a} b={this.state.b} c={this.state.c} d={this.state.d} high={this.state.high} />
      </Column>
    );
  }
}

export default ResultsView;
