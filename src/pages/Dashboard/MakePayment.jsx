import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MakePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();

  const { _id } = location?.state || {};

  const handleMakePayment = () => {
    const enrolledClassData = { email: user.email, classId: _id };
    axiosSecure.patch('/users/enrolled-classes', enrolledClassData).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="w-3/5 mx-auto my-auto">
      <h1>{user?.email}</h1>
      <p>{_id}</p>
      <button className="btn-theme" onClick={handleMakePayment}>
        Make Payment
      </button>
    </div>
  );
};

export default MakePayment;
