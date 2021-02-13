import { Link } from 'react-router-dom';

const Login = (props) => {
	return (
		<>
			<div className='login'>
				<p>Login to the app</p>
				<Link to='/home' className='button'>
					Login
				</Link>
			</div>
		</>
	);
};

export default Login;
