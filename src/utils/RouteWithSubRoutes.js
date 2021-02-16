import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};

export default RouteWithSubRoutes;
