import { combineReducers } from 'redux';
import {routeReducer} from 'redux-simple-router';
import {mapReducer} from 'map'
import {searchReducer} from 'search'

export default combineReducers({
	routing: routeReducer,
  map: mapReducer,
  search: searchReducer
});
