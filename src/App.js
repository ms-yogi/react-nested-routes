import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
