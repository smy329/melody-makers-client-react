import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useQuery({
    queryKey: ['classes', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-classes`);
      return res.data;
    },
  });

  const handleApprove = (targetedClassId) => {
    const updateStatus = {
      classId: targetedClassId,
      status: 'approved',
    };
    axiosSecure.patch('/manage-classes/status', updateStatus).then((res) => console.log(res.data));
    refetch();
  };

  const handleDeny = (targetedClassId) => {
    const updateStatus = {
      classId: targetedClassId,
      status: 'denied',
    };
    axiosSecure.patch('/manage-classes/status', updateStatus).then((res) => console.log(res.data));
    refetch();
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table m-5 w-11/12 mx-auto text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Status</th>
              <th> Action</th>
            </tr>
          </thead>
          {classes?.map((singleClass, index) => {
            const availableSeats = singleClass.totalSeats - singleClass.enrolledStudents;
            refetch();
            return (
              <tbody key={singleClass._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="avatar">
                        <div className=" rounded-lg w-12 h-12">
                          <img src={singleClass?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{singleClass?.className} </div>
                  </td>
                  <td>{singleClass?.instructorName} </td>
                  <td>{singleClass?.instructorEmail} </td>
                  <td>{singleClass?.price} </td>
                  <td>{availableSeats} </td>
                  <td>{singleClass?.status} </td>
                  <th className="flex gap-1 justify-center">
                    <button
                      className="btn-theme-success-small disabled:btn-disabled"
                      disabled={singleClass?.status === 'approved' || singleClass?.status === 'denied'}
                      onClick={() => {
                        handleApprove(singleClass._id);
                      }}
                    >
                      Approve
                    </button>
                    <button
                      className="btn-theme-error-small disabled:btn-disabled"
                      disabled={singleClass?.status === 'approved' || singleClass?.status === 'denied'}
                      onClick={() => {
                        handleDeny(singleClass._id);
                      }}
                    >
                      Deny
                    </button>
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

export default ManageClasses;
