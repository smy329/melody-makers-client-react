import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaWallet, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { IoIosWallet } from 'react-icons/io';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
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
        <ul className="menu p-4 w-80 h-full bg-blue-600 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/admin/dashboard">
                  <FaHome /> Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">
                  <FaHome /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/user/dashboard">
                  <FaHome /> User Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/dashboard">
                  <FaHome /> Another
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
