import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './../components/Home';
import Favorites from './../components/Favorites'
import About from './../components/About';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/favorites' component={Favorites} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;