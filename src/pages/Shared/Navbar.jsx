import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi2';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../../providers/AuthProvider';

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
  const navigate = useNavigate();

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
    <div className="relative mb-0 md:mb-5 container mx-auto p-5">
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
            <NavLink className={`text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide`} to="/">
              Home
            </NavLink>
            <NavLink
              className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
              to="/instructors"
            >
              Instructors
            </NavLink>

            <NavLink
              className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
              to="/classes"
            >
              Classes
            </NavLink>

            {user ? (
              <>
                <Link
                  className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide"
                  to={isAdmin ? '/admin/dashboard' : isInstructor ? '/instructors/dashboard' : '/users/dashboard'}
                >
                  Dashboard
                </Link>
                <Link
                  className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
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
                  className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                  to="/signup"
                >
                  <button className="btn-theme">Register Now</button>
                </NavLink>
              </>
            )}
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
                    <NavLink
                      className={`text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide  `}
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                      to="/blog"
                    >
                      Instructors
                    </NavLink>

                    <NavLink
                      className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                      to="/blog"
                    >
                      Classes
                    </NavLink>

                    {/* {user ? (
                      <>
                        <Link
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                        <span className="flex items-center p-2 md:p-5">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt=""
                              className=" h-8 w-8 rounded-full"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={user.displayName}
                            />
                          ) : (
                            <HiUserCircle className="h-8 w-8 " />
                          )}
                        </span>
                      </>
                    ) : (
                      <>
                        <NavLink
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                          to="/login"
                        >
                          Login
                        </NavLink>
                        <NavLink
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                          to="/register"
                        >
                          <button className="theme-btn">Register Now</button>
                        </NavLink>
                      </>
                    )} */}
                    {user ? (
                      <>
                        <Link
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide"
                          to={
                            isAdmin ? '/admin/dashboard' : isInstructor ? '/instructors/dashboard' : '/users/dashboard'
                          }
                        >
                          Dashboard
                        </Link>
                        <Link
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
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
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                          to="/login"
                        >
                          Login
                        </NavLink>
                        <NavLink
                          className="text-base font-medium p-2 md:p-5 text-black hover:text-primary tracking-wide "
                          to="/signup"
                        >
                          <button className="btn bg-blue-700 text-white ">Register Now</button>
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
