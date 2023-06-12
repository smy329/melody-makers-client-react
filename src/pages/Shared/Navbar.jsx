import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi2';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../../providers/AuthProvider';
import { BsFillSunFill } from 'react-icons/bs';

//tooltip
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Navbar = () => {
  //const { user, logOut } = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light ');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('Logged out successfully');
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="relative mb-0 md:mb-5 container mx-auto ">
      <Tooltip id="profile-name" />
      <div className="flex justify-between">
        <div className="navbar-start flex items-center">
          <img src={logo} alt="logo" className="h-12 md:h-16 w-12 md:w-16" />
          <div className="hidden md:block">
            <p className="font-bold text-xl">Melody</p>
            <p className="font-bold text-xl">Makers</p>
          </div>
        </div>
        <div className="md:navbar-center hidden md:flex flex-col md:flex-row ">
          <div className="flex flex-col md:flex-row text-right md:text-center items-center">
            <NavLink className="text-base font-medium p-2 md:p-5 hover:text-primary tracking-wide" to="/">
              Home
            </NavLink>
            <NavLink className="text-base font-medium p-2 md:p-5 hover:text-primary tracking-wide " to="/instructors">
              Instructors
            </NavLink>

            <NavLink className="text-base font-medium p-2 md:p-5 hover:text-primary tracking-wide " to="/classes">
              Classes
            </NavLink>

            {user ? (
              <>
                <Link
                  className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide"
                  to={isAdmin ? '/admin/dashboard' : isInstructor ? '/instructors/dashboard' : '/users/dashboard'}
                >
                  Dashboard
                </Link>
                <Link
                  className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                  onClick={handleLogout}
                >
                  Logout
                </Link>
                <span className="flex items-center p-2 md:p-5">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className=" h-8 w-8 rounded-full"
                      data-tooltip-id="profile-name"
                      data-tooltip-content={user?.displayName}
                    />
                  ) : (
                    <HiUserCircle
                      className="h-8 w-8 "
                      data-tooltip-id="profile-name"
                      data-tooltip-content={user?.displayName}
                    />
                  )}
                </span>
              </>
            ) : (
              <>
                <NavLink className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide " to="/login">
                  Login
                </NavLink>
                <NavLink className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide " to="/signup">
                  Register Now
                </NavLink>
              </>
            )}

            {/* dark-light theme toggle button */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
        <div className="lg:hidden z-20">
          <button
            className="p-2 absolute right-5 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-20 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex  items-center justify-end">
                  <button
                    className="p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <div className="flex flex-col md:flex-row text-right md:text-center">
                    <NavLink className={`text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide  `} to="/">
                      Home
                    </NavLink>
                    <NavLink
                      className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                      to="/instructors"
                    >
                      Instructors
                    </NavLink>

                    <NavLink
                      className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                      to="/classes"
                    >
                      Classes
                    </NavLink>

                    {user ? (
                      <>
                        <Link
                          className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide"
                          to={
                            isAdmin ? '/admin/dashboard' : isInstructor ? '/instructors/dashboard' : '/users/dashboard'
                          }
                        >
                          Dashboard
                        </Link>
                        <Link
                          className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                        <span className="flex items-center p-2 md:p-5">
                          {user?.photoURL ? (
                            <img
                              src={user?.photoURL}
                              alt=""
                              className=" h-8 w-8 rounded-full"
                              data-tooltip-id="profile-name"
                              data-tooltip-content={user?.displayName}
                            />
                          ) : (
                            <HiUserCircle
                              className="h-8 w-8 "
                              data-tooltip-id="profile-name"
                              data-tooltip-content={user?.displayName}
                            />
                          )}
                        </span>
                      </>
                    ) : (
                      <>
                        <NavLink
                          className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                          to="/login"
                        >
                          Login
                        </NavLink>
                        <NavLink
                          className="text-base font-medium p-2 md:p-5  hover:text-primary tracking-wide "
                          to="/signup"
                        >
                          Register Now
                        </NavLink>
                      </>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
