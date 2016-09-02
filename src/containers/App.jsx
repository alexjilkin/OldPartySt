import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {Router, Route} from 'react-router';
import {createHistory} from 'history';
import {syncReduxAndRouter, routeReducer} from 'redux-simple-router';

import Home from '../components/Home.jsx';
import {Map} from 'map'
import {scSearch} from 'search'
require('../styles/app.scss');

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={Home}></Route>
          <Route path="/map" component={Map}></Route>
          <Route path="/search" component={scSearch}></Route>
				</Router>
			</Provider>
		);
	}
}

export default App;
