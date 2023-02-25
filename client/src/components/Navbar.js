// import { useSelector } from "react-redux";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <nav className='main-nav'>
      <div className='nav-container'>
        <div className='nav-home-container'>
          <NavLink to='/'>
            <span className='nav-home'>Home</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div className='nav-content'>
            <NavLink to='/dashboard' className='mx-3'>
              <span>Dashboard</span>
            </NavLink>
          </div>
        ) : (
          <div className='nav-content'>
            <NavLink to='/login'>
              <span>Login</span>
            </NavLink>

            <NavLink to='/register' className=' mx-3'>
              <span>Register</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
