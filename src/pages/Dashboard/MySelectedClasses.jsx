import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';
import MySelectedClassesCard from '../../components/MySelectedClassesCard';

const MySelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedFromDB = [], refetch } = useQuery({
    queryKey: ['selectedFromDB', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/dashboard/selected-classes/${user?.email}`);
      return res.data;
    },
  });
  console.log(selectedFromDB);
  //const { image, price, name, instructorName, availableSeats } = selectedFromDB[];
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {selectedFromDB.map((singleClassFromDB) => {
        refetch();
        return <MySelectedClassesCard key={singleClassFromDB._id} singleClassFromDB={singleClassFromDB} />;
      })}
    </div>
  );
};

export default MySelectedClasses;
