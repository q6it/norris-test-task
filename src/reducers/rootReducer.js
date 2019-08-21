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
    console.log('TCL: rootReducer -> action', action);
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
            edit: false
          }
        ]
      }
    } 
    return {...state}
  } else if (action.type === 'DELETE_JOKE') {
    return {
      ...state,
      savedJokes: state.savedJokes.filter((joke)=> joke.id !== action.id)
    };
  } else if (action.type === 'EDIT_JOKE') {
    return {
      ...state,
      savedJokes: state.savedJokes.map(joke => {
      console.log('TCL: rootReducer -> joke', joke);
        return joke.id === action.id ? {
          ...joke, 
          edit: !joke.edit
        }: joke
      })
      // savedJokes: state.savedJokes.map(joke => joke.id === action.id ? {...joke, edit:!joke.edit}: joke)
    }
  } else if (action.type === 'UPDATE_JOKE'){
    console.log('TCL: rootReducer -> action', action);
    return {
      ...state,
      savedJokes: state.savedJokes.map(joke => {
      console.log('TCL: rootReducer -> joke', joke);
        if(joke.id === action.id) {
          return {
            ...joke,
            id: action.id,
            joke: action.joke,
            edit: !joke.edit
          }
        }
      })
    }
  } else {
    return state
  }
};

export default rootReducer;