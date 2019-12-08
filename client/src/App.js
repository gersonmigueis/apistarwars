import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/home'
import Navbar from './components/navbar'
import Login from './components/login'
import Profile from './components/profile'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
        <Navbar/>
          <Route exact path="/" component={Login} />
            <div className="container"> 
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            </div>
        </div> 
      </Router>
    )
  }
}

export default App
