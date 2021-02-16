import { Switch, Link } from 'react-router-dom';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

const Home = ({ routes }) => {
	const menu = [
		{
			path: '/home/page1', // the url
			name: 'Page1', // name that appear in Sidebar
		},
		{
			path: '/home/page2',
			name: 'Page2',
		},
	];

	return (
		<>
			<div className='home'>
				{/* This can be treated as a sidebar component */}
				<div className='sidebar'>
					<h2>React Nested Routes</h2>

					<ul>
						{menu.map((menuItem) => (
							<li key={menuItem.name}>
								<Link to={menuItem.path}>{menuItem.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</div>
		</>
	);
};

export default Home;
