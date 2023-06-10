import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ManageUsers = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { data: users, refetch } = useQuery({
    queryKey: ['users', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-users`);
      return res.data;
    },
  });
  console.log(users);

  const handleMakeAdmin = (targetedUserEmail) => {
    const updateRole = {
      email: targetedUserEmail,
      role: 'admin',
    };
    axiosSecure.patch('/manage-users/role', updateRole).then((res) => console.log(res.data));
    refetch();
  };

  const handleMakeInstructor = (targetedUserEmail) => {
    const updateRole = {
      email: targetedUserEmail,
      role: 'instructor',
    };
    axiosSecure.patch('/manage-users/role', updateRole).then((res) => console.log(res.data));
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
              <th>Email</th>
              <th>Role</th>
              <th> Action</th>
            </tr>
          </thead>
          {users?.map((singleUser, index) => {
            refetch();
            return (
              <tbody key={singleUser._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="avatar">
                        <div className=" rounded-lg w-12 h-12">
                          <img src={singleUser?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{singleUser?.name} </div>
                  </td>
                  <td>{singleUser?.email} </td>
                  <td>{singleUser?.role} </td>
                  <th className="flex gap-1 justify-center">
                    <button
                      className="btn-theme-small disabled:btn-disabled"
                      disabled={singleUser.role === 'admin'}
                      onClick={() => {
                        handleMakeAdmin(singleUser.email);
                      }}
                    >
                      Make Admin
                    </button>
                    <button
                      className="btn-theme-small disabled:btn-disabled"
                      disabled={singleUser.role === 'instructor'}
                      onClick={() => {
                        handleMakeInstructor(singleUser.email);
                      }}
                    >
                      Make Instructor
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

export default ManageUsers;
