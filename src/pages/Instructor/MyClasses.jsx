import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClassesFromDB = [], refetch } = useQuery({
    queryKey: ['myClassesFromDB', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructors/dashboard/my-classes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table m-5 w-11/12 mx-auto text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Total Seats</th>
              <th>Enrolled</th>
              <th> Action</th>
            </tr>
          </thead>
          {myClassesFromDB.map((singleMyClass, index) => {
            refetch();
            return (
              <tbody key={singleMyClass._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="avatar">
                        <div className=" rounded-lg w-12 h-12">
                          <img src={singleMyClass?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{singleMyClass?.className} </div>
                      <div
                        className={`${singleMyClass?.status === 'approved' && 'theme-badge-success'} 
                          ${singleMyClass?.status === 'pending' && 'theme-badge-warning'} 
                          ${singleMyClass?.status === 'denied' && 'theme-badge-error'}`}
                      >
                        {singleMyClass?.status}
                      </div>
                    </div>
                  </td>
                  <td>{singleMyClass?.price} </td>
                  <td>{singleMyClass?.totalSeats} </td>
                  <td>{singleMyClass?.enrolledStudents} </td>
                  <th className="flex gap-1 justify-center">
                    <button className="btn btn-outline btn-xs">details</button>
                    <button className="btn btn-primary bg-blue-700 text-white btn-xs">Update</button>
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
