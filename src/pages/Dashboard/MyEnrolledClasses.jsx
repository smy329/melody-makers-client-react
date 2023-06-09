import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyEnrolledClassesCard from '../../components/MyEnrolledClassesCard';

const MyEnrolledClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolled = [], refetch } = useQuery({
    queryKey: ['enrolled', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/dashboard/enrolled-classes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {enrolled.map((singleEnrolled) => {
        refetch();
        return <MyEnrolledClassesCard key={singleEnrolled._id} singleEnrolled={singleEnrolled} />;
      })}
    </div>
  );
};

export default MyEnrolledClasses;
