import React, {Component} from 'react';
import GetScore from "../components/GetScore";
import './Home.css';

class GetScoreMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: <GetScore points={this.props.match.params.points}/>
    }
  }
  
  /*onLinkClicked = (Component) => () => {
    this.setState({Component})
  }
  */
  
  render() {
    console.log("GetScoreMain @ render");
    return (
     <div><GetScore points={this.props.match.params.points}/></div>
    );
  }
}

GetScoreMain.propTypes = {};
GetScoreMain.defaultProps = {};

export default GetScoreMain;
