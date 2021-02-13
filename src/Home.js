import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const Home = () => {
	const routes = [
		{
			path: '/page1', // the url
			component: Page1, // view rendered
		},
		{
			path: '/page2',
			component: Page2,
		},
		{
			path: '/page3',
			component: Page3,
		},
		{
			path: '/page4',
			component: Page4,
		},
	];

	const sidebarRoutes = [
		{
			path: '/home/page1', // the url
			name: 'Page1', // name that appear in Sidebar
		},
		{
			path: '/home/page2',
			name: 'Page2',
		},
		{
			path: '/home/page3',
			name: 'Page3',
		},
		{
			path: '/home/page4',
			name: 'Page4',
		},
	];

	return (
		<>
			<div className='home'>
				{/* This can be treated as a sidebar component */}
				<div className='sidebar'>
					<h2>React Routing Demo</h2>

					<ul>
						{sidebarRoutes.map((route) => (
							<li key={route.name}>
								<NavLink exact to={route.path}>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<Switch>
					{routes.map((route, i) => {
						return route.component ? (
							<Route
								key={i}
								exact={true}
								path={`/home${route.path}`}
								render={(props) => (
									<route.component {...props} />
								)}
							/>
						) : null;
					})}
					<Redirect exact from='/home' to='/home/page1' />
				</Switch>
			</div>
		</>
	);
};

export default Home;
