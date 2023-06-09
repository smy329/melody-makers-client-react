import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import Loader from '../components/Loader';

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (loading || isInstructorLoading) {
    return <Loader />
  }
  if (user && isInstructor) {
    return children;
    // } else {
    //   toast.error('You need to login first');
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default InstructorRoute;
