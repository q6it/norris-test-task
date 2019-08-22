import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import  * as actionCreators from '../actions/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(actionCreators.fetchJokes());
store.dispatch(actionCreators.fetchCategories());

export default store;