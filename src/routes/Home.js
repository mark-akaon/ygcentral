import React, {Component} from 'react';
import {Column, Row} from 'simple-flexbox';
import ResultsView from "../components/ResultsView";
import TimeTable from "../components/TimeTable";
import imgName from '../images/main_image.jpeg';
import './Home.css';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Component: <ResultsView/>
    }
  }
  
  onLinkClicked = (Component) => () => {
    this.setState({Component})
  }
  
  render() {
    console.log("Home @ render");
    const anchorStyle = {
      cursor: 'pointer',
      fontSize: '30px'
    };
  
    const imgStyle = {
      margin: 'auto 10px',
      padding: 'auto 10px',
      width : '90%',
    };
    
    return (
      <Column>
        <br/>
        <br/>
        <Row horizontal='center'>
          <h1>양곡중앙교회</h1>
        </Row>
  
        <Row horizontal='center'>
          <h2>파워공동체</h2>
        </Row>
        
        <div className="container1">
          <div className="outer1">
            <div className="inner1">
              <div className="centered1">
                <img className="images_fit" src={imgName} style={imgStyle} alt="description" />
              </div>
            </div>
          </div>
        </div>
        
        <Row horizontal='around'>
          <a style={anchorStyle} onClick={this.onLinkClicked(<ResultsView />)}>결과</a><div style={{fontSize: '30px'}}>|</div>
          <a style={anchorStyle} onClick={this.onLinkClicked(<TimeTable />)}>일정표 </a>
        </Row>
        <Row style={{ marginTop: 16 }}>
          {this.state.Component}
        </Row>
      </Column>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
