// import react, { Component } from 'react';
// import { connect } from 'react-redux';
// import React, { useState } from 'react';

// const Jokes = (props) => {
//   const jokes = props.jokes ? (
//   <div className='container'>{ props.jokes  }</div>
//   ) : (
//     <div className="container"> Loading new jokes...</div>
//   )
//   return (
//     <div className='container'>{ jokes }</div>
//   )
// }

// const mapStatetoProps = (state, ownProps) => {
//   let id = ownProps.match.params
//   return {
//     jokes: state.jokes.find(joke => joke.id === id)
//   }
  
// }

// export default connect(mapStatetoProps)(Jokes)