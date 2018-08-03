import React, {Component} from 'react';
import {Column, Row} from 'simple-flexbox';
import GetScore from "../components/GetScore";
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
          <h1>YG Central Church</h1>
        </Row>
  
        <div className="container">
          <div className="outer">
            <div className="inner">
              <div className="centered">
                <img className="images_fit" src={imgName} style={imgStyle} />
              </div>
            </div>
          </div>
        </div>
        
        
        <Row horizontal='center'>
        
        </Row>
        <Row horizontal='around'>
          {/*<a style={anchorStyle} onClick={this.onLinkClicked(<GetScore />)}>Get the scores!</a><div style={{fontSize: '30px'}}>|</div>*/}
          <a style={anchorStyle} onClick={this.onLinkClicked(<ResultsView />)}>Results</a><div style={{fontSize: '30px'}}>|</div>
          <a style={anchorStyle} onClick={this.onLinkClicked(<TimeTable />)}>Time Table </a>
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
