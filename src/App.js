import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import routes from './Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact from='/' to='/login' />
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
