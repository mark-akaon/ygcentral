import React, {Component} from 'react';
import Selector from "./Selector";
import {Button} from 'reactstrap';
import './GetScore.css'
import axios from "axios/index";
import {Link} from "react-router-dom";
import {Row} from 'simple-flexbox';

class GetScore extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isClose: false,
      selectedGroup: [],
    };
    
    this.redirect = undefined;
    this.selectedLabel = [];
    
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async postStoreScoreData(selectedLabel, points) {
    console.log("postStoreScoreData @ selectedLabel : " + selectedLabel + " , points : " + points);
    
    const req = await axios.post('http://13.209.73.226:3001/api/form-submit-url', {
      labels: selectedLabel,
      score: points
    });
    
    return req.data;
  }
  
  handleSubmit(event) {
    console.log("handleSubmit @ event : " + event);
    
    event.preventDefault();
    
    (async () => {
      try {
        const tempArr = await this.postStoreScoreData(this.selectedLabel, this.props.points);
        console.log(tempArr);
  
        const string = JSON.stringify(tempArr);
        const json = JSON.parse(string);
        const tempScore = json.score;
        console.log(tempScore);
    
        console.log(typeof this.props.points);
        console.log(typeof tempScore);
        
        if (this.props.points === tempScore) {
          console.log("yeah!");
          this.redirect = (<Row horizontal='center'><br/><br/><br/><Link className="font" to= '/'>결과 페이지로!</Link></Row>);
          this.setState({
            isClose: true,
          });
        } else {
          console.log("no!!");
        }
      } catch (e) {
        console.log(e);
      }
    })();
    
  }
  
  handleOnCategoryChange(data) {
    console.log("GetScore @ handleOnCategoryChange , data : " + data);
    
    data.map((element, index) => {
      console.log(element.label);
      this.selectedLabel[index] = element.label;
      return true;
    });
    
    console.log(this.selectedLabel.length);
    
    this.setState({
      selectedGroup: this.selectedLabel,
    });
  }
  
  render() {
    console.log(this.state.isClose);
    return (
      <div>
        {this.state.isClose ? this.redirect : (<div className="container">
          <div className="outer">
            <div className="inner">
              <div className="centered">
                
                <h1>Get the Points!</h1>
                <h3>줄 점수 : {this.props.points} Points </h3>
                <Selector onChangeCate={this.handleOnCategoryChange}/>
                <form className="form" ref="form" onSubmit={this.handleSubmit}>
                  <br/>
                  <br/>
                  <div>
                    <Button color="success">야호!!!</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default GetScore;
