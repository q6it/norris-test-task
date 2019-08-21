const initState = {
// jokes: {
    id: null,
    value: '',
    categories: [],
    category: '',
    savedJokes: []
// }
  // jokes: ['test joke ', 'second one']
}

const rootReducer = (state = initState, action) => {
  console.log("TCL: rootReducer -> action", action)
  if (action.type === 'FETCH_JOKES') {
    return {
      ...state,
      id: action.joke.id,
      value: action.joke.value
    }
  } else if (action.type === 'FETCH_CATEGORY' ) {
    return {
      ...state,
      categories: action.categories
    }
  } else if (action.type === 'SAVE_JOKE') {
    return {
      ...state,
      savedJokes: [...state.savedJokes, action.joke]
    }
    
  }
  else {
    return state
  }
};

export default rootReducer;