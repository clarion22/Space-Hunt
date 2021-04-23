import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from '../Search';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const demoLogin = (e) => {
		e.preventDefault();
		return dispatch(
			sessionActions.login({
				credential: 'Demo-lition',
				password: 'password',
			})
		).catch((err) => console.log(err));
	};
	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<LoginFormModal />
				<NavLink to='/signup' className='btn btn-yellow'>
					Sign Up
				</NavLink>
				<button
					className='btn btn-yellow'
					style={{ marginLeft: '10px' }}
					onClick={demoLogin}
				>
					Demo
				</button>
			</>
		);
	}

	return (
		<nav className=''>
			<ul className=''>
				<li className='bg-blue-400 flex justify-around'>
					<NavLink exact to='/'>
						<i className='fas fa-user-circle fa-3x py-2' />
					</NavLink>
					<Search />
					<div className='flex items-center'>
						{isLoaded && sessionLinks}
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
