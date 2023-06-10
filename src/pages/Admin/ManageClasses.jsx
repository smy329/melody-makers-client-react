import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import FeedbackModal from '../../components/Modals/FeedbackModal';

const ManageClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
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

  const handleFeedbackClick = (classId) => {
    setSelectedClass(classId);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };
  return (
    <div>
      <div className="overflow-x-auto bg-blue-50">
        <h1 className="text-3xl font-semibold text-center m-8">Manage Classes</h1>
        <table className="table m-5 w-11/12 mx-auto text-center bg-white">
          {/* head */}
          <thead>
            <tr className="bg-green-200 font-medium text-sm">
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
                    {singleClass?.status !== 'pending' ? (
                      <button
                        className="btn-theme-small disabled:btn-disabled"
                        onClick={() => handleFeedbackClick(singleClass._id)}
                      >
                        Send Feedback
                      </button>
                    ) : (
                      <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded" disabled>
                        Send Feedback
                      </button>
                    )}
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {selectedClass && <FeedbackModal classId={selectedClass} closeModal={closeModal} />}
    </div>
  );
};

export default ManageClasses;
