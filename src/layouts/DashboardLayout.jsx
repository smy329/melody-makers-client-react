import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaWallet, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { SiGoogleclassroom, SiAddthis } from 'react-icons/si';
import { IoIosWallet } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import Navbar from '../pages/Shared/Navbar';
import { IoBookmarks } from 'react-icons/io5';

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin);
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-blue-600 text-base-content">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/admin/dashboard">
                    <FaHome /> Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-users">
                    <FaUsers /> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-classes">
                    <SiGoogleclassroom /> Manage Classes
                  </NavLink>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li>
                  <NavLink to="/instructors/dashboard">
                    <FaHome /> Instructor Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/instructors/add-class">
                    <SiAddthis /> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/instructors/my-classes">
                    <SiGoogleclassroom /> My Classes
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink to="/users/dashboard">
                    <FaHome /> Student Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users/my-selected-classes">
                    <IoBookmarks /> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users/my-enrolled-classes">
                    <SiGoogleclassroom /> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users/payment-history">
                    <MdPayment /> Payment History
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
