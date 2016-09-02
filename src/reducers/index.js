import { combineReducers } from 'redux';
import {routeReducer} from 'redux-simple-router';
import {mapReducer} from 'map'

export default combineReducers({
	routing: routeReducer,
  map: mapReducer
});
