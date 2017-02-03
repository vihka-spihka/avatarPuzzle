import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import WelcomePage from '../components/WelcomePage';
import LoginPage from '../components/LoginPage';
import SelectPage from '../components/SelectPage';
import GamePage from '../components/GamePage';
import About from '../components/About';
import NotFound from '../components/NotFound';

export const routes = (
	<Route path="/" component={ App } >
		<IndexRoute component={ WelcomePage } />
		<Route path="login" component={ LoginPage } />
		<Route path="select" component={ SelectPage } />
		<Route path="game" component={ GamePage } />
		<Route path="about" component={ About } />
		<Route path="*" component={ NotFound } />
	</Route>
);