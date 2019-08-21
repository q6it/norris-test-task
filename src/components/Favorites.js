import React, { Component }  from 'react';

import { connect } from 'react-redux';

class FavoriteJokes extends Component {
  render(){
    console.log('favorite comp props', this.props)
    const favoriteJokes = this.props.state.savedJokes ? this.props.state.savedJokes.joke : 'no saved jokes jet'
    return (
      <div>{favoriteJokes}</div>
    )
  }

};

const mapStateToProps = (state) => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    state
  }
}

export default connect(mapStateToProps)(FavoriteJokes);