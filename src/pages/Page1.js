import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Subpage1 from './subpages/Subpage1';
import Subpage2 from './subpages/Subpage2';

const Page1 = () => {
	const menu = [
		{
			path: '/home/page1/subpage1',
			name: 'Subpage 1',
		},
		{
			path: '/home/page1/subpage2',
			name: 'Subpage 2',
		},
	];

	const routes = [
		{
			path: '/subpage1', // the url
			component: Subpage1, // view rendered
		},
		{
			path: '/subpage2',
			component: Subpage2,
		},
	];

	return (
		<div className='page-main'>
			<div className='navbar'>
				<ul>
					{menu.map((route) => (
						<li className='relative px-6 py-3' key={route.name}>
							<NavLink exact to={route.path}>
								<span className='ml-4'>{route.name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<p>hi</p>

			<Subpage1 />
			<Switch>
				{routes.map((route, i) => {
					return route.component ? (
						<Route
							key={i}
							exact={true}
							path={`/home/page1${route.path}`}
							render={(props) => {
								console.log('rendering');
								return <route.component {...props} />;
							}}
						/>
					) : (
						console.log('WRONG')
					);
				})}
				<Redirect exact from='/home/page1' to='/home/page1/subpage1' />
			</Switch>
		</div>
	);
};

export default Page1;
