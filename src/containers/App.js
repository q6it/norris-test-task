import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './../components/Home';
import Favorites from './../components/Favorites'
import About from './../components/About';
// import Favorites from './../components/Favorites';

class App extends Component {
  // constructor(prop) {
    // console.log("TCL: App -> constructor -> prop", prop)
    // super(prop)
    // bind this to functions or use arrow func
    // this.Somefunc = this.Somefunc.bind(this)
  // }
  // Somefunc = (e) => {
    // this.state.something
  // }
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