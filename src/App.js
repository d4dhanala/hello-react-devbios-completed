import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import Home from './Home';

const history = createBrowserHistory();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      developers:[]
    }
  }

  componentDidMount(){
    fetch("https://developer-service-overspeedy-celebratedness.cfapps.io/developers")
    .then(response=>response.json())
    .then(devs=>this.setState({developers:devs}));
  }

  render(){
    return (
      <Router history={ history }>
        <Navbar />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/bios"><DisplayBios developers={this.state.developers}/></Route>
          <Route path="/create-bio" ><AddDeveloper /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
