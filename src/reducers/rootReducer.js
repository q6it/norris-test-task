const initState = {
  id: null,
  value: '',
  categories: [],
  category: '',
  created: null,
  savedJokes: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'FETCH_JOKES') {
    return {
      ...state,
      id: action.joke.id,
      value: action.joke.value,
      created: action.joke.created_at
    }
  } else if (action.type === 'FETCH_CATEGORY' ) {
    return {
      ...state,
      categories: action.categories
    }
  } else if (action.type === 'SAVE_JOKE') {
    const index = state.savedJokes.findIndex(el => el.id == action.id);
    if(index === -1) {
      return {
        ...state,
        savedJokes: [
          ...state.savedJokes,
          {
            id: action.id,
            joke: action.joke,
            // category: action.category
            //jokeCreated: action.created_at
          }
        ]
      }
    } 
    return {...state}
  } else if (action.type === 'DELETE_JOKE') {
    console.log('TCL: action', action);
    console.log('%c Log this:', 'background: black; color: red;', state);
    return {
      ...state,
      savedJokes: state.savedJokes.filter((joke)=> joke.id !== action.id)
    };
  }
  else {
    return state
  }
};

export default rootReducer;