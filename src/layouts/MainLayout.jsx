import { Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
  return (
    <div className="dark">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
