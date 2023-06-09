import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Loader from '../components/Loader';
//import { toast } from 'react-hot-toast';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
    // } else {
    //   toast.error('You need to login first');
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
