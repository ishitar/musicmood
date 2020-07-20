import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render(){
    return (
      //react fragment allows to simulate html, no need to write div or anything
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route component={Default}></Route>
        </Switch>        
        <Modal />
      </React.Fragment>
    );
  }
  
}

export default App;
