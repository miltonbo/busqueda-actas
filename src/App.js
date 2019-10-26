/**
* Main App
*/
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { Helmet } from "react-helmet";

// css
import './lib/miltonboCss';

// app component
import App from './container/App';
import AppConfig from 'Constants/AppConfig';

import { configureStore } from './store';
import { PersistGate } from 'redux-persist/integration/react'

const MainApp = () => {
	const { store, persistor } = configureStore()
	return <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Helmet>
				<link rel="shortcut icon" href={AppConfig.favicon}></link>
			</Helmet>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<Router>
					<Switch>
						<Route path="/" component={App} />
					</Switch>
				</Router>
			</MuiPickersUtilsProvider>
		</PersistGate>
	</Provider>
};

export default MainApp;
