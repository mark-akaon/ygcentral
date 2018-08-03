import React, { Component } from 'react';
import './App.css';
import Home from "./routes/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import GetScoreMain from "./routes/GetScoreMain";

class App extends Component {
  render() {
    // eWdjZW50cmFsLXBvd2VyLWNvbW11bml0eS1yZXF1ZXN0LXNjb3Jlcy3quYDsg4HtmIQt67Kg7J207Iqk
    return (
  
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/eWdjZW50cmFsLXBvd2VyLWNvbW11bml0eS1yZXF1ZXN0LXNjb3Jlcy3quYDsg4HtmIQt67Kg7J207Iqk/:points" exact component={GetScoreMain}/>
          {/*<Route path="/searchResults/:emailId/:searchWords/:lang" component={SearchResults}/>
          <Route path="/test/:id/:lang" component={IdentVideo}/>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


/*// Initialize state
 state = { passwords: [] }
 
 // Fetch passwords after first mount
 componentDidMount() {
 this.getPasswords();
 }
 
 getPasswords = () => {
 // Get the passwords and store them in state
 fetch('/api/passwords')
 .then(res => res.json())
 .then(passwords => this.setState({ passwords }));
 }
 
 render() {
 const { passwords } = this.state;
 
 return (
 <div className="App">
 {/!* Render the passwords if we have them *!/}
 {passwords.length ? (
 <div>
 <h1>5 Passwords.</h1>
 <ul className="passwords">
 {/!*
 Generally it's bad to use "index" as a key.
 It's ok for this example because there will always
 be the same number of passwords, and they never
 change positions in the array.
 *!/}
 {passwords.map((password, index) =>
 <li key={index}>
 {password}
 </li>
 )}
 </ul>
 <button
 className="more"
 onClick={this.getPasswords}>
 Get More
 </button>
 </div>
 ) : (
 // Render a helpful message otherwise
 <div>
 <h1>No passwords :(</h1>
 <button
 className="more"
 onClick={this.getPasswords}>
 Try Again?
 </button>
 </div>
 )}
 </div>
 );
 }*/
