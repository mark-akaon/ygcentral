import React, {Component} from 'react';
import Selector from "./Selector";
import {Button} from 'reactstrap';
import './GetScore.css'

class GetScore extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isClose: false,
    };
  
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    
  
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    
    /*if (!this.validate()) {
      this.setState({
        isClose : true,
      });
  
      e.preventDefault();
    }*/
  }
  
  handleOnCategoryChange(data) {
    console.log(data);
    console.log("GetScore @ handleOnCategoryChange , data : " + data);
    
    /*this.setState({
      titleDataIndex: data.titleId,
    });
    
    // watch later를 누른 경우
    if (this.state.cateTitles.length === data.titleId) {
      console.log("ListPages @ 저장된 동영상 탭을 눌렀다!");
      
      (async () => {
        try {
          const tempArr = await this.getStoredVideoData();
          console.log(tempArr);
          
          this.setState({
            isAllVideos: false,
            isSpecificVideos: true,
            specificVideoArray: tempArr,
          });
        } catch (e) {
          console.log(e);
        }
      })();
    } else {
      if (data.titleId === 1) { // 첫번째 all 선택한 경우
        console.log("전체가 나와야 한다");
        // this.requestVideoData();
        this.setState({
          isAllVideos: true,
          isSpecificVideos: false,
        });
      } else if (data.title === "後で見る" || data.title === "WatchLater") {  // watch later를 누른 경우
        console.log("ListPages @ 저장된 동영상 탭을 눌렀다!");
        
        (async () => {
          try {
            const tempArr = await this.getStoredVideoData();
            console.log(tempArr);
            
            this.setState({
              isAllVideos: false,
              isSpecificVideos: true,
              specificVideoArray: tempArr,
            });
          } catch (e) {
            console.log(e);
          }
        })();
      } else { // 비디오 타이틀의 탭을 누른 경우
        (async () => {
          try {
            const tempArr = await this.getSpecificVideoCateData(data.titleId);
            console.log(tempArr);
            
            // TEST TEST //
            tempArr.map((videoItem) => {
              if ( this.WATCHED_ID_TEMP.includes(videoItem.id)) {
                console.log("있다!!!!!!!!!!!!!!!!! : " + videoItem.id);
              }else {
                console.log("없다!!!!!!!!!!!!!!!!! : " + videoItem.id);
              }
              
              return true;
            });
            // TEST TEST //
            
            this.setState({
              isAllVideos: false,
              isSpecificVideos: true,
              specificVideoArray: tempArr,
            });
          } catch (e) {
            console.log(e);
          }
        })();
      }
    }*/
  }
  
  render() {
    console.log(this.state.isClose);
    return (
      <div>
        {this.state.isClose ? undefined : (<div className="container">
          <div className="outer">
            <div className="inner">
              <div className="centered">
                
                <h1>Get Points!</h1>
                <h3>줄 점수 : {this.props.points} </h3>
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
