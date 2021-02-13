import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/home' component={Home} />
				<Redirect exact from='/' to='/login' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
