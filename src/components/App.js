import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import Home from './Home';
import devActions from '../reducers/devBios';
import SearchDevelopers from './SearchDevelopers';


class App extends Component{
  componentDidMount=()=>{
    fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
    .then(response=>response.json())
    .then(devs=>{
      this.props.fetchDevelopers(devs);
    });
  }
   
    
  render(){
    return (
      <Router >
        <Navbar />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/bios" ><DisplayBios developers={this.props.developers}/></Route>
          <Route path="/create-bio" ><AddDeveloper /></Route>
          <Route path="/search" ><SearchDevelopers /></Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(({developers})=>({
  developers:developers
}),{
  fetchDevelopers: devActions.getAllBiosActionCreator
})(App);
