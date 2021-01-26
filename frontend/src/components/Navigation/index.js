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
        <li className='bg-red-500 flex justify-around'>
          <NavLink exact to='/'>
            <i className='fas fa-user-circle fa-3x py-2' />
          </NavLink>
          <div>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </nav>

  );
}

export default Navigation;
