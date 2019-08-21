import axios from 'axios';
// import actionTypes from './actionTypes'

const FETCH_JOKES = 'FETCH_JOKES';
const FETCH_CATEGORY = 'FETCH_CATEGORY';
// const SAVE_RANDOM_FAVORITE_JOKE = 'ADD_RANDOM_FAVORITE_JOKE';
const SAVE_JOKE = 'SAVE_JOKE';
// const ADD_FAVORITE_JOKE_BY_CATEGORY = 'ADD_FAVORITE_JOKE_BY_CATEGORY';
const EDIT_JOKE = 'EDIT_JOKE';
const DELETE_JOKE = 'DELETE_JOKE';


export function fetchJokes(category) {
  console.log('fetched NEW joke');
  const randomUrl = 'https://api.chucknorris.io/jokes/random';
  const baseUlr = category ? `${randomUrl}?category=${category}` : randomUrl

  console.log("TCL: fetchJokes -> category", category)
  return(dispatch) => {
    return axios.get(baseUlr).then(response => {
      console.log("TCL: fetchJokes -> response", response)
      dispatch(showJokes(response.data))
    })
    .catch(error => {
      throw(error);
    });
  }
}

export function showJokes(joke) {
  console.log("TCL: showJokes -> jokes", joke)
  return {
    type: FETCH_JOKES,
    joke: joke
  }
}

export function fetchCategories () {  
  return (dispatch) => {
    return axios.get('https://api.chucknorris.io/jokes/categories').then(response => {
      dispatch(showCategories(response.data))
    })
    .catch(error => {
      throw(error);
    });
  }
}

export function showCategories(categories) {
  return {
    type: FETCH_CATEGORY,
    categories 
  }
}

export function saveJoke(id, joke) {
  console.log("TCL: ACtion saveJoke -> joke", joke)
  return {
    type: SAVE_JOKE,
    id,
    joke
  }
}
