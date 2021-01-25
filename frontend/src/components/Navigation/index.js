import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to='/signup' className='bg-yellow-300' >Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className=''>
      <ul className=''>
        <li className='bg-red-500'>
          <NavLink exact to='/' className='bg-purple-200' >Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>

  );
}

export default Navigation;
